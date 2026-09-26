"""Career, Employment, Labor Rights & Freelancing (60 scenarios)"""

def populate_career(add):
    cat = "Career, Workplace & Freelancing"
    
    items = [
        # Job Contracts & Onboarding
        ("Employment Contracts", "Reviewing Employment Contract trap clauses (Training Bonds & Penalty fees)", 
         "Companies insert 2-year mandatory service bonds with 5 Lakh BDT penalty clauses.", 
         "Under Bangladesh Labor Act and Contract Act, unreasonable restraint of trade clauses are legally unenforceable", "Feeling trapped in toxic company due to fear of lawsuit"),
        ("Employment Contracts", "Non-Compete Clauses: What is legally enforceable vs scare tactics", 
         "Agreements barring an employee from working in the same industry for 2 years are legally void.", 
         "Section 27 of Contract Act 1872 (agreement in restraint of trade is void); preserve client confidentiality", "Declining higher-paying job offers due to employer intimidation"),
        ("Employment Contracts", "Understanding Probation Period rights and sudden termination", 
         "Employers terminate employees without notice during probation, claiming zero liability.", 
         "Check appointment letter probation clause, Section 26 of Bangladesh Labor Act notice requirements", "Abrupt termination without even 14 days' wages"),

        # Resignation & Labor Court
        ("Resignation & Rights", "Serving official resignation notice and obtaining Experience Certificate", 
         "Vindictive employers withhold release letters, blocking joining at new company.", 
         "Submit resignation via official email and physical registered post with acknowledgment due (AD)", "New employer revoking job offer due to missing release letter"),
        ("Resignation & Rights", "Recovering Unpaid Gratuity and Provident Fund (PF) from employer", 
         "Companies refuse to disburse final settlement (Gratuity/PF) after employee resignation.", 
         "File complaint before Inspector General of Factories (DIFE) or Labor Court within limitation", "Losing years of accumulated retirement savings"),
        ("Resignation & Rights", "Enforcing Maternity Leave rights under Bangladesh Labor Act", 
         "Private companies illegally fire pregnant employees or withhold 16 weeks of paid maternity benefit.", 
         "Submit medical certificate 8 weeks before delivery, written notice under Section 46 of Labor Act", "Losing job and 16 weeks of mandatory paid maternity benefit"),
        ("Resignation & Rights", "Challenging Illegal Retrenchment / Termination without compensation", 
         "Firing permanent employees without paying retrenchment compensation violates labor statutes.", 
         "File industrial dispute or grievance petition before Labor Court within 30 days under Section 33", "Forfeiting 30 days' wages for every completed year of service"),

        # Freelancing & Remote Work
        ("Freelancing & Remote", "Drafting an International Freelance Contract with Milestone Escrow", 
         "Delivering completed software code or design files before escrow funding leads to client ghosting.", 
         "Use platforms with escrow protection or draft formal Statement of Work (SOW) with 50% upfront deposit", "Doing 2 months of complex work with zero payment"),
        ("Freelancing & Remote", "Receiving Foreign Remittance legally without triggering Central Bank freeze", 
         "Inward wire transfers above 10,000 USD without Form C declaration are frozen by commercial banks.", 
         "Submit client contract, invoice, and Form C declaration to bank foreign exchange branch", "Funds frozen in escrow account for weeks"),
        ("Freelancing & Remote", "Appealing an arbitrary Upwork / Fiverr account suspension", 
         "Platform automated AI algorithms ban top-rated freelancers over innocent chat keywords.", 
         "Request human review via official support ticket; provide government ID and transaction proof", "Loss of primary livelihood and thousands in pending balances"),
        ("Freelancing & Remote", "Protecting Intellectual Property and Copyright of digital assets", 
         "Clients using freelance creative work beyond agreed license scope without payment.", 
         "Include copyright transfer condition: 'IP transfers only upon 100% receipt of payment'", "Client selling your software/design to third parties without paying you"),
        ("Freelancing & Remote", "Handling foreign client payment disputes and chargebacks on Stripe/PayPal", 
         "Scammer overseas clients claim 'Unauthorized Transaction' on PayPal after receiving deliverables.", 
         "Maintain detailed timestamped project tracking, client email approvals, Git commit history", "Chargeback loss plus 20 USD dispute penalty fee")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Career module ready.")
