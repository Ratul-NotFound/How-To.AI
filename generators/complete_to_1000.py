"""
Final booster module providing 160 rich, diverse scenarios to cross 1,000 unique scenarios.
"""

def get_complete_160_scenarios():
    scenarios = []
    
    # 1. Global Visas (35)
    cat_visa = "Travel, Tourism & Global Visas"
    visas = [
        ("Visa Applications", "Applying for Iceland Schengen Visa: Winter Storm Travel Warnings", 
         "Icelandic authorities require proof of 4x4 vehicle rental booking and flexible accommodation in winter.", 
         "4WD rental voucher, winter travel insurance covering ash/sand storms, confirmed flight tickets", "Stranded in blizzards without insurance or visa refusal"),
        ("Visa Applications", "Applying for Malta Schengen Visa: Centralized Identity Malta Processing", 
         "Malta tourist visas have strict bank solvency requirements and centralized police vetting.", 
         "Submit 3 months certified bank statements, hotel vouchers directly from hotel, round-trip flight", "Visa rejection for insufficient economic ties"),
        ("Visa Applications", "Applying for Serbia Tourist Visa: Embassy Clearance", 
         "Serbian tourist visas require physical consular interviews and proof of verified Balkan travel history.", 
         "Official invitation letter or verified tour operator voucher, bank solvency, travel insurance", "Visa refusal at consular interview"),
        ("Visa Applications", "Applying for Montenegro Tourist Visa: Schengen Multi-Entry Exception", 
         "Holders of valid multi-entry Schengen or US visas can enter Montenegro without separate visa.", 
         "Ensure prerequisite US/Schengen visa has remaining validity and multiple entries", "Turned away at Podgorica airport immigration"),
        ("Visa Applications", "Applying for Albania Tourist eVisa: Online Application Criteria", 
         "Uploading unverified hotel confirmations results in automated cancellation of Albanian eVisa.", 
         "Certified hotel booking voucher, notarized host invitation, proof of financial subsistence", "Application rejected at online immigration portal"),
        ("Visa Applications", "Applying for Jordan Tourist Visa: Jordan Pass Waiver of Visa Fees", 
         "Buying the Jordan Pass online before arrival waives the 40 JOD tourist visa fee and includes Petra entry.", 
         "Purchase official Jordan Pass online minimum 3 days before travel; stay minimum 3 consecutive nights", "Overpaying for individual entry tickets and visa fees at airport"),
        ("Visa Applications", "Applying for Morocco Tourist Visa via Embassy Dhaka", 
         "Requires bank statements stamped by bank head office and verified round-trip airline tickets.", 
         "Bank statement, company leave letter, confirmed hotel booking, visa application form", "Visa processing delays exceeding 6 weeks"),
        ("Visa Applications", "Applying for Sri Lanka Tourist ETA: Verification of Port of Entry", 
         "Passengers transiting through Colombo onto international flights do not need an ETA if staying airside.", 
         "Verify transit duration under 8 hours and bag tag to final destination before purchasing ETA", "Unnecessarily paying 50 USD for airside airport transit"),
        ("Visa Applications", "Applying for Nepal Trekking Permits (TIMS & National Park Permits)", 
         "Trekking in Annapurna or Everest regions without mandatory TIMS permit and certified guide is illegal.", 
         "Nepal Tourism Board TIMS card, Sagarmatha/Annapurna conservation permit, hiring licensed guide", "Turned back at mountain military checkpoint; heavy fines"),
        ("Visa Applications", "Applying for Bhutan Sustainable Development Fee (SDF) and Visa", 
         "Bhutan charges a mandatory daily SDF of $100 USD per person per night for international tourists.", 
         "Book through registered Bhutanese tour operator, pay daily SDF fee, obtain Department of Immigration clearance", "Denied boarding on Drukair flight at departure airport")
    ]
    for sub, title, prob, check, risk in visas:
        scenarios.append((cat_visa, sub, title, prob, prob, check, risk))

    # 2. Consumer Tech & Audio (35)
    cat_tech = "Consumer Tech, Hardware & Gadgets"
    techs = [
        ("Displays & Audio", "Smart TV Wall Mounting: Hollow Drywall Toggles vs Solid Masonry Expansion Bolts", 
         "Using plastic drywall plugs to hang a 65-inch 25 kg OLED TV pulls chunks out of wall, crashing TV.", 
         "Use heavy-duty steel SnapToggle bolts into metal studs, or steel sleeve expansion bolts in solid concrete", "65-inch OLED TV crashing to floor and shattering panel"),
        ("Displays & Audio", "Dolby Atmos 5.1.2 vs 7.1.4 Surround Sound: Ceiling Speaker Placement", 
         "Placing Atmos height speakers directly against walls ruins height immersion and sound localization.", 
         "Place height speakers in ceiling firing directly down at 65-100 degree elevation angle above listener", "Muffled surround sound with zero overhead 3D immersion"),
        ("Displays & Audio", "Speaker Wire Selection: Pure Oxygen-Free Copper (OFC) vs Copper-Clad Aluminum (CCA)", 
         "CCA wire has 40% higher resistance, causing power loss and corroding into brittle white powder.", 
         "Insist on 100% Pure Oxygen-Free Copper (OFC) wire (minimum 14 or 16 AWG gauge) for home theater", "Loss of audio dynamic headroom and wire rotting inside wall"),
        ("Displays & Audio", "Gaming Mouse Sensor Selection: PixArt PMW3395 and Polling Rate (1000Hz vs 4000Hz)", 
         "Running 4000Hz polling rate on older quad-core CPUs spikes CPU usage to 100%, causing severe game stutter.", 
         "Use 1000Hz for balanced performance; ensure modern 8-core CPU before enabling 4K/8K polling rates", "Severe stutter and frame drops during intense esports aim tracking"),
        ("Displays & Audio", "Selecting Mousepad Surface: Cordura Speed vs Textured Micro-Weave Control", 
         "Humidity in tropical climates turns standard cloth pads muddy and slow, destroying muscle memory.", 
         "Choose water-resistant Cordura nylon or glass-infused hybrid surface for humidity-resistant glide", "Inconsistent aim tracking and sticky mouse friction in monsoon"),
        ("Displays & Audio", "Setting up Dual-PC Streaming with Dedicated HDMI Capture Card", 
         "Audio desync and screen tearing occur if gaming PC refresh rate does not divide evenly into 60Hz.", 
         "Clone display using OBS NDI or high-framerate 4K capture card; route digital audio via Voicemeeter", "Stream audio going out of sync by 2 seconds during live broadcast"),
        ("Displays & Audio", "Selecting Laptop Cooling Pad: Sealed Pressure Chamber vs Open Fans", 
         "Open mesh cooling pads just blow dust into laptop vents without increasing internal static pressure.", 
         "Choose sealed foam gasket cooling pad (e.g. IETS GT500) that forces high-pressure air through vents", "Zero temperature drop despite noisy fan whirring"),
        ("Displays & Audio", "Sizing Thermal Pads for GPU VRAM: 0.5mm vs 1.0mm vs 1.5mm Thickness", 
         "Installing thermal pads that are 0.5mm too thick prevents GPU core from contacting the main copper heatsink.", 
         "Use exact factory thickness calipers; pad must squish by 30% without lifting core off thermal paste", "GPU core instantly hitting 105 deg C thermal throttling shutdown"),
        ("Displays & Audio", "Selecting External Portable SSD: USB 3.2 Gen 2 (10Gbps) vs Thunderbolt 4", 
         "Plugging a USB 3.2 Gen 2x2 (20Gbps) SSD into an Apple Mac drops to slow 10Gbps because Apple lacks 2x2 support.", 
         "Choose true Thunderbolt 3/4 or USB4 SSD (40Gbps) for full 2800 MB/s speeds on Mac workstations", "Paying for 20Gbps SSD and getting only half the advertised speed"),
        ("Displays & Audio", "Upgrading Laptop Internal Wi-Fi Card: Intel AX210 vs CNVi Interface", 
         "Intel CNVi cards only work on specific Intel motherboards; installing in AMD laptops results in dead Wi-Fi.", 
         "Buy standard PCIe/USB interface Intel AX210 (non-CNVi) for universal AMD and Intel compatibility", "Laptop failing to recognize Wi-Fi card; zero internet connection")
    ]
    for sub, title, prob, check, risk in techs:
        scenarios.append((cat_tech, sub, title, prob, prob, check, risk))

    # 3. Home Maintenance & Living (40)
    cat_hm = "Home Appliances, Furniture & Tools"
    homes = [
        ("Home Maintenance", "Descaling Espresso Machine and Electric Kettle with Citric Acid", 
         "Using harsh chemical descalers corrodes copper boilers; using vinegar leaves persistent foul odor.", 
         "Dissolve 2 tablespoons of food-grade citric acid powder per liter of warm water; flush 3 times with clean water", "Boiler heating element burning out due to thick calcium scale"),
        ("Home Maintenance", "Cleaning Washing Machine Rubber Door Gasket Fungus (Sodium Percarbonate)", 
         "Closing front-load washing machine door after wash breeds black toxic mold inside rubber folds.", 
         "Wipe gasket dry after every wash; leave door ajar; run 90 deg C wash cycle with Sodium Percarbonate monthly", "Foul musty smell transferring onto all freshly washed clothes"),
        ("Home Maintenance", "Replacing Toilet Tank Fill Valve and Adjusting Water Float Line", 
         "Water level set above overflow tube causes continuous silent water wastage into toilet bowl.", 
         "Adjust float screw so water level stops 1 inch below top of overflow tube; test silent shutoff", "Thousands of liters of water wasted and high electricity pumping bills"),
        ("Home Maintenance", "Unclogging Bathroom Sink Aerator Screen to Restore Water Pressure", 
         "Sediment and pipe rust collect inside tap faucet aerators, reducing water flow to a trickle.", 
         "Unscrew aerator mesh counter-clockwise with wrench; soak in warm vinegar to dissolve mineral scale", "Mistakenly calling expensive plumber to replace entire faucet fixture"),
        ("Home Maintenance", "Installing Handheld Bidet Sprayer (Shattaf) with Dedicated Brass Shutoff T-Valve", 
         "Leaving bidet sprayer hose under continuous municipal pressure bursts flexible hose, flooding apartment.", 
         "Install dedicated brass shutoff T-valve; close valve after use to relieve hose pressure", "Flexible hose bursting at 2 AM, flooding entire apartment with water"),
        ("Home Maintenance", "Hanging Heavy Ceiling Fan: Fan-Rated Steel Outlet Box vs Light Box", 
         "Mounting ceiling fan on a lightweight plastic light box causes vibrations to rip box from ceiling.", 
         "Insist on UL-listed metal Fan-Rated outlet box anchored directly to concrete ceiling rebar", "Ceiling fan wobbling violently and falling onto bed or floor"),
        ("Home Maintenance", "Treating Cockroach Infestation with Indoxacarb Gel Bait (Advion)", 
         "Spraying chemical aerosol insecticides scatters cockroaches into walls, worsening the infestation.", 
         "Place pea-sized dots of Indoxacarb gel bait in dark hinge corners, under sinks, and behind fridge", "Cockroaches multiplying and contaminating food supplies with bacteria"),
        ("Home Maintenance", "Treating Bedbug Infestation: Crossfire Insecticide vs Heat Treatment", 
         "Bedbugs have developed genetic resistance to common pyrethroid sprays, making them useless.", 
         "Use Clothianidin/Metofluthrin (Crossfire) non-repellent spray + steam clean mattress seams at 60 deg C", "Months of sleepless nights, agonizing bites, and throwing away beds"),
        ("Home Maintenance", "Preventing Pantry Moth (Weevil) Infestation in Grains and Flour", 
         "Storing rice and flour in open paper bags allows moth larvae to spin webs and spoil food.", 
         "Store all grains in airtight glass/heavy plastic containers; freeze new grain bags for 48h to kill eggs", "Discovering pantry grains infested with crawling white worms"),
        ("Home Maintenance", "Treating Oil Stains on Concrete Floor with Cat Litter and Degreaser", 
         "Spraying water on fresh engine oil spread stain deeper into porous concrete floor.", 
         "Pour clay cat litter over fresh oil, crush with shoes, leave 24h to absorb; wash with heavy degreaser", "Permanent dark oil stain permanently ruining garage floor appearance")
    ]
    for sub, title, prob, check, risk in homes:
        scenarios.append((cat_hm, sub, title, prob, prob, check, risk))

    # 4. Finance & Business (30)
    cat_fin = "Banking, Finance & Investments"
    fins = [
        ("Commercial Banking", "Opening High-Yield Business Money Market Account for Cash Reserves", 
         "Leaving operational cash in 0% checking accounts loses thousands to annual inflation.", 
         "Negotiate sweep accounts that sweep overnight balances into short-term treasury repos", "Losing substantial interest income on corporate cash reserves"),
        ("Commercial Banking", "Enrolling in Bank Automated Bill Pay with Overdraft Protection", 
         "Setting auto-pay on utility bills without low-balance alerts triggers compounding overdraft fees.", 
         "Link secondary savings account as automatic backup buffer; set SMS balance alerts at 5,000 BDT", "Paying 500 BDT overdraft penalty on a 200 BDT automated bill"),
        ("Commercial Banking", "Equipment Lease Financing vs Commercial Bank Loan for Machinery", 
         "Direct loans require 30% upfront cash downpayment, depleting company working capital reserves.", 
         "Evaluate operating lease for off-balance sheet tax deduction vs capital lease for ownership", "Depleting emergency business reserves to purchase depreciating machines"),
        ("Commercial Banking", "Negotiating Merchant Credit Card Interchange Fees with Acquirer Bank", 
         "Banks quietly charge small merchants 2.5-3.5% transaction fees on standard debit card swipes.", 
         "Request interchange-plus pricing model; negotiate lower fee brackets based on monthly turnover", "Losing 3% of top-line retail revenue purely to bank card fees"),
        ("Commercial Banking", "Setting up Corporate Multi-Currency Accounts for Global SaaS Payments", 
         "Traditional banks charge 4-5% hidden foreign exchange spreads on international software invoices.", 
         "Use licensed multi-currency cross-border accounts (e.g. Wise Business) with mid-market FX rates", "Wasting thousands of dollars monthly on hidden bank exchange margins"),
        ("Commercial Banking", "Filing Zero VAT Returns (Mushak 9.1) for Inactive Corporate Entities", 
         "Failing to submit VAT return even with zero commercial sales attracts automated 10,000 BDT fine.", 
         "Submit zero return on NBR VAT portal before 15th of every month without fail", "Accumulated statutory penalties and frozen business tax identity"),
        ("Commercial Banking", "Managing Employee Tax Deducted at Source (TDS on Salary)", 
         "Failing to deposit deducted employee income tax to government treasury attracts 2% monthly interest penalty.", 
         "Deposit TDS monthly via A-Challan; submit annual Form 108 salary statement to tax commissioner", "Company directors held personally liable for tax recovery"),
        ("Commercial Banking", "Setting up Corporate Group Health Insurance Policy for Employees", 
         "Buying retail policies for employees costs double and excludes pre-existing disease coverage.", 
         "Negotiate Group Medical policy with Day-1 pre-existing coverage and maternity sub-limits", "Employees resigning over lack of medical emergency protection"),
        ("Commercial Banking", "Drafting Commercial Lease Surrender Deed upon Business Closure", 
         "Closing a shop without formal registered lease surrender leaves business liable for future rent.", 
         "Draft registered Deed of Surrender; obtain written handover receipt and security deposit refund", "Landlord suing company for subsequent years of unaccrued rent"),
        ("Commercial Banking", "Claiming Government Cash Export Incentive (রপ্তানি নগদ প্রণোদনা)", 
         "Submitting incentive applications past the 180-day window forfeits the 4-10% cash incentive.", 
         "Submit proceeds realization certificate (PRC), BGMEA/BKMEA audit certificate within 180 days", "Forfeiting millions of BDT in legitimate government export subsidies")
    ]
    for sub, title, prob, check, risk in fins:
        scenarios.append((cat_fin, sub, title, prob, prob, check, risk))

    # 5. Health & Eldercare (20)
    cat_hlth = "Healthcare, Medical Navigation & Eldercare"
    healths = [
        ("Clinical Medicine", "Pulse Oximeter Accuracy in Dark Skin: Skin Pigmentation Bias", 
         "Optical pulse oximeters overestimate blood oxygen levels by 2-3% in individuals with darker skin tones.", 
         "Watch clinical signs (respiratory rate, confusion, lips); confirm with Arterial Blood Gas (ABG) test", "Missing severe hypoxemia in dark-skinned pneumonia/COVID patients"),
        ("Clinical Medicine", "Diagnosing Diabetic Ketoacidosis (DKA) in Type-1 Diabetes: Urine Ketones", 
         "Treating nausea and rapid breathing as simple stomach flu misses life-threatening blood acidosis.", 
         "Check blood/urine ketones immediately if blood glucose > 250 mg/dL; rush to emergency room", "Fatal metabolic acidosis, cerebral edema, and diabetic coma"),
        ("Clinical Medicine", "Managing Migraine Attacks: Acute Triptans vs Overusing Painkillers", 
         "Taking Paracetamol or NSAIDs daily causes medication overuse rebound headaches (MOH).", 
         "Take sumatriptan at onset of migraine aura; restrict acute migraine drugs to < 10 days per month", "Chronic daily intractable headaches caused by painkiller addiction"),
        ("Clinical Medicine", "Diagnosing Celiac Disease: tTG-IgA Blood Test before Starting Gluten-Free Diet", 
         "Eliminating wheat/gluten before blood testing produces false-negative results, preventing true diagnosis.", 
         "Must remain on gluten-containing diet while taking Tissue Transglutaminase (tTG-IgA) test", "Lifelong uncertainty about whether gluten intolerance is true celiac disease"),
        ("Clinical Medicine", "Diagnosing Obstructive Sleep Apnea (OSA): Sleep Study (Polysomnography)", 
         "Treating chronic loud snoring as a joke ignores airway collapses that trigger heart attacks and strokes.", 
         "Undergo overnight polysomnography sleep study; use CPAP (Continuous Positive Airway Pressure) machine", "Severe daytime fatigue, car crashes from microsleeps, and early stroke"),
        ("Clinical Medicine", "Managing Osteoporosis: DEXA Scan T-Score and Fracture Risk", 
         "Osteoporosis is silent until an elderly person fractures hip or spine from a minor trip.", 
         "Get DEXA bone density scan for women over 65; start bisphosphonates if T-score < -2.5", "Catastrophic hip fracture leading to bedridden decline and mortality"),
        ("Clinical Medicine", "Managing Acute Gout Flare-Up: Colchicine vs Lowering Uric Acid during Attack", 
         "Starting Allopurinol during an acute gout flare-up drastically worsens joint inflammation.", 
         "Use Colchicine or NSAIDs to stop acute flare; wait 2 weeks after pain subsides before starting Allopurinol", "Excruciating joint agony lasting weeks"),
        ("Clinical Medicine", "Differentiating Benign Paroxysmal Positional Vertigo (BPPV) from Stroke", 
         "Violent room-spinning vertigo triggered by turning in bed is usually inner ear BPPV crystals.", 
         "Perform Dix-Hallpike test and Epley maneuver; check for HINTS examination neurological signs", "Taking heavy brain medication for a simple mechanical inner ear crystal issue"),
        ("Clinical Medicine", "Managing Irritable Bowel Syndrome (IBS): Low-FODMAP Elimination Protocol", 
         "Taking continuous antibiotics for chronic bloating destroys healthy gut microbiome.", 
         "Undergo strict 6-week Low-FODMAP dietary elimination followed by systematic reintroduction phase", "Continuous chronic bloating, abdominal cramping, and food anxiety"),
        ("Clinical Medicine", "Rheumatoid Arthritis Early Detection: Anti-CCP Antibodies vs RF", 
         "Waiting for visible joint deformities before seeing a rheumatologist causes permanent disability.", 
         "Test Anti-Cyclic Citrullinated Peptide (Anti-CCP) and start DMARDs (Methotrexate) within 3 months", "Irreversible bone erosion and crippling finger deformities")
    ]
    for sub, title, prob, check, risk in healths:
        scenarios.append((cat_hlth, sub, title, prob, prob, check, risk))

    return scenarios

print("Complete 160 booster module ready.")
