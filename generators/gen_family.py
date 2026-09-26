"""Parenting, Education, Schooling & Family Affairs (40 scenarios)"""

def populate_family(add):
    cat = "Parenting, Education & Family"
    
    items = [
        # School Admissions & Transition
        ("School Education", "Navigating Government / Private School Admission Lottery System", 
         "Submitting multiple applications with slight spelling variations leads to automatic lottery disqualification.", 
         "17-digit online birth certificate verification on gsa.teletalk.com.bd, parents' NID match", "Child disqualified from participating in school lottery"),
        ("School Education", "Transferring child from English Medium (Cambridge/Edexcel) to National Curriculum", 
         "Requires Equivalence Certificate from Board of Intermediate and Secondary Education (BISE).", 
         "Equivalence committee application, original statement of entry, grade conversion transcript", "Child unable to register for SSC/HSC public examinations"),
        ("School Education", "Correcting child's name or parents' name on School Registration Card", 
         "Discrepancies on Junior School Certificate (JSC) or SSC registration carry over permanently into adult NID.", 
         "Apply for correction through school headmaster before board exam form fill-up deadline", "Lifelong bureaucratic nightmare correcting all future certificates"),
        ("School Education", "Resolving severe school bullying and administrative inaction", 
         "School authorities often dismiss systemic bullying as harmless childhood banter.", 
         "Document written incident log, medical trauma reports, formal complaint to School Managing Committee & Upazila Education Officer", "Severe psychological trauma or self-harm in child"),

        # Parenting & Child Health
        ("Parenting & Safety", "Replacing a lost child EPI (Expanded Program on Immunization) vaccination card", 
         "Without EPI card proof, many schools and foreign visa medicals flag child as unvaccinated.", 
         "Visit original Upazila Health Complex / Ward Clinic immunization register to extract historical batch numbers", "Child subjected to duplicate painful booster vaccinations"),
        ("Parenting & Safety", "Setting up Home Network Parental Controls and SafeSearch", 
         "Children stumble across explicit adult content and gambling ads on unfiltered home Wi-Fi.", 
         "Configure CleanBrowsing / NextDNS family filters on home router; lock DNS settings", "Exposure to predatory online content and grooming"),
        ("Parenting & Safety", "Hiring and conducting background checks on Home Private Tutors", 
         "Inviting unvetted strangers into home creates severe child safety and physical abuse risks.", 
         "Verify university student ID, collect photocopy of Smart NID, interview family, CCTV in study area", "Child abuse or household burglary"),
        ("Parenting & Safety", "Opening a Student / Minor Savings Bank Account", 
         "Minor accounts operate under parental guardianship with strict withdrawal and debit card limits.", 
         "Minor's 17-digit birth certificate, student ID card, guardian's NID and e-TIN", "High bank fees or inability to manage student savings")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Family module ready.")
