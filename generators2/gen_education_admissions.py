"""
Education, College Admissions, University Choices & Academic Transitions (160 scenarios)
"""

def get_education_admissions_scenarios():
    cat = "Education, College Admissions & Academics"
    items = []
    
    # 1. College Selection & XI Class Admission (40)
    colleges = [
        ("College Admission", "XI Class Online Admission: College Choice Prioritization Strategy", 
         "Ranking dream colleges first without realistic GPA safety backups leaves students with zero seat allocation.", 
         "Analyze previous year GPA cutoffs; place 2 ambitious, 5 realistic, and 3 safe colleges on xiclassadmission.gov.bd", "Failing to get college allocation in 1st phase, forced to enter chaotic 2nd phase"),
        ("College Admission", "Notre Dame / Holy Cross College Admission: Written Test & Viva Strategy", 
         "Relying solely on SSC GPA-5 fails; NDC/HCC conduct rigorous written screening in Physics, Chem, Math, English.", 
         "Practice advanced analytical problem solving beyond textbook memorization; prepare concise English viva answers", "Rejection from top autonomous Christian missionary colleges"),
        ("College Admission", "HSC Group Selection: Science with Higher Math vs Biology as 4th Subject", 
         "Choosing Biology as mandatory and dropping Higher Math blocks admission eligibility to all engineering universities.", 
         "Keep Higher Math as compulsory if engineering/CSE is a possibility; keep Biology for medical eligibility", "Permanently disqualified from BUET, DU A-Unit, and all engineering universities"),
        ("College Admission", "XI Class Auto-Migration: Accepting vs Halting Automatic College Transfer", 
         "Students accept allocation unaware that auto-migration will automatically shift them to higher-listed colleges.", 
         "If satisfied with allocated college, manually turn OFF Auto-Migration in portal before deadline", "Unwanted automatic transfer to a distant college with higher commute friction"),
        ("College Admission", "College Transfer Certificate (TC) & Board Migration between Cities", 
         "Applying for TC mid-session requires matching subject combinations and mutual consent of both college principals.", 
         "Submit e-TC application on education board portal with parent's job transfer letter or family relocation proof", "Application rejected; stuck in college 200 km away from family"),
        ("College Admission", "Cadet College Class 7 Admission: Written, Physical & Viva Preparation", 
         "Over-focusing on academics while failing basic physical endurance test (running, pushups) causes disqualification.", 
         "Balanced daily routine: academic syllabus mastery, 1-mile stamina running, medical fitness dental check", "Disqualification at final medical board after acing written exam"),
        ("College Admission", "Residential College / Model School Hostel Selection for HSC Students", 
         "Unsupervised private coaching messes in cities lead to peer distraction, gaming addiction, and academic collapse.", 
         "Inspect hostel warden supervision, study hours enforcement, dining hall food hygiene, senior ragging records", "Student failing HSC board exam due to toxic unmonitored hostel environment"),
        ("College Admission", "Choosing English Version (National Curriculum in English) vs Bangla Medium", 
         "Many colleges lack qualified teachers who can explain advanced HSC Physics/Chemistry in English.", 
         "Verify whether college has permanent dedicated English Version faculty or forces joint bilingual lectures", "Struggling with poorly translated textbooks and unprepared teachers"),
        ("College Admission", "Choosing Commerce Group Subjects: Finance vs Marketing vs Secretarial Science", 
         "Taking easy optional subjects leaves students unprepared for university BBA admission math questions.", 
         "Choose Accounting + Finance & Banking for strong analytical base required in IBA and university business units", "Scoring GPA-5 in HSC but failing university BBA admission tests"),
        ("College Admission", "HSC Practical Exam Record Book (Khata) & External Examiner Viva Preparation", 
         "Ignoring practical record books until exam week leads to scrambled copying and low internal lab marks.", 
         "Complete signed lab experiments weekly; prepare for external examiner viva questions on apparatus calibration", "Losing critical 5-10 marks in practicals, dropping from Golden A+ to A")
    ]
    for sub, title, prob, check, risk in colleges:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 2. Public University Admissions & Clusters (50)
    unis = [
        ("University Admission", "BUET Preliminary Screening MCQ vs Final Written Exam Preparation", 
         "Practicing only short shortcut tricks for MCQ fails to develop rigorous multi-step written derivation skills.", 
         "Master fundamental concept derivations from textbook; practice time management for 400-mark written exam", "Clearing prelims but failing written exam due to incomplete step working"),
        ("University Admission", "Medical College Admission Test (MBBS / BDS): Negative Marking & Rank Strategy", 
         "Blindly attempting all 100 questions incurs -0.25 deductions that drop candidates thousands of merit ranks.", 
         "Target 75-80 high-confidence answers; master NCERT/Haziari/Abul Hasan textbook lines thoroughly", "Dropping from top government medical college to non-eligibility over 6 wrong guesses"),
        ("University Admission", "Medical Admission Second-Timer Rule: 5-Mark Penalty Strategy", 
         "Second-time medical applicants have 5 marks deducted from their total aggregate score (8 marks for BDS).", 
         "Second-timers must achieve raw exam score 5 marks higher than first-timers to secure identical government seat", "Missing government medical college seat by 0.5 marks due to deduction"),
        ("University Admission", "Dhaka University (DU) A-Unit: Balancing Math vs Biology Optionals", 
         "Answering Biology instead of Math disqualifies candidate from Computer Science, EEE, and Mathematics.", 
         "Answer the subject you studied as 4th subject or compulsory based on target faculty requirements", "Scoring top 500 rank but disqualified from chosen CSE/Engineering department"),
        ("University Admission", "DU Written Section Preparation: Essay Writing and Structured Math", 
         "Candidates spend 100% time on MCQ and leave written answer sheets blank during 45-minute written slot.", 
         "Practice 40-word concise explanations, chemical reaction balancing, and step-by-step calculus proofs", "Failing minimum sectional written pass cutoff (e.g. 12/40) despite high MCQ score"),
        ("University Admission", "Engineering Cluster (CKRUET - CUET, KUET, RUET) Combined Admission Strategy", 
         "CKRUET questions test rigorous numerical calculation speed without programmable graphical calculators.", 
         "Practice with non-programmable standard scientific calculator (FX-991EX); memorize standard constant values", "Running out of time on heavy calculations during 500-mark exam"),
        ("University Admission", "GST (General, Science & Technology) 24 University Cluster: Subject Choice & Migration", 
         "Students choose distant obscure universities without knowing they can remain in central auto-migration.", 
         "Rank preferred subjects at top universities first; enable subject migration while paying admission confirmation fee", "Stuck in a subject you dislike at a regional campus with no migration"),
        ("University Admission", "Jahangirnagar University (JU) Unit-D (Biological Sciences) Strategy", 
         "JU Unit-D has extensive negative marking and deep conceptual questions from zoology and botany genetics.", 
         "Master human physiology, genetics, plant taxonomy; solve past 10 years JU question bank patterns", "Failing to secure seat in Pharmacy, Genetic Engineering, or Microbiology"),
        ("University Admission", "IBA Dhaka University BBA Admission Test: Critical Reasoning and Math", 
         "IBA entrance tests SAT-level analytical reasoning and advanced vocabulary, completely different from HSC syllabus.", 
         "Practice GRE/GMAT style sentence correction, reading comprehension, geometry, and timed essay writing", "Eliminated in the first section due to stringent sectional pass cutoffs"),
        ("University Admission", "Chittagong University (CU) Admission: Negative Marking on General Knowledge", 
         "CU questions include specialized regional and historical questions with harsh negative marking.", 
         "Avoid guessing on controversial historical GK questions; focus on high-accuracy English and Bangla grammar", "Score dropping below merit list threshold due to speculative guessing")
    ]
    for sub, title, prob, check, risk in unis:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 3. Private Universities & Accreditation (35)
    privates = [
        ("Private University", "Evaluating Private University Quality: Permanent Campus and UGC Status", 
         "Some private universities operate in rented commercial shopping plazas without UGC permanent certification.", 
         "Verify university status on UGC Bangladesh portal; ensure designated permanent campus and full program approval", "Certificates declared unverified or unaccredited by government agencies"),
        ("Private University", "Understanding Tuition Fee Waiver Criteria (Merit-based vs Financial Need)", 
         "Universities advertise '100% waiver' that gets cancelled as soon as semester CGPA drops below 3.50.", 
         "Read waiver retention clause: minimum credit load per semester (usually 12 credits) and minimum CGPA bar", "Losing scholarship and being hit with 80,000 BDT surprise tuition bill"),
        ("Private University", "Accreditation of Engineering Programs: Board of Accreditation for Engineering and Technical Education (BAETE)", 
         "Engineering degrees from non-BAETE accredited programs are not recognized by Institution of Engineers Bangladesh (IEB).", 
         "Check BAETE accredited program register; ensure Washington Accord recognition for international migration", "Inability to register as Professional Engineer (PEng) or get IEB membership"),
        ("Private University", "Private Medical College Admission: DGHS Central Merit List vs Seat Reservation", 
         "Colleges demand illegal under-the-table 'development fees' above government-mandated tuition caps.", 
         "Apply strictly through central DGHS admission portal; verify official fee schedule fixed by Health Ministry", "Paying 10-15 Lakh BDT in illegal donations without receipts"),
        ("Private University", "Credit Transfer from Private University to Foreign Universities (USA/Canada/Australia)", 
         "Foreign universities reject general education and introductory credits from non-accredited private schools.", 
         "Request official course syllabus with detailed credit hours and textbook references for foreign credential evaluation", "Having to repeat 2 full years of courses abroad because credits didn't transfer")
    ]
    for sub, title, prob, check, risk in privates:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 4. Subject Selection & Career Trajectory (35)
    careers = [
        ("Subject Choice", "Choosing Computer Science (CSE) vs Software Engineering (SWE) vs IT", 
         "Students believe SWE is 'easier coding'; both require rigorous data structures, algorithms, and discrete math.", 
         "Compare department syllabus: CSE covers hardware architecture + theory; SWE focuses on lifecycle & design", "Struggling with low grades due to unsuited interest in low-level hardware or theory"),
        ("Subject Choice", "Choosing Electrical & Electronic Engineering (EEE) vs Mechanical Engineering", 
         "EEE requires heavy abstract electromagnetic mathematics, while Mechanical focuses on thermodynamics and CAD.", 
         "Assess aptitude for abstract mathematical physics vs physical mechanics and manufacturing systems", "Dropping out mid-degree due to struggling with signals and systems math"),
        ("Subject Choice", "Choosing Business Administration (BBA) Majors: Finance vs Marketing vs Supply Chain", 
         "Majoring in marketing without data analytics skills limits career mobility to basic sales roles.", 
         "Pair marketing with digital analytics, or choose Supply Chain/Finance for technical corporate roles", "Graduating with generalist degree unable to pass technical corporate screening"),
        ("Subject Choice", "Pursuing LLB (Law) vs Traditional Arts: Bar Council Examination Realities", 
         "Graduating with an LLB does not make you a lawyer; passing the rigorous Bar Council exam takes years.", 
         "Understand Bar Council preliminary, written, and viva passing rates (often <25%); plan for apprenticeship", "Stuck with law degree for 4 years unable to practice in court"),
        ("Subject Choice", "Choosing Pharmacy (B.Pharm) vs Genetic Engineering vs Microbiology", 
         "Industrial pharmaceutical manufacturing in Bangladesh requires a professional B.Pharm degree for QA/production.", 
         "Verify whether program is accredited by Bangladesh Pharmacy Council for professional 'A-Grade' registration", "Unable to work as licensed factory production pharmacist")
    ]
    for sub, title, prob, check, risk in careers:
        items.append((cat, sub, title, prob, prob, check, risk))

    return items

print("Education and admissions module loaded.")
