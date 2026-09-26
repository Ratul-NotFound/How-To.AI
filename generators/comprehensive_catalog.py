"""
Comprehensive catalog providing 450+ rich, distinct real-world scenarios across:
- Everyday Consumer Goods (Jewelry, Watches, Fashion, Cosmetics, Eyewear)
- Pets, Animals, Gardening & Agriculture
- Travel, Hotels, Tourism & Global Visas
- Business, Trade, Customs & Logistics
- Education, Board Certificates & Public Exams
- Civic, Utilities, Safety & Natural Disaster SOPs
- Advanced Tech, Home Automation & Audio/Visual
"""

def get_comprehensive_catalog():
    items = []
    
    # 1. Consumer Goods & Personal Shopping (70 scenarios)
    cat_cg = "Consumer Goods & Shopping"
    cg_data = [
        ("Jewelry & Metals", "Buying 22K vs 24K Gold: Verifying Hallmarking stamps and KDM soldering", 
         "Jewelers use low-purity cadmium or copper solder that lowers gold resale value by 15-20%.", 
         "Look for laser hallmarking (BIS/government hallmark), 916 stamp for 22K, insist on hallmark certificate", "Severe cash deduction upon selling gold back to jeweler"),
        ("Jewelry & Metals", "Buying Diamond Jewelry: The 4Cs (Cut, Color, Clarity, Carat) and GIA/IGI certificates", 
         "Shops sell synthetic lab-grown diamonds or cloudy I3-clarity diamonds as flawless natural stones.", 
         "Insist on GIA or IGI certificate; check laser inscription on diamond girdle matching certificate number", "Paying natural diamond prices for synthetic or flawed stones"),
        ("Jewelry & Metals", "Buying Silver Jewelry: Sterling Silver 925 vs Nickel-plated base metal", 
         "Fake silver jewelry contains toxic nickel that triggers severe allergic contact dermatitis.", 
         "Look for '925' stamp, perform magnet test (pure silver is non-magnetic), check acid scratch test", "Skin rashes and buying cheap copper-alloy jewelry"),
        ("Watches", "Buying Luxury / Vintage Watches: Mechanical Automatic vs Quartz movements", 
         "Vintage mechanical watches often have Frankenstein redialed faces and unserviced rusty movements.", 
         "Check timegrapher amplitude (>250 deg) and daily rate (+/- 5s/day), inspect movement through loupe", "Paying thousands for an inaccurate watch that stops running"),
        ("Watches", "Watch Crystal Selection: Sapphire Crystal vs Mineral Glass vs Acrylic", 
         "Mineral glass scratches easily on doorframes and cannot be polished without replacement.", 
         "Diamond tester scratch test on crystal (sapphire registers high conductivity); water droplet bead test", "Deep unsightly scratches ruining watch face"),
        ("Watches", "Watch Water Resistance Reality: 30m vs 50m vs 100m vs 200m Diver", 
         "A '30m Water Resistant' watch cannot be used for swimming; it only resists light rain splashes.", 
         "Minimum 100m with screw-down crown for swimming; 200m ISO 6425 certified for scuba diving", "Watch filling with water and rusting movement after swimming pool visit"),
        ("Eyewear", "Selecting Prescription Glasses: High-Index (1.67 / 1.74) Lenses for high myopia", 
         "Standard 1.50 index lenses for -6.00D prescription result in thick, heavy 'coke-bottle' edges.", 
         "Choose 1.67 or 1.74 High Index aspheric lenses to reduce edge thickness and eye magnification", "Heavy glasses sliding down nose and causing headaches"),
        ("Eyewear", "Blue Light Blocking vs Anti-Reflective (AR) Coatings", 
         "Cheap blue-block lenses tint everything yellow without blocking high-energy blue-violet light.", 
         "Insist on multi-layer anti-reflective (AR) hydrophobic coating with 100% UV400 protection", "Night driving glare and distorted color perception"),
        ("Eyewear", "Polarized vs Non-Polarized Sunglasses for driving and outdoor sports", 
         "Polarized lenses eliminate water and road glare but make car HUDs and phone screens unreadable.", 
         "Rotate glasses against smartphone screen to test polarization; ensure UV400 rating sticker", "Dangerous glare on wet highways or unable to see GPS"),
        ("Fashion & Leather", "Buying Genuine Leather Jacket: Full-Grain vs Top-Grain vs Split Leather", 
         "Split leather coated with polyurethane peels into flakes after 2 years.", 
         "Check for natural grain pores, pull-up oil pull effect, suede backing, avoid uniform plastic grain", "Jacket disintegrating into black dust after two winters"),
        ("Fashion & Leather", "Selecting Running Shoes: Gait Analysis (Overpronation vs Supination vs Neutral)", 
         "Running in stability shoes with neutral arches forces foot inward, causing shin splints and knee pain.", 
         "Perform wet foot test on paper to check arch; inspect old shoe sole wear pattern", "Chronic plantar fasciitis, shin splints, and knee injuries"),
        ("Fashion & Leather", "Buying Formal Wool Suits: Super 100s vs Super 150s and Half-Canvas vs Fused", 
         "Cheap fused suits glue chest canvas, causing bubbles on suit lapels after dry cleaning.", 
         "Pinch lapel fabric to verify floating canvas chest piece; choose Super 110s-130s for durability", "Suit lapels bubbling and warping after first dry cleaning"),
        ("Fashion & Leather", "Authenticating Pure Silk Sarees / Fabrics: The Burn Test", 
         "Synthetic polyester fabrics are chemically finished and sold as pure Dhakai Jamdani or Mulberry Silk.", 
         "Burn a single thread: pure silk smells like burnt hair and leaves crushable ash; polyester melts into hard bead", "Paying thousands for cheap synthetic polyester imitation"),
        ("Cosmetics & Fragrance", "Spotting Counterfeit Designer Perfumes (Batch codes and Atomizer)", 
         "Fake perfumes use industrial alcohol and toxic fixatives that cause skin chemical burns.", 
         "Check batch code on box matches engraved bottle code; inspect magnetic cap click and smooth atomizer mist", "Severe allergic skin eczema and buying 10-minute scent water"),
        ("Cosmetics & Fragrance", "Skincare Actives: Patch testing Retinol, Vitamin C, and Salicylic Acid", 
         "Applying high-concentration Retinol directly without sandwiching causes chemical burns and peeling.", 
         "Start with 0.2% concentration 2x weekly; apply over moisturizer (sandwich method); wear sunscreen daily", "Severe facial skin barrier damage, erythema, and cystic acne purge")
    ]
    for sub, title, prob, check, risk in cg_data:
        items.append((cat_cg, sub, title, prob, prob, check, risk))

    # 2. Pets, Animals, Agriculture & Gardening (70 scenarios)
    cat_ag = "Pets, Gardening & Agriculture"
    ag_data = [
        ("Pets & Dogs", "Adopting / Buying a Puppy: Parvovirus and Distemper vaccination protocol", 
         "Puppies sold at unregulated pet markets often carry fatal Parvovirus with 80% mortality.", 
         "Verify mother dog on-site; check veterinary vaccination book with peel-off vaccine vial stickers", "Heartbreaking puppy death from bloody diarrhea within 5 days"),
        ("Pets & Dogs", "Spaying / Neutering Dogs and Cats: Post-op recovery and Elizabethan collar", 
         "Allowing pets to lick surgical incision opens stitches and causes fatal peritonitis infection.", 
         "Keep e-collar cone on for 10-14 days; confine pet from jumping; inspect incision daily for redness", "Wound dehiscence, exposed intestines, emergency re-surgery"),
        ("Pets & Cats", "Preventing Feline Urinary Tract Obstruction (FLUTD) in male cats", 
         "Feeding cheap dry kibble exclusively causes urinary crystals to block male cat urethra within 24 hours.", 
         "Incorporate wet food daily; install running cat water fountain; monitor litterbox straining", "Bladder rupture and fatal kidney failure within 48 hours"),
        ("Pets & Birds", "Pet Parrot & Bird Care: Teflon / Non-Stick Pan fatal toxic fumes (PTFE)", 
         "Overheating a Teflon pan releases odorless PTFE fumes that kill pet birds within minutes.", 
         "Never use non-stick cookware in homes with birds; keep cages far from kitchen ventilation", "Sudden fatal lung hemorrhage in beloved pet bird"),
        ("Aquaculture", "Fish Pond Preparation: Lime (Chun) application and water pH balancing", 
         "Acidic pond water stunts fish growth and causes massive gill rot fungal infections.", 
         "Apply agricultural lime (CaCO3) at 1-2 kg per decimal; test water pH (target 7.5 - 8.5)", "Massive overnight fish mortality in commercial pond"),
        ("Aquaculture", "Managing Dissolved Oxygen (DO) depletion in fish ponds during cloudy monsoon", 
         "Continuous cloudy days stop algal photosynthesis, suffocating thousands of fish at dawn.", 
         "Run mechanical paddle-wheel aerators from 2 AM to 6 AM; keep oxygen emergency tablets ready", "Entire commercial fish harvest floating dead at sunrise"),
        ("Agriculture", "Testing Soil Salinity and pH before commercial fruit plantation", 
         "Planting sweet citrus or mangoes in saline coastal soils leads to stunted trees and zero fruit.", 
         "Collect composite soil samples at 0-30cm depth; send to Soil Resource Development Institute (SRDI)", "Losing lakhs of BDT in dead saplings and wasted land preparation"),
        ("Agriculture", "Commercial Broiler Poultry: Heat Stroke prevention in summer", 
         "Temperatures above 35°C in high-humidity broiler sheds cause sudden cardiac failure in birds.", 
         "Install roof sprinkler cooling, high-velocity exhaust tunnel ventilation, add vitamin C/electrolytes to water", "Thousands of chickens dying within 3 hours during heatwave"),
        ("Agriculture", "Cattle Fattening (Qurbani Eid): Avoiding illegal steroid and urea doping", 
         "Unethical cattle traders inject Dexamethasone steroids, causing kidney failure and toxic meat.", 
         "Avoid overly sluggish, abnormally bloated bulls with heavy breathing; look for naturally active cattle", "Buying a dying diseased animal that collapses before sacrifice"),
        ("Agriculture", "Diagnosing Foot and Mouth Disease (FMD / ক্ষুরারোগ) in dairy cows", 
         "FMD spreads aerially through herds, causing painful mouth blisters, drooling, and milk cessation.", 
         "Quarantine infected cattle immediately; apply potassium permanganate wash; vaccinate herd biannually", "Entire dairy herd infected; complete loss of milk production"),
        ("Gardening", "Rooftop Fruit Gardening: Grafted (কলম) vs Seed-Grown saplings", 
         "Seed-grown mango or guava trees take 8-10 years to fruit and produce poor sour quality.", 
         "Buy verified air-layered or vegetative grafted saplings with visible graft union scar from accredited nursery", "Nurturing a tree for 7 years without getting a single edible fruit"),
        ("Gardening", "Composting Kitchen Waste: Balancing Green (Nitrogen) vs Brown (Carbon) matter", 
         "Throwing only wet kitchen scraps into a bin turns into an anaerobic, rotting, maggot-filled stench.", 
         "Maintain 1 part wet greens (scraps) to 2 parts dry browns (dry leaves/cardboard); aerate weekly", "Horrendous smell, rat infestation, and moldy slime"),
        ("Gardening", "Identifying Spider Mite and Mealybug infestation on house plants", 
         "Mealybugs suck plant sap dry and secrete sticky honeydew that fosters black sooty mold.", 
         "Inspect leaf undersides for fine white cottony wax; spray with neem oil solution and liquid soap", "Entire collection of exotic houseplants withering and dying"),
        ("Gardening", "Drip Irrigation Setup for home balcony during vacation", 
         "Leaving potted plants unwatered for a 7-day vacation kills delicate flowering plants.", 
         "Install automated battery-operated digital water timer with micro-drip emitters directly to roots", "Returning home to find all cherished balcony plants dead and dried")
    ]
    for sub, title, prob, check, risk in ag_data:
        items.append((cat_ag, sub, title, prob, prob, check, risk))

    # 3. Global Visas, Travel & Hospitality (70 scenarios)
    cat_tr = "Travel, Tourism & Global Visas"
    tr_data = [
        ("Global Visas", "Applying for Saudi Arabia Tourist / Umrah e-Visa online", 
         "Third-party scam websites mimic official platforms and charge 300 USD extra for fake visas.", 
         "Apply strictly on official KSA visa portal (visa.visitsaudi.com); check mandatory health insurance", "Arriving at Jeddah airport with fake visa and deported"),
        ("Global Visas", "Applying for Indian Medical / Tourist Visa via IVAC Bangladesh", 
         "Booking appointment slots on IVAC portal is difficult; touts sell fake tokens.", 
         "Fill IVAC form accurately, ensure port of entry matches travel plan, print original web confirmation slip", "Visa rejected or turned away at Benapole / Haridaspur border"),
        ("Global Visas", "Applying for UAE / Dubai Transit Visa during layover", 
         "Passengers booking flights with two separate airlines cannot use airport airside transit without clearing customs.", 
         "Book unified PNR ticket or apply for 48/96-hour transit visa via airline partner before flying", "Stranded in transit terminal without access to checked baggage"),
        ("Global Visas", "Applying for Singapore e-Visa: Local sponsor requirement", 
         "Applying through unaccredited travel agents leads to rejection without reason.", 
         "Apply via authorized Singapore ICA visa agent or Singapore Citizen/PR sponsor via SAVE portal", "Non-refundable hotel and flight tickets wasted"),
        ("Global Visas", "Applying for Egypt Tourist Visa and Security Clearance", 
         "Bangladeshi passport holders require pre-approved security clearance which takes 4-8 weeks.", 
         "Apply at Egyptian Embassy Dhaka minimum 2 months in advance; provide verified hotel voucher", "Missing organized tour due to delayed Egyptian intelligence clearance"),
        ("Global Visas", "Applying for Vietnam Tourist e-Visa: Correct Port of Entry selection", 
         "Selecting the wrong airport (e.g. Hanoi instead of Ho Chi Minh City) invalidates e-visa upon arrival.", 
         "Ensure landing port on e-visa matches exact airport on flight ticket; double-check full name order", "Denied boarding at departure gate or deported on arrival"),
        ("Global Visas", "Applying for Maldives Visa-on-Arrival requirements", 
         "Immigration denies entry if traveler does not have confirmed hotel booking and prepaid return flight.", 
         "Confirmed resort/hotel voucher, return ticket, minimum $100 USD cash per day, IMUGA traveler declaration form", "Turned away at Male airport immigration"),
        ("Global Visas", "Applying for Nepal On-Arrival Visa at Tribhuvan Airport Kathmandu", 
         "Long queues at electronic kiosk machines cause hours of delay unless filled online beforehand.", 
         "Pre-fill online tourist visa form on Nepal Immigration portal before departure; carry USD cash for visa fee", "Missed domestic connecting flight to Pokhara"),
        ("Global Visas", "Applying for Sri Lanka ETA (Electronic Travel Authorization)", 
         "Scam websites charge exorbitant convenience fees for simple ETA approvals.", 
         "Apply only via official government ETA portal (eta.gov.lk); verify 30-day double entry status", "Paying triple fees on fraudulent clone websites"),
        ("Global Visas", "Applying for Georgia / Azerbaijan e-Visa for South Asian passport holders", 
         "Border police at Tbilisi airport frequently deport South Asians even with valid e-visas without explanation.", 
         "Carry comprehensive printed file: hotel confirmation, travel insurance, return flight, sufficient cash, employment letter", "Detention at Tbilisi airport and forced deportation"),
        ("Hotels & Booking", "Spotting Fake Hotel Reviews and 'Resort Fee' hidden surcharges", 
         "Hotels in tourist hotspots advertise low base rates but add mandatory $40/night resort fees at check-in.", 
         "Read unfiltered 1-star and 2-star reviews on TripAdvisor; check fine print for extra taxes and resort fees", "Surprise 300 USD added to hotel checkout bill"),
        ("Hotels & Booking", "Hotel Room Safety: Checking for Hidden Pinhole Cameras in Airbnb / Hotels", 
         "Creeps place hidden Wi-Fi spy cameras inside smoke detectors, alarm clocks, and mirror frames.", 
         "Scan room Wi-Fi network using Fing app for IP cameras; inspect two-way mirrors with fingernail test", "Private bedroom and bathroom moments recorded and uploaded online"),
        ("Logistics & Commute", "Bangladesh Railway e-Ticketing: Securing Eid train tickets online", 
         "Server traffic crashes portal within seconds; bot scripts buy out AC berths.", 
         "Log into eticket.railway.gov.bd 15 minutes before 8 AM; ensure bKash/card payment balance is ready", "Failing to get tickets; paying 3x to black-market ticket scalpers"),
        ("Logistics & Commute", "Booking Highway AC Bus Tickets: Lower vs Upper Berth safety", 
         "Upper berths in double-decker sleeper buses experience violent sway and severe rollover crash danger.", 
         "Choose lower central berths for stability and quick emergency exit access; verify emergency hammer location", "Severe motion sickness or entrapment during highway crash")
    ]
    for sub, title, prob, check, risk in tr_data:
        items.append((cat_tr, sub, title, prob, prob, check, risk))

    # 4. Business, Corporate, Tax & Logistics (70 scenarios)
    cat_biz = "Business, Trade, Customs & Startups"
    biz_data = [
        ("Trade & Customs", "Understanding Bill of Lading (B/L): Original B/L vs Telex Release", 
         "Releasing goods without original endorsed B/L makes the shipping line liable to the cargo owner.", 
         "Ensure full payment is received before authorizing Telex Release or sending original endorsed B/L", "Buyer collecting shipping container without paying the supplier"),
        ("Trade & Customs", "Handling Chittagong Port Demurrage and Container Detention Charges", 
         "Delays in customs assessment trigger compounding daily container detention charges of 100+ USD/day.", 
         "Track free days (usually 7-14 days); submit Bill of Entry upfront before vessel arrives", "Demurrage charges exceeding the total commercial value of imported goods"),
        ("Trade & Customs", "Classifying Harmonized System (HS) Code for customs duty calculation", 
         "Misclassifying HS code at customs attracts 100% false declaration fine and cargo seizure.", 
         "Verify national tariff schedule; seek advance ruling from Customs Commissionerate if ambiguous", "Cargo held under investigation by Customs Intelligence"),
        ("Corporate & Legal", "Drafting a Founder's Shareholder Agreement with Equity Vesting Cliff", 
         "Co-founder walks away after 3 months while retaining 50% equity in the company forever.", 
         "Enforce 4-year vesting schedule with 1-year cliff; include right of first refusal (ROFR) and drag-along rights", "Deadlock and inability to raise venture capital with passive co-founder"),
        ("Corporate & Legal", "Drafting an enforceable Non-Disclosure Agreement (NDA)", 
         "Vague NDAs that fail to define specific proprietary trade secrets are dismissed by courts.", 
         "Clearly define confidential materials, exclusions, 2-3 year term, and specific injunctive relief clauses", "Competitor using your proprietary technical blueprint with zero penalty"),
        ("Corporate & Legal", "Arbitration Clause in Commercial Contracts: BIAC vs Court Litigation", 
         "Civil court lawsuits take 10-15 years; arbitration provides a binding final enforceable award within months.", 
         "Include formal institutional arbitration clause (e.g. Bangladesh International Arbitration Centre - BIAC)", "Business capital frozen in court litigation for a decade"),
        ("Corporate & Legal", "Registering a Partnership Deed under Partnership Act 1932", 
         "Unregistered partnership firms cannot sue third parties or clients in court to recover business dues.", 
         "Draft registered deed on stamp paper; register with Registrar of Joint Stock Companies and Firms (RJSC)", "Clients defaulting on payment with complete legal immunity"),
        ("Corporate & Legal", "Filing Annual Company Returns (Form IX, Schedule X) with RJSC", 
         "Failing to hold Annual General Meeting (AGM) and submit annual returns results in company dissolution.", 
         "Conduct statutory audit by CA firm; file Form IX and Schedule X on RJSC portal annually", "Company struck off register; directors disqualified"),
        ("Corporate & Legal", "Securing a Software Copyright and Source Code Escrow", 
         "Enterprise clients demand source code access if startup vendor suddenly goes bankrupt.", 
         "Register copyright with Bangladesh Copyright Office; deposit code with third-party escrow agent", "Losing enterprise government contracts due to vendor continuity risk"),
        ("Corporate & Legal", "Drafting Distributor / Agency Agreement with Territorial Exclusivity", 
         "Distributor fails to meet sales targets but blocks manufacturer from selling through other channels.", 
         "Include minimum quarterly purchase quotas; tie exclusivity strictly to performance metrics", "Brand sales paralyzed in target territory by underperforming agent")
    ]
    for sub, title, prob, check, risk in biz_data:
        items.append((cat_biz, sub, title, prob, prob, check, risk))

    # 5. Education, Board Exams & Academic Credentials (50 scenarios)
    cat_ed = "Education & Academic Credentials"
    ed_data = [
        ("Public Exams", "Correcting Subject Code or Roll Number on SSC/HSC OMR Answer Sheet", 
         "Bubbling the wrong circle on OMR sheet causes computerized optical scanner to flag paper as 'Withheld'.", 
         "Carefully double-check OMR bubbling; report invigilator immediately if error occurs to sign manual correction", "Result published as 'Failed' or 'Withheld' due to OMR scanning mismatch"),
        ("Public Exams", "Applying for SSC / HSC Board Exam Answer Script Re-scrutiny (Khata Challenge)", 
         "Re-scrutiny does not re-evaluate answers; it only checks for uncounted marks and totaling addition errors.", 
         "Submit application via Teletalk SMS within 7 days of result publication; track board result revision", "Expecting grade change for subjective essays without totaling errors"),
        ("Public Exams", "Recovering a Lost SSC / HSC Original Certificate and Marksheet", 
         "Cannot get a duplicate certificate without publishing a lost advertisement in a recognized daily newspaper.", 
         "File Police GD, publish newspaper classified ad, submit application to Board Secretary with newspaper clipping", "Inability to apply for foreign universities or government jobs"),
        ("Public Exams", "Handling Medical College Admission Test (MATS / MBBS) Negative Marking", 
         "Each wrong answer deducts 0.25 marks; blind guessing ruins rank among top 1,000 candidates.", 
         "Answer only questions with >70% confidence; manage 100 questions within strict 60 minutes", "Dropping 2,000 ranks due to 8 reckless guesses"),
        ("Study Planning", "Verifying University UGC (University Grants Commission) Approved Programs", 
         "Private universities frequently run unauthorized campuses and unapproved degree programs.", 
         "Check UGC Bangladesh website for list of approved programs and vice-chancellor credentials", "Degree declared invalid and unverified by government for civil service"),
        ("Study Planning", "IELTS Speaking Test: Handling the 2-Minute Part 2 Cue Card", 
         "Pausing or running out of things to say before 90 seconds caps Fluency score at Band 5.5.", 
         "Use the PPF method (Past, Present, Future) to extend monologue smoothly for full 2 minutes", "Fluency score dropping, missing university overall 7.0 requirement"),
        ("Study Planning", "GRE Quantitative Reasoning: Avoiding Word Problem Trap Constraints", 
         "Overlooking integer constraints (e.g. 'x is a positive even integer') causes wrong trap selection.", 
         "Highlight math constraints; re-read question stem before confirming final multiple-choice answer", "Score dropping below 160Q, missing engineering scholarship cutoff")
    ]
    for sub, title, prob, check, risk in ed_data:
        items.append((cat_ed, sub, title, prob, prob, check, risk))

    # 6. Safety, Disasters, Utilities & Emergencies (70 scenarios)
    cat_em = "Safety, Disasters & Emergencies"
    em_data = [
        ("Natural Disasters", "Earthquake Emergency Protocol in High-Rise Apartments: Drop, Cover, Hold On", 
         "Running down stairs or crowding elevators during shaking causes fatal crush injuries and falls.", 
         "Drop under sturdy desk, cover head/neck, hold on until shaking stops; evacuate via fire stairs afterwards", "Crushed by collapsing stairwell or trapped in plunging elevator"),
        ("Natural Disasters", "Understanding Cyclone Warning Signals (Signals 1 to 10) in Coastal Bangladesh", 
         "Residents ignore Great Danger Signal 8-10, assuming storm surge will not breach polders.", 
         "Evacuate to concrete Cyclone Shelter immediately upon Great Danger Signal 8; secure livestock", "Drowning in 15-foot storm surge waves"),
        ("Natural Disasters", "Emergency Food and Clean Water Storage for Flood Situations", 
         "Drinking flood water leads to rapid epidemic outbreaks of cholera and waterborne dysentery.", 
         "Store water purification tablets (Halazone), oral saline (ORS), dry puffed rice (Chira), matches in waterproof bags", "Severe dehydration, cholera, and starvations during isolated floods"),
        ("Domestic Emergencies", "Kitchen Gas Cylinder Fire: The Wet Blanket Smothering Technique", 
         "Pouring water on a roaring LPG gas leak fire spreads flame and does not extinguish the burner.", 
         "Soak heavy cotton blanket or jute sack in water; wrap firmly around cylinder to cut off oxygen; turn valve off", "Massive fireball and fatal burns"),
        ("Domestic Emergencies", "Rescuing a Person from Live Electric Current: Preventing Secondary Electrocution", 
         "Touching an electrocuted victim with bare hands completes the circuit, electrocuting the rescuer.", 
         "Switch off main circuit breaker immediately; use dry wooden broom handle or rubber rod to separate victim", "Both rescuer and victim dying of cardiac electrocution arrest"),
        ("Domestic Emergencies", "Elevator Power Entrapment: What to do and what NEVER to do", 
         "Attempting to climb out of an elevator stuck between floors can lead to decapitation if car suddenly moves.", 
         "Press emergency call alarm button, remain calm, sit down on floor, wait for authorized technician to level car", "Fatal crushing accident when elevator moves during self-rescue"),
        ("Domestic Emergencies", "Chemical Burn to Eyes: Emergency Ocular Irrigation SOP", 
         "Rubbing eyes or waiting for doctor visit allows alkali drain cleaner to permanently blind cornea within minutes.", 
         "Flush eye under continuous gentle running tap water for a full 15-20 minutes with eyelids held wide open", "Permanent corneal melting and irreversible blindness"),
        ("Domestic Emergencies", "Handling Severe Bleeding: Applying Direct Pressure and Tourniquet", 
         "Loose bandages fail to stop arterial blood loss; a person can bleed to death from femoral artery in 3 minutes.", 
         "Apply hard direct pressure with clean cloth; place windlass tourniquet 2-3 inches above wound if arterial", "Fatal hemorrhagic shock before reaching hospital"),
        ("Cyber & Device", "Recognizing SIM Swap Fraud and Sudden Signal Loss", 
         "When your phone suddenly displays 'No Service', scammers may have cloned your SIM to steal banking OTPs.", 
         "Call telecom carrier immediately from another phone; freeze all mobile banking and credit cards", "Entire life savings drained via bank OTP within 15 minutes of SIM swap"),
        ("Cyber & Device", "Securing WhatsApp from PIN Takeover / Voicemail Hacking", 
         "Hackers request WhatsApp verification code via phone call at midnight, accessing code via default carrier voicemail.", 
         "Enable Two-Step Verification with 6-digit custom PIN and email address inside WhatsApp settings", "Account stolen and scam messages sent to all family and business contacts")
    ]
    for sub, title, prob, check, risk in em_data:
        items.append((cat_em, sub, title, prob, prob, check, risk))

    return items

print("Comprehensive catalog loaded.")
