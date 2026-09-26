"""Healthcare, Medical Emergencies & Patient Rights (75 scenarios)"""

def populate_health(add):
    cat = "Healthcare, Medical Navigation & Eldercare"
    
    items = [
        # Medical Navigation & Second Opinions
        ("Patient Advocacy", "Seeking a verified second medical opinion without offending primary doctor", 
         "Patients hide previous records out of fear, causing duplicate expensive diagnostic tests.", 
         "Gather chronological patient dossier (blood labs, biopsy slides, DICOM MRI/CT scan CD), seek tertiary hospital specialist", "Undergoing unnecessary major invasive surgery"),
        ("Patient Advocacy", "Verifying if a recommended surgery or cardiac stent is genuinely urgent", 
         "Commercial private clinics often push immediate coronary angioplasty for stable non-critical lesions.", 
         "Ask for angiogram CD, get independent review from non-affiliated interventional cardiologist", "Paying 3-5 Lakh BDT for non-essential invasive procedures"),
        ("Patient Advocacy", "Spotting counterfeit prescription drugs in local pharmacies", 
         "Up to 15% of high-cost antibiotics and anticancer medicines in unregulated markets are chalk powders.", 
         "Verify Directorate General of Drug Administration (DGDA) registration, scratch-off authentication QR codes", "Treatment failure and fatal disease progression"),
        ("Patient Advocacy", "Understanding Laboratory Diagnostic Test Accuracy (NABL / ISO accredited labs)", 
         "Neighborhood standalone pathology labs often run uncalibrated biochemistry reagents.", 
         "Insist on ISO 15189 / NABL accredited diagnostic centers for critical biopsy or hormone assays", "False positive cancer diagnosis causing panic and wrong treatment"),
        ("Patient Advocacy", "Filing a Medical Negligence complaint with Bangladesh Medical and Dental Council (BMDC)", 
         "Gross medical negligence can be investigated by BMDC disciplinary committee to revoke doctor license.", 
         "Original prescription, operation notes, discharge summary, file complaint to BMDC Registrar", "Doctor continuing dangerous malpractice on other patients"),

        # Emergencies & Critical Care
        ("Medical Emergencies", "Navigating the 'Golden Hour' of Acute Ischemic Stroke (tPA injection)", 
         "Stroke symptoms (facial droop, arm weakness, slurred speech - FAST) require hospital arrival within 4.5 hours.", 
         "Rush immediately to stroke-ready hospital with 24/7 CT scan capability for thrombolysis (tPA)", "Permanent lifelong hemiplegia paralysis or death"),
        ("Medical Emergencies", "Heart Attack (Myocardial Infarction) emergency action protocol", 
         "Giving water or delaying transit while waiting for local doctor wastes heart muscle life.", 
         "Chew 300mg soluble Aspirin + 300mg Clopidogrel immediately, rush to primary PCI-capable hospital", "Sudden cardiac arrest and irreversible heart damage"),
        ("Medical Emergencies", "Arranging verified ICU Ambulance with mechanical ventilator", 
         "Many private 'ICU' ambulances are regular vans with empty plastic oxygen cylinders and zero trained paramedics.", 
         "Verify transport ventilator model, doctor on board, dedicated arterial line suction pump", "Patient asphyxiating in transit due to ventilator malfunction"),
        ("Medical Emergencies", "Finding rare blood groups (e.g. Bombay phenotype or Negative groups) in emergency", 
         "Blood banks often lack rare O-negative or AB-negative units during sudden hemorrhage.", 
         "Contact voluntary blood donor networks (Quantum Foundation, Sandhani, Badhan), direct cross-matching", "Fatal transfusion delay during emergency surgery"),
        ("Medical Emergencies", "Handling acute snakebite emergency in rural areas", 
         "Applying tight tourniquets or cutting the wound accelerates tissue necrosis and gangrene.", 
         "Immobilize limb with pressure bandage (like a fracture), rush immediately to Upazila Health Complex for anti-venom", "Fatal respiratory failure or leg amputation from tight tourniquet"),

        # Health Insurance & Hospital Billing
        ("Insurance & Billing", "Cashless Hospitalization vs Reimbursement Claim procedure", 
         "TPA (Third Party Administrator) pre-authorization must be submitted within 24 hours of planned admission.", 
         "TPA pre-auth form, primary doctor treatment estimate, corporate insurance card, policy copy", "Claim rejected as unauthorized; paying entire hospital bill out of pocket"),
        ("Insurance & Billing", "Challenging health insurance claim rejection for 'Pre-existing Conditions'", 
         "Insurers routinely reject claims citing undisclosed pre-existing diabetes or hypertension.", 
         "Prove the specific hospitalized illness has no direct etiology to chronic condition; appeal to IDRA", "Losing hundreds of thousands in legitimate insurance coverage"),
        ("Insurance & Billing", "Auditing hospital discharge billing for inflated pharmacy and consumable charges", 
         "Private corporate hospitals quietly bill for unused disposable syringes, gloves, and luxury nursing charges.", 
         "Demand itemized pharmacy ledger, cross-verify against nursing daily medication chart", "Overpaying 20-30% on hospital discharge bills"),

        # Eldercare & Palliative Support
        ("Eldercare", "Hiring and vetting verified Home Care Nurses for bedridden patients", 
         "Uncertified agency caregivers often cause severe stage-4 pressure bedsores.", 
         "Verify nursing diploma / paramedic license, police verification, background check, 2-hourly turning schedule", "Severe infected decubitus bedsores requiring debridement surgery"),
        ("Eldercare", "Sizing and maintaining Home Oxygen Concentrator vs High-Pressure Cylinders", 
         "Pulse-dose portable concentrators cannot supply high continuous flow for severe COPD patients.", 
         "Choose continuous flow 5L/min or 10L/min unit with oxygen purity monitor (>93%), backup cylinder", "Hypoxemic brain damage during midnight power loadshedding")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Health module ready.")
