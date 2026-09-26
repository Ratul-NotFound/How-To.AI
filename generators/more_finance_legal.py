"""More Finance and Legal scenarios (145 scenarios)"""

def get_more_finance():
    cat = "Banking, Finance & Investments"
    items = []
    
    # 75 specific finance scenarios
    fin_data = [
        ("Loans", "Home loan balance transfer to another bank with lower interest rate", 
         "Processing fees, valuation fees, and mortgage stamp duties at the new bank often outweigh interest savings.", 
         "Calculate Net Present Value (NPV) of interest difference minus all closing charges; check prepayment penalty", "Losing money on fees despite lower advertised percentage"),
        ("Loans", "Car financing: Flat interest rate vs Reducing balance interest rate calculation", 
         "A flat 7% rate is equivalent to an actual reducing rate of nearly 13%, doubling actual interest paid.", 
         "Demand reducing balance amortization schedule table; calculate true Effective Annual Rate (EAR)", "Paying double the expected interest on auto loan"),
        ("Loans", "Applying for Student Education Loan for overseas studies", 
         "Banks require tangible property collateral worth 1.5x to 2x the loan amount and a co-borrower.", 
         "Unencumbered property deed, non-encumbrance certificate, university admission I-20/CAS letter", "Loan processing delayed past university payment deadline"),
        ("Loans", "Borrowing against Fixed Deposit (OD against FDR) for emergency cash", 
         "Allows borrowing up to 90% of FDR value at 1-2% above deposit rate without breaking the FDR.", 
         "FDR lien marking letter, overdraft account setup, understanding interest-only monthly service", "Breaking long-term FDR prematurely and forfeiting compound interest"),
        ("Loans", "Handling guarantor liability when the primary borrower defaults on loan", 
         "Signing as loan guarantor makes you equally liable under Artha Rin Adalat Ain; banks can seize guarantor assets.", 
         "Never sign as guarantor unless prepared to pay debt; check borrower creditworthiness", "Guarantor bank accounts frozen and property auctioned by court"),
        ("Loans", "Settling a defaulted bank loan through One-Time Settlement (OTS)", 
         "Banks can waive compounding interest and penal charges under central bank circulars if lump sum is paid.", 
         "Submit formal OTS proposal to bank Board of Directors citing financial distress, demand written settlement letter", "Paying cash without board approval and remaining classified as defaulter"),
        ("Loans", "Microfinance NGO loans (e.g. Grameen, BRAC) weekly repayment dynamics", 
         "Weekly installment pressure in rural areas leads to taking second loans from loan sharks (overlapping loans).", 
         "Calculate actual annual APR (often 24%+); ensure income generation matches weekly repayment frequency", "Falling into multi-NGO debt spiral and asset distress sale"),
        ("Loans", "Agriculture credit / Krishi Loan interest subsidy eligibility", 
         "Bangladesh Bank mandates 4% subsidized interest rate for pulse, oilseed, and spice cultivation.", 
         "Krishi Card (কৃষি কার্ড), land holding proof, crop cultivation verification from Upazila Agriculture Officer", "Overpaying standard commercial loan rates for farming"),
        ("Loans", "Export Development Fund (EDF) financing for manufacturing exporters", 
         "Provides foreign currency financing at SOFR+spread for importing raw materials for export.", 
         "Confirmed export master LC, utilization declaration (UD), central bank EDF allocation quota", "Defaulting on foreign currency obligations when export proceeds are delayed"),
        ("Loans", "Gold Loan / Pledging jewelry for immediate business capital", 
         "Pawnshops and non-bank financiers undervalue gold purity and charge exorbitant hidden appraisal fees.", 
         "Get certified karat purity test (KDM 22K), demand written pledge receipt with exact gram weight", "Forfeiting family heirloom gold on minor payment delay"),

        # 15 Card & Digital scenarios
        ("Cards & Digital", "Disputing ATM cash dispensation failure when account is debited", 
         "ATM machine counts money but fails to dispense cash while sending debit SMS to phone.", 
         "Preserve ATM error slip, note exact ATM machine ID, lodge formal dispute within 24 hours with issuer", "Losing funds permanently if ATM electronic journal log expires"),
        ("Cards & Digital", "International Credit Card dynamic currency conversion (DCC) markup trap", 
         "Paying in local BDT at foreign POS terminals incurs double conversion fees (up to 8% markup).", 
         "Always choose to pay in the foreign local currency (USD, EUR, GBP) at POS counter; never BDT", "Paying 5-8% extra on every foreign hotel and shopping bill"),
        ("Cards & Digital", "Credit card reward points expiration and redemption value calculation", 
         "Points expire after 24 months or yield terrible value when redeemed for catalog merchandise.", 
         "Redeem points directly against annual fee waiver or airline miles for highest conversion ratio", "Accumulated 50,000 points expiring into zero value"),
        ("Cards & Digital", "Setting daily transaction limits on mobile banking apps to prevent drain", 
         "Default high daily transfer limits allow phone thieves to empty entire savings.", 
         "Lower daily ATM, POS, and online transaction limits via mobile banking app settings", "Entire bank balance stolen in a single fraudulent transaction"),
        ("Cards & Digital", "Virtual Credit Cards (VCC) for recurring international SaaS subscriptions", 
         "Free trial subscriptions silently convert to annual recurring charges that are hard to cancel.", 
         "Use disposable virtual cards with strict spending limits (e.g. 5 USD) for software trials", "Surprise $300 annual renewal charges on personal credit card"),

        # 25 Investments, Stock Market & Wealth
        ("Investments", "Buying 22K vs 24K Hallmarked Gold jewelry vs Bullion bars", 
         "Jewelers deduct 15-20% making charges and wastage charges upon resale of ornamental gold.", 
         "Buy standardized certified 24K bullion minted bars with Assay certificate for investment", "Losing 25% of invested capital immediately on jewelry resale"),
        ("Investments", "Opening a Foreign Currency (FC) account for export/remittance retention", 
         "Allows holding USD/EUR balances hedge against local currency inflation and devaluation.", 
         "Export proceeds certificate, freelancer tax-exemption certificate, bank FC account opening form", "Mandatory automatic conversion to local currency at unfavorable rates"),
        ("Investments", "Evaluating Real Estate Investment Trusts (REITs) vs physical flat purchase", 
         "Physical flats yield 3-4% rental return with tenant headache; REITs offer liquidity and diversification.", 
         "Compare net dividend yield, underlying commercial tenant lease profile, liquidity on stock exchange", "Locking capital in illiquid flat that takes 2 years to sell"),
        ("Investments", "Understanding Stock Market Circuit Breakers and Floor Price rules", 
         "Regulatory floor prices freeze trading volume, making it impossible to exit falling stocks.", 
         "Monitor daily market depth, avoid illiquid small-cap Z-category junk stocks", "Holding frozen shares for months while company fundamentals collapse"),
        ("Investments", "Spotting insider trading and price manipulation in penny stocks", 
         "Telegram and Facebook cartels pump dead company shares before dumping them on retail public.", 
         "Check audited EPS, P/E ratio, director shareholding patterns, avoid viral social media stock tips", "Buying at the absolute top right before the dump; 80% capital loss"),
        ("Investments", "Dividend Income Taxation: 10% vs 15% withholding tax based on e-TIN", 
         "Failing to submit updated e-TIN to brokerage firm results in maximum 15% source tax deduction.", 
         "Update e-TIN in BO account profile through DP (Depository Participant) before record date", "Overpaying withholding tax on annual stock dividends"),
        ("Investments", "Investing in Shariah-Compliant Sukuk (Islamic Bonds)", 
         "Sukuk represent asset-backed ownership rather than debt, offering regular rental yields.", 
         "Review Shariah supervisory board fatwa, underlying tangible asset verification, credit rating", "Misunderstanding risk profile and capital redemption terms"),
        ("Investments", "Venture Capital & Angel Investing in startups: SAFE notes vs Convertible Debt", 
         "Angel investors without liquidation preference get wiped out in subsequent down-rounds.", 
         "Simple Agreement for Future Equity (SAFE) with valuation cap, pro-rata rights, 1x non-participating liquidation preference", "Total loss of investment when startup raises dilutive round"),
        ("Investments", "Hedging against inflation using sovereign inflation-indexed instruments", 
         "Keeping cash in regular savings accounts guarantees negative real returns after inflation.", 
         "Allocate across inflation-beating assets: high-yield sovereign savings, land, diversified equities", "Real purchasing power halving over 7 years in cash savings"),
        ("Investments", "Setting up an Emergency Rainy-Day Fund: Sizing and Liquidity", 
         "Storing emergency funds in 5-year FDR leaves you helpless during medical crises.", 
         "Keep 6 months of essential living expenses in high-yield liquid money-market savings or call accounts", "Forced distress sale of assets or borrowing from loan sharks"),

        # 25 Business & Commercial Banking
        ("Business Finance", "Letter of Credit (LC): Sight LC vs Usance / Deferred LC risks", 
         "In Usance LC, the buyer receives goods but must pay after 90/180 days; currency fluctuations can destroy margins.", 
         "Hedge exchange rate exposure with forward contract; verify issuing bank international credit rating", "Incurring massive foreign exchange loss on currency depreciation"),
        ("Business Finance", "Understanding Discrepant LC Documents and Bank Rejection", 
         "A tiny typographic discrepancy between commercial invoice and bill of lading halts payment.", 
         "Follow UCP 600 rules strictly; match commodity description word-for-word against LC terms", "Goods stranded at destination port; buyer demanding price discounts"),
        ("Business Finance", "Bank Guarantee (BG): Performance Bond vs Advance Payment Guarantee", 
         "An unconditional bank guarantee can be encashed by the client on simple demand without proving default.", 
         "Ensure conditional trigger terms; negotiate expiry date clause and return of original BG instrument", "Client encashing millions in bank guarantee during contractual disputes"),
        ("Business Finance", "Factoring and Invoice Discounting for corporate suppliers", 
         "Waiting 90-120 days for multinational corporate clients to pay invoices cripples business cash flow.", 
         "Partner with licensed factoring company; submit verified purchase orders for 80% immediate liquidity", "Insolvency and inability to pay supplier wages while awaiting receivables"),
        ("Business Finance", "Setting up Cash Credit (Hypothecation - CC Hypo) working capital loan", 
         "Banks conduct unannounced physical audits of warehouse stock pledged under hypothecation.", 
         "Maintain daily stock register (Drawing Power calculation), keep stock insured against fire/flood", "Bank freezing CC limit and filing loan recovery lawsuit for stock discrepancies")
    ]
    
    for item in fin_data:
        items.append((cat, item[0], item[1], item[2], item[2], item[3], item[4]))
    return items

def get_more_legal():
    cat = "Legal Rights, Police & Courts"
    items = []
    
    legal_data = [
        # Criminal & Police
        ("Criminal Procedure", "Arrest without warrant under Section 54 of CrPC (Blast Guidelines)", 
         "Police cannot arbitrarily arrest citizens without identifying themselves and notifying family within 12 hours.", 
         "Demand to see police officer rank/badge, insist on notification of family, record time of detention", "Enforced disappearance or prolonged illegal detention"),
        ("Criminal Procedure", "Filing a Naraji (নারাজি দরখাস্ত) Petition against police final report", 
         "When corrupt investigating officer submits final report exonerating genuine criminals.", 
         "File protest petition before Magistrate within 15 days; demand further investigation by PBI / CID", "Criminal case dismissed permanently due to flawed police report"),
        ("Criminal Procedure", "Appearing in Court for 164 Confession statement voluntariness", 
         "Police torture suspects into signing fake confessions; Magistrate must give 3 hours reflection time without police presence.", 
         "Tell Magistrate about police torture; show physical marks; refuse to make involuntary statements", "Conviction based entirely on fabricated confession"),
        ("Criminal Procedure", "Handling Police Remand (রিমান্ড) hearing before Magistrate", 
         "Defense lawyer must argue that interrogation can be completed at jail gate without physical remand.", 
         "Medical fitness examination before and after remand; lawyer opposing remand petition", "Severe custodial torture in police custody"),
        ("Criminal Procedure", "Applying for Bail in Non-Bailable Offenses (Section 497 CrPC)", 
         "Bail is judicial discretion; sickness, infirmity, womanhood, or minor age provide strong statutory grounds.", 
         "Medical records from Civil Surgeon, proof of permanent residence, no flight risk affidavit", "Prolonged incarceration for years as an undertrial prisoner"),
        ("Criminal Procedure", "Quashing frivolous criminal proceedings under Section 561A CrPC", 
         "High Court Division has inherent power to quash malicious, fake criminal cases to prevent abuse of court process.", 
         "Certified copy of FIR and charge-sheet; prove civil dispute was maliciously converted to criminal case", "Enduring years of exhausting criminal trial for a civil business dispute"),
        ("Criminal Procedure", "Filing an Extortion (চাঁদাবাজি - Section 385 Penal Code) complaint", 
         "Local political cadres demanding monthly protection money from new construction sites or businesses.", 
         "Record audio/call logs of extortion demands, CCTV footage, file formal complaint before Chief Judicial Magistrate", "Physical assault or forced closure of business"),

        # Civil Suits & Writs
        ("Civil Litigation", "Filing a Title Suit (স্বত্ব ঘোষণা মোকদ্দমা) for declaration of land ownership", 
         "When rival creates fake deeds claiming ownership of your ancestral or purchased land.", 
         "File suit under Section 42 of Specific Relief Act within 6 years of title cloud; complete chain of deeds", "Losing legal title permanently by adverse possession or court decree"),
        ("Civil Litigation", "Obtaining Temporary Injunction (অস্থায়ী নিষেধাজ্ঞা - Order 39 CPC)", 
         "Stops opponents from constructing buildings, cutting trees, or selling disputed land during trial.", 
         "Prove: 1. Prima facie case, 2. Irreparable injury, 3. Balance of convenience; file urgent petition", "Opponent building multi-story structure on your land during lawsuit"),
        ("Civil Litigation", "Filing Writ of Mandamus in High Court against government inaction", 
         "Compelling a government body (e.g. RAJUK, Land Ministry, Police) to perform mandatory statutory duties.", 
         "Serve demand for justice notice; file writ petition under Article 102 of Constitution", "Government officials ignoring lawful citizen applications indefinitely"),
        ("Civil Litigation", "Filing Writ of Habeas Corpus for unlawfully detained family member", 
         "Compels law enforcement agencies to produce an illegally detained citizen before High Court within 24 hours.", 
         "Emergency writ petition before High Court Vacation/Regular Bench; sworn affidavit by relative", "Detainee remaining in secret unlawful custody"),
        ("Civil Litigation", "Filing Partition Suit (বন্টন মোকদ্দমা) to divide joint property", 
         "When co-heirs refuse to amicably divide ancestral property, court appoints Advocate Commissioner to partition.", 
         "Certified copies of all Khatians, family tree Waris certificate, preliminary decree, commissioner report", "Being deprived of fair share of roadside high-value land"),
        ("Civil Litigation", "Executing a Court Decree (জারি মোকদ্দমা - Execution Case)", 
         "Winning a lawsuit is meaningless until you file an execution suit to enforce the decree.", 
         "File Execution Case under Order 21 CPC within limitation period; seek police aid for delivery of possession", "Opponent ignoring court verdict and retaining possession"),
        ("Civil Litigation", "Challenging ex-parte decree (একতরফা ডিক্রি রদ - Order 9 Rule 13 CPC)", 
         "When opponent fraudulently shows fake summons delivery and wins case without your knowledge.", 
         "File application within 30 days of knowledge; prove process server never delivered court summons", "Losing property without ever knowing a lawsuit existed"),
        ("Civil Litigation", "Filing Cyber Tribunal case for digital defamation and morphed images", 
         "Offenses involving morphing photos or spreading defamatory sexual lies on social media.", 
         "Certified URL links, screenshot archives, forensic device report; file complaint before Cyber Tribunal", "Perpetrators operating anonymously without legal consequence")
    ]
    
    for item in legal_data:
        items.append((cat, item[0], item[1], item[2], item[2], item[3], item[4]))
    return items

print("More finance and legal loaded.")
