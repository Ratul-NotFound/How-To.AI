"""Legal System, Police, Courts & Citizen Rights (85 scenarios)"""

def populate_legal(add):
    cat = "Legal Rights, Police & Courts"
    
    items = [
        # Police & Emergency Law Enforcement
        ("Police & Citizen Rights", "Your legal rights when stopped and searched by police at night", 
         "Police officers in plainclothes cannot search citizens without showing official identification badge.", 
         "Ask for official police ID, demand uniform presence, remain polite, never run or argue aggressively", "Arbitrary detention or fabricated charges"),
        ("Police & Citizen Rights", "Filing an Online GD (General Diary) for lost documents / threats", 
         "Filing an online GD provides instant digital tracking number recognized by all authorities.", 
         "Online GD app / portal, NID verification, exact time/place of occurrence, serial numbers of lost items", "Going to Thana in person and facing harassment by duty officer"),
        ("Police & Citizen Rights", "Difference between General Diary (GD) and First Information Report (FIR)", 
         "A GD is an informational record, whereas an FIR triggers mandatory police criminal investigation and arrest powers.", 
         "Cognizable offense (FIR required) vs non-cognizable (GD recorded); get signed carbon copy of FIR", "Police refusing to register FIR for cognizable crimes like robbery"),
        ("Police & Citizen Rights", "What to do if named falsely in a police criminal case / FIR", 
         "Hiding or running away leads to arrest warrant and attachment of movable property (ক্রোক আদেশ).", 
         "Obtain certified copy of FIR, engage High Court / Sessions lawyer immediately for Anticipatory Bail", "Arrest and spending months in jail awaiting trial"),
        ("Police & Citizen Rights", "Securing Anticipatory Bail (আগাম জামিন) from High Court Division", 
         "Anticipatory bail protects an innocent citizen from arrest before formal police charge-sheet is filed.", 
         "File application under Section 498 CrPC in High Court Division, surrender physically before court bench", "Sudden nighttime arrest by law enforcement"),

        # Financial & Business Legal Defense
        ("Litigation & Courts", "Defending against a Cheque Bounce Case (Section 138 Negotiable Instruments Act)", 
         "The complainant must serve a 30-day statutory legal notice within 30 days of dishonor.", 
         "Check whether legal notice was received within statutory window, prove security cheque defense", "Imprisonment up to 1 year and penalty equal to double the cheque amount"),
        ("Litigation & Courts", "Filing a Complaint with Directorate of National Consumer Rights Protection (DNCRP)", 
         "Consumers who successfully report fraud or overcharging receive 25% of the penalty fine as cash reward.", 
         "Submit complaint on dncrp.portal.gov.bd within 30 days of purchase, attach purchase invoice and photos", "Shops continuing to scam customers with impunity"),
        ("Litigation & Courts", "Responding to a formal Legal Notice sent by an advocate", 
         "Ignoring a legal notice allows the opponent to claim in court that you admitted all allegations.", 
         "Consult a qualified lawyer, draft formal point-by-point reply within the stipulated deadline (usually 15 days)", "Weakening legal position in subsequent lawsuit"),
        ("Litigation & Courts", "Filing a Money Suit for recovery of unpaid business debts", 
         "Money suits have strict 3-year limitation period from date of payment default under Limitation Act.", 
         "Work orders, delivery challans, invoices, bank statements, demand notice, court fees calculation", "Claim becoming time-barred, forfeiting entire debt permanently"),
        ("Litigation & Courts", "Defending against Section 107 / 117 CrPC peace breach proceedings", 
         "Rivals file false Section 107 cases before Executive Magistrate to intimidate and harass.", 
         "Appear before Executive Magistrate with counsel, submit written statement, furnish interim surety bond", "Arrest warrant issued by Executive Magistrate"),

        # Family & Personal Legal Matters
        ("Family Law", "Filing for Dower (Dain-Meher) and Maintenance in Family Court", 
         "A divorced or separated wife can legally claim full prompt dower and child maintenance.", 
         "File suit under Family Courts Act 2023, registered Kabin-nama, proof of husband's income", "Wife left destitute without financial maintenance for herself and child"),
        ("Family Law", "Securing Child Custody (Hizanat) in Family Court", 
         "Under welfare of minor principle, court prioritizes child's best interests over parental claims.", 
         "Mother has custody rights up to 7 years (boy) or puberty (girl); apply for interim visiting rights", "Forced separation from child by in-laws"),
        ("Family Law", "Obtaining Protection Order under Domestic Violence Act", 
         "Magistrate can pass emergency protection orders prohibiting abuser from entering shared residence.", 
         "File application before Judicial Magistrate under Domestic Violence (Prevention and Protection) Act", "Continued physical abuse and violent assault"),
        ("Family Law", "Drafting a Mutual Separation & Divorce Settlement Agreement", 
         "Unwritten divorce settlements lead to subsequent criminal cases for dowry or maintenance fraud.", 
         "Clear terms on dower settlement, child custody schedule, registered deed of compromise", "Fresh lawsuits filed years after separation"),
        ("Family Law", "Accessing Government Legal Aid (National Legal Aid Services Organization - NLASO)", 
         "Indigent citizens earning below poverty threshold qualify for 100% free legal representation.", 
         "Apply to District Legal Aid Committee at District Judge Court, submit income certificate", "Inability to fight court cases due to high lawyer fees")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Legal module ready.")
