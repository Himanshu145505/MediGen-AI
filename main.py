from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from typing import Optional
import google.generativeai as genai
from pyngrok import ngrok
import uvicorn
import nest_asyncio
from fastapi.middleware.cors import CORSMiddleware

# Configure Google Generative AI
genai.configure(api_key="AIzaSyAztXHR7_81ezfqI6tQ1eKgugTjDIJPyWQ")  # Replace with your valid API key

# Initialize the Gemini 1.5 Flash model
model = genai.GenerativeModel("gemini-1.5-flash")

# Initialize FastAPI app
app = FastAPI()

# Enable CORS for React frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with specific domain(s) in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the inpuxt schema to receive data
class PatientData(BaseModel):
    Name: Optional[str] = None
    Age: Optional[int] = None
    Gender: Optional[str] = None
    Phone: Optional[str] = None
    Existing_Conditions: Optional[str] = None
    Allergies: Optional[str] = None
    Past_Surgeries: Optional[str] = None
    Ongoing_Diseases: Optional[str] = None
    Medications: Optional[str] = None
    Lab_Results: Optional[str] = None
    Medical_Imaging_Files: Optional[str] = None
    Consent: Optional[str] = None

# Output schema for the response
class MedicalReportResponse(BaseModel):
    medical_report: str
    transplant_needed: bool
    severity: str
    transplant_prompt: str

# POST endpoint for generating the detailed medical report
@app.post("/generate_detailed_report/", response_model=MedicalReportResponse)
async def generate_report(data: PatientData):
    try:
        # Ensure no required fields are missing (this may cause issues with missing fields)
        if data.Name is None or data.Age is None or data.Gender is None:
            raise HTTPException(status_code=400, detail="Missing required fields: Name, Age, Gender")

        # Format the prompt with patient information
        prompt = f"""
        Generate a detailed medical analysis report for the following patient:

        **Name**: {data.Name if data.Name else 'Not Provided'}
        **Age**: {data.Age if data.Age else 'Not Provided'}
        **Gender**: {data.Gender if data.Gender else 'Not Provided'}
        **Phone**: {data.Phone if data.Phone else 'Not Provided'}
        **Existing Conditions**: {data.Existing_Conditions if data.Existing_Conditions else 'Not Provided'}
        **Allergies**: {data.Allergies if data.Allergies else 'Not Provided'}
        **Past Surgeries**: {data.Past_Surgeries if data.Past_Surgeries else 'Not Provided'}
        **Ongoing Diseases**: {data.Ongoing_Diseases if data.Ongoing_Diseases else 'Not Provided'}
        **Medications**: {data.Medications if data.Medications else 'Not Provided'}
        **Lab Results**: {data.Lab_Results if data.Lab_Results else 'Not Provided'}
        **Medical Imaging Files**: {data.Medical_Imaging_Files if data.Medical_Imaging_Files else 'Not Provided'}

        Analyze the above data and determine if the patient needs an organ/tissue or any transplant or replacement.
        If yes, determine the level of severity of the need: low, moderate, or high. If no transplant is required, state "null".

        If a transplant is required, generate a prompt for another model that will create a 3D anatomical model of the healthy organ or tissue that needs to be replaced. The 3D model should be functional and detailed. For example: 
        - "Generate a 3D diagram of a fully functional healthy heart".
        - "Generate a 3D diagram of a healthy kidney suitable for transplant".
        - "Generate a 3D diagram of a functional lung".

        The variables you will return should be:
**transplant_needed**: True or False
**severity**: The severity level (low, moderate, high) or null
Return the transplant prompt at the end of the response, and avoid using any quotation marks in the response.
        """
        print("Prompt:", prompt)
        # Generate the report using the Gemini API
        response = model.generate_content(prompt)

        # Parse AI response to extract transplant information and severity
        if "transplant_needed: true" in response.text.lower() or "transplant_needed: yes" in response.text.lower() or "true" in response.text.lower():
            transplant_needed = True
            # Extract severity from response (this can be enhanced with more specific checks)
            if "severity: high" in response.text.lower() or "high" in response.text.lower():
                severity = "high"
            elif "severity: moderate" in response.text.lower() or "moderate" in response.text.lower():
                severity = "moderate"
            elif "severity: low" in response.text.lower() or "low" in response.text.lower():
                severity = "low"
            else:
                severity = "null"

            # Generate the transplant prompt for 3D model generation
            transplant_prompt = "generate "+response.text.lower().split("generate")[1].strip()
        else:
            transplant_needed = False
            severity = "null"
            transplant_prompt = "null"

        return {
            "medical_report": response.text,
            "transplant_needed": transplant_needed,
            "severity": severity,
            "transplant_prompt": transplant_prompt,
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating report: {str(e)}")

# Run the app locally
if __name__ == "__main__":
    nest_asyncio.apply()
    public_url = ngrok.connect(8000).public_url
    print(f"Public URL: {public_url}")
    uvicorn.run(app, host="0.0.0.0", port=8000)
