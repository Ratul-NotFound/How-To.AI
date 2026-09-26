"""More Health, Career, and Family scenarios (140 scenarios)"""

def get_more_health():
    cat = "Healthcare, Medical Navigation & Eldercare"
    items = []
    
    health_data = [
        # Infectious & Common Diseases
        ("Disease Management", "Dengue Fever monitoring: NS1 antigen vs Platelet count & Packed Cell Volume (PCV)", 
         "Focusing only on platelet drop misses severe plasma leakage indicated by rising hematocrit (PCV).", 
         "Monitor CBC every 12-24 hours; maintain oral rehydration; watch for warning signs (abdominal pain, persistent vomiting)", "Dengue Shock Syndrome (DSS) and fatal internal collapse"),
        ("Disease Management", "Typhoid diagnosis: Why Widal Test is obsolete vs Blood Culture", 
         "The Widal test produces false positives in endemic areas, leading to unnecessary heavy antibiotic abuse.", 
         "Insist on Blood Culture & Sensitivity test during first week of fever before starting antibiotics", "Multi-drug resistant Salmonella infection and intestinal perforation"),
        ("Disease Management", "Tuberculosis (TB) diagnosis: GeneXpert MTB/RIF test and free government DOTS therapy", 
         "Standard sputum smears miss early TB; GeneXpert detects bacilli and rifampicin drug resistance within 2 hours.", 
         "GeneXpert sputum test, chest X-ray, register at Upazila DOTS center for 100% free treatment", "Developing incurable Extensively Drug-Resistant TB (XDR-TB)"),
        ("Disease Management", "Hepatitis B & C screening and vaccination schedule (0, 1, 6 months)", 
         "Hepatitis B is asymptomatic for decades until it presents as irreversible liver cirrhosis or cancer.", 
         "HBsAg and Anti-HCV screening; complete 3-dose recombinant vaccine series, verify Anti-HBs titer (>10 mIU/mL)", "Liver failure and hepatocellular carcinoma"),
        ("Disease Management", "Rabies post-exposure prophylaxis after dog or cat bite (WHO Category III)", 
         "Washing wound with water and applying turmeric/lime does not prevent fatal 100% mortal rabies.", 
         "Wash with running water and soap for 15 minutes; get Rabies Immunoglobulin (RIG) + vaccine on Day 0, 3, 7, 28", "100% fatal rabies encephalitis"),

        # Chronic Illness & Surgery
        ("Chronic Care", "Managing Type-2 Diabetes: HbA1c test vs Fingerprick Glucometer calibration", 
         "Relying on fasting glucose alone misses post-meal spikes that cause diabetic retinopathy and kidney failure.", 
         "Check HbA1c every 3 months (target < 7%), annual dilated eye exam, urine microalbumin test", "Diabetic blindness, kidney dialysis, and lower limb amputation"),
        ("Chronic Care", "Managing Chronic Kidney Disease (CKD): eGFR and arteriovenous (AV) fistula preparation", 
         "Delaying AV fistula surgery until emergency dialysis leads to temporary central venous catheter infections.", 
         "Create surgical AV fistula in forearm months before reaching stage 5 CKD; monitor phosphorus and potassium", "Sepsis from infected temporary neck dialysis catheter"),
        ("Chronic Care", "Handling acute Asthma / COPD attack at home: Nebulizer vs Spacer inhaler", 
         "Using an MDI inhaler without a spacer chamber results in 80% of medicine depositing on tongue instead of lungs.", 
         "Use large-volume spacer with MDI inhaler, administer 4-8 puffs of Salbutamol, monitor SpO2 pulse oximeter", "Severe acute respiratory failure and asphyxiation"),
        ("Chronic Care", "Cancer Biopsy Slide review and Immunohistochemistry (IHC) testing", 
         "Starting chemotherapy without IHC testing (HER2, ER/PR for breast cancer) leads to wrong protocol.", 
         "Collect formal paraffin tissue blocks from hospital; send for secondary pathology IHC panel", "Taking toxic ineffective chemotherapy while tumor metastasizes"),
        ("Chronic Care", "Palliative Pain Management in Terminal Illness: Morphine & Fentanyl patches", 
         "Doctors often under-prescribe narcotics due to irrational fear of addiction in terminal patients.", 
         "Consult certified palliative medicine specialist; obtain narcotic drug license prescription", "Patient enduring months of agonizing intractable cancer pain")
    ]
    
    for item in health_data:
        items.append((cat, item[0], item[1], item[2], item[2], item[3], item[4]))
    return items

def get_more_career():
    cat = "Career, Workplace & Freelancing"
    items = []
    
    career_data = [
        # Career & Workplace Navigation
        ("Workplace Strategy", "Negotiating Job Salary and Stock Options (ESOPs) in tech startups", 
         "Candidates accept unvested 'equity shares' without knowing total outstanding share pool or strike price.", 
         "Demand formal Grant Letter stating: number of options, strike price, 4-year vesting schedule with 1-year cliff", "Options becoming worthless paper during dilutive funding rounds"),
        ("Workplace Strategy", "Handling Workplace Bullying and Constructive Dismissal", 
         "Managers intentionally assign impossible deadlines or isolate employees to force resignation without severance.", 
         "Preserve contemporaneous email logs, document discriminatory comments, file formal HR grievance via company policy", "Resigning in distress without unemployment or severance benefits"),
        ("Workplace Strategy", "Surviving a Corporate PIP (Performance Improvement Plan)", 
         "A PIP is rarely designed to help you improve; it is usually HR legal documentation to justify termination.", 
         "Acknowledge receipt with written factual counters; immediately begin interviewing externally", "Being blindsided by sudden termination with no financial cushion"),
        ("Workplace Strategy", "Transitioning from Individual Contributor (IC) to Engineering/Product Manager", 
         "Failing to delegate code and micromanaging tasks alienates team and leads to burnout.", 
         "Focus on 1-on-1 coaching, unblocking team blockers, strategic roadmap alignment, communication", "Burnout and team members quitting due to micromanagement"),
        ("Workplace Strategy", "Asking for Promotion with a Business Impact Portfolio (Brag Sheet)", 
         "Assuming hard work speaks for itself; managers forget achievements not tied to business revenue.", 
         "Maintain quarterly brag document linking completed projects directly to revenue, cost savings, or efficiency", "Passed over for promotion by louder, less competent peers"),

        # Freelancing & Remote Operations
        ("Freelance & Remote", "Preventing Scope Creep in client contracts with Change Orders", 
         "Clients endlessly demand 'small tweaks' that double project duration without additional payment.", 
         "Draft clear Statement of Work (SOW); define included revisions (e.g. 2 rounds); charge hourly for additions", "Working 100 extra unpaid hours on a fixed-price project"),
        ("Freelance & Remote", "Setting up Remote Work Home Ergonomics to prevent Cervical Spondylosis", 
         "Working from laptop on couch causes severe cervical spine disc herniation and numbness in hands.", 
         "External monitor at eye height, ergonomic mesh chair with adjustable lumbar support, 90-degree elbows", "Chronic debilitating neck pain and pinched nerve disability"),
        ("Freelance & Remote", "Managing International Tax Compliance for Multi-Country Remote Contracts", 
         "Failing to declare foreign source income properly risks double taxation and central bank inquiries.", 
         "Submit Form W-8BEN to US clients to claim tax treaty benefits; keep bank remittance PRC certificates", "30% US withholding tax deducted automatically from earnings"),
        ("Freelance & Remote", "Building a Personal Brand on LinkedIn to attract Inbound High-Ticket Clients", 
         "Relying solely on freelance bidding platforms traps professionals in a race-to-the-bottom price war.", 
         "Publish in-depth technical case studies, break down industry solutions, network with founders directly", "Competing against $5/hr bot bidders indefinitely")
    ]
    
    for item in career_data:
        items.append((cat, item[0], item[1], item[2], item[2], item[3], item[4]))
    return items

def get_more_family():
    cat = "Parenting, Education & Family"
    items = []
    
    family_data = [
        # Parenting, Child Dev & Schooling
        ("Child Development", "Identifying Early Signs of Autism Spectrum Disorder (ASD) & Speech Delay", 
         "Parents wait until age 5 hoping child will 'naturally talk', missing the critical early intervention window.", 
         "Watch for lack of eye contact, no pointing by 14 months, no response to name; consult child neurologist", "Permanent developmental delay without early occupational/speech therapy"),
        ("Child Development", "Managing Screen Time Addiction and Digital Myopia in young children", 
         "Unrestricted smartphone use before age 6 alters dopamine receptors and causes severe childhood nearsightedness.", 
         "Enforce 20-20-20 rule, zero screens before bedtime, minimum 2 hours daily outdoor natural sunlight", "Rapidly deteriorating eyesight (-4D glasses) and behavioral tantrums"),
        ("Child Development", "Teaching Financial Literacy to Kids: The 3-Jar Money Method", 
         "Children grow up without understanding saving vs spending, accumulating severe credit debt as adults.", 
         "Give small weekly allowance divided into 3 clear jars: 1. Spending, 2. Saving, 3. Giving", "Financial illiteracy and impulse spending in adult life"),
        ("Education Planning", "Selecting Higher Secondary Stream: Science vs Commerce vs Arts", 
         "Forcing children into Science stream against their aptitude leads to severe exam failure and depression.", 
         "Assess genuine analytical vs creative strengths; review university admission prerequisites", "Student dropping out of college due to academic burnout"),
        ("Education Planning", "Preparing for University Admission Tests (Engineering / Medical / General)", 
         "Focusing only on coaching center memorization without conceptual textbook problem-solving.", 
         "Solve past 10 years board and admission question banks; focus on time management and negative marking", "Failing to secure seat in public university despite high GPA")
    ]
    
    for item in family_data:
        items.append((cat, item[0], item[1], item[2], item[2], item[3], item[4]))
    return items

print("More health, career and family loaded.")
