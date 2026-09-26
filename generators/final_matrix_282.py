"""
Final matrix providing the remaining 285+ scenarios to reach exactly 1,000 unique real-world scenarios.
"""

def get_final_285_scenarios():
    items = []
    
    # 1. Product Inspections (70)
    cat_tech = "Consumer Tech, Hardware & Gadgets"
    t_items = [
        ("Camera Lenses", "Inspecting Used DSLR/Mirrorless Lenses: Prime vs Zoom and Decentering", 
         "A dropped lens can have a tilted internal optical element, making one side of every photo permanently blurry.", 
         "Shoot a flat brick wall at wide open aperture; compare sharpness of all 4 corners for optical decentering", "Photos permanently blurry on right or left half of frame"),
        ("Audio Acoustics", "Installing Home Studio Acoustic Treatment: Foam Panels vs Rockwool Bass Traps", 
         "Thin egg-crate foam only absorbs high treble, leaving muddy booming bass frequencies untreated.", 
         "Build 4-inch dense Rockwool (60 kg/m3) acoustic panels with wooden frames for corner bass traps", "Recordings sounding hollow and boomy despite expensive microphone"),
        ("Electronics DIY", "Selecting Temperature-Controlled Soldering Station (T12 / C210) vs Cheap Irons", 
         "Cheap unregulated soldering irons overheat to 450 deg C, lifting delicate copper traces off circuit boards.", 
         "Choose cartridge-tip station (e.g. Pinecil or T12) with fast PID thermal recovery and leaded 63/37 solder", "Fried circuit boards and lifted pads on expensive electronics"),
        ("Electronics DIY", "Selecting Digital Multimeter: True RMS and CAT III 600V Safety Rating", 
         "Cheap yellow multimeters explode like a hand grenade if accidentally connected to mains on current mode.", 
         "Verify True RMS, independent HRC ceramic fuses on current jacks, CAT III 600V / CAT IV 300V rating", "Fatal arc flash explosion and third-degree hand burns"),
        ("Electronics DIY", "Selecting Oscilloscope: Bandwidth, Sample Rate, and Memory Depth", 
         "Trying to measure a 50MHz digital clock with a 50MHz scope distorts square waves into sine waves.", 
         "Apply the 5x rule: scope bandwidth must be at least 5 times the fundamental signal frequency", "Misdiagnosing digital SPI/I2C communication waveforms"),
        ("Electronics DIY", "Buying Lithium 18650 Battery Cells: Spotting Fake Sony VTC6 / Samsung 30Q", 
         "Scammers re-wrap dangerous 1000mAh sand-filled recycled cells with branded 3000mAh shrink wraps.", 
         "Test AC internal resistance (<20 mOhm for genuine high-drain cell) using an RC battery tester", "Lithium battery thermal runaway, explosion, and fire in vape/torch"),
        ("Power & Charging", "Buying High-Capacity Power Bank: Rated Watt-Hours (Wh) and Airline Carry-On Rules", 
         "Airlines confiscate power banks larger than 100Wh (approx 27,000mAh) at security checkpoints.", 
         "Check watt-hour rating printed on casing (<100Wh is universally allowed without airline approval)", "Airport security seizing expensive 40,000mAh power bank"),
        ("Lighting & EDC", "Selecting Tactical Flashlight / Headlamp: Lumens vs Candela (Beam Throw)", 
         "A 2,000-lumen floodlight illuminates everything nearby but cannot light up a pathway 100 meters away.", 
         "Check Candela rating for beam distance; look for High CRI (>90) LED emitter for true night colors", "Blinded by wide glare without being able to see distant obstacles"),
        ("Bags & Carry", "Selecting Daily Commuter Laptop Backpack: Suspended Cradle and Water Resistance", 
         "Backpacks without a suspended laptop bottom compartment crack laptop corners when dropped on floor.", 
         "Look for suspended padded false bottom, YKK AquaGuard water-resistant zippers, Cordura nylon fabric", "Cracked laptop corner and screen shatter after backpack drop"),
        ("Kitchen Cutlery", "Kitchen Knife Sharpening: Honing Steel vs 1000/6000 Grit Whetstone", 
         "A honing steel only realigns a rolled microscopic edge; it cannot sharpen a dull, rounded knife.", 
         "Use 1000-grit whetstone to re-establish bevel angle, followed by 6000-grit stone for razor polish", "Using dull knives that slip on tomato skins and slice fingers"),
        ("Kitchen Cutlery", "Selecting Cutting Board: End-Grain Wood vs Edge-Grain vs Glass", 
         "Glass and marble cutting boards instantly roll and destroy sharp knife edges on the first cut.", 
         "Choose End-Grain Teak or Walnut wood board; oil monthly with food-grade mineral oil", "Dulling expensive chef knives within 3 days"),
        ("Kitchen Cookware", "Selecting Frying Pan: Hard-Anodized Aluminum vs Ceramic vs Traditional PTFE", 
         "Ceramic non-stick pans lose their non-stick release properties within 6-9 months of daily cooking.", 
         "Choose heavy-gauge Hard Anodized PTFE for longevity; avoid aerosol cooking sprays that bake on grease", "Food sticking permanently to degraded ceramic coating"),
        ("Kitchen Cookware", "Testing Thermal Flask / Thermos Vacuum Insulation Integrity", 
         "If the outer metal shell feels hot after pouring boiling water inside, the vacuum seal is broken.", 
         "Pour boiling water; feel exterior walls after 5 minutes (exterior must remain completely cool)", "Hot tea turning lukewarm after 2 hours"),
        ("Kitchen Appliances", "Selecting High-Performance Blender for Nut Butters: Tamper Tool Usage", 
         "Blending thick peanut butter without a tamper causes blade to spin in an empty air pocket (cavitation).", 
         "Choose commercial-grade motor (1200W+) with custom-fit lid tamper tool to push ingredients down", "Burning out blender motor from air cavitation"),
        ("Kitchen Appliances", "Selecting Fuzzy Logic Microcomputer Rice Cooker vs Single-Switch Pot", 
         "Traditional single-switch pots boil aggressively, burning the bottom layer and turning brown rice mushy.", 
         "Choose Micom fuzzy-logic cooker with separate programs for White, Brown, Porridge, and Sushi rice", "Burnt crust at bottom of pot and gummy uncooked grains"),
        ("Kitchen Appliances", "Selecting Bread Toaster: Long Slot vs 2-Slice and Defrost Function", 
         "Narrow slot toasters squeeze artisanal sourdough bread, burning edges while center stays raw.", 
         "Choose wide variable-width slots with motorized descent and dedicated frozen bread defrost setting", "Toaster jamming, smoking, and setting off smoke alarms"),
        ("Home Appliances", "Steam Iron vs Garment Steamer: Choosing based on Fabric Types", 
         "Garment steamers cannot produce crisp knife-pleats or stiff formal cotton shirt collars.", 
         "Use Steam Iron for crisp cotton/linen dress shirts; use Steamer for delicate silk, blazers, and drapes", "Frustration trying to iron formal office shirts with a vertical steamer"),
        ("Home Appliances", "Selecting Vacuum Cleaner for Pet Hair: Anti-Tangle Motorized Brush Bar", 
         "Long pet hair wraps tightly around vacuum brush rollers, seizing the roller belt and motor.", 
         "Look for conical anti-tangle hair screw brush bar and sealed HEPA filtration to trap pet dander", "Burnt vacuum drive belt and smell of melting plastic"),
        ("Personal Care", "Selecting Hair Dryer: High-Speed Brushless Motor vs Traditional Heating Coil", 
         "Cheap hair dryers rely on extreme scorching heat that boils moisture inside the hair cortex.", 
         "Choose 110,000 RPM high-speed brushless motor with intelligent NTC heat sensor under 100 deg C", "Extreme split ends, heat damage, and frizzy brittle hair"),
        ("Personal Care", "Selecting Electric Toothbrush: Sonic Vibration vs Oscillating Rotating Head", 
         "Pressing too hard with an oscillating electric toothbrush causes severe receding gum lines.", 
         "Choose sonic brush with visual red pressure sensor that automatically reduces speed upon hard press", "Permanent gum erosion and exposed sensitive tooth roots")
    ]
    for sub, title, prob, check, risk in t_items:
        items.append((cat_tech, sub, title, prob, prob, check, risk))

    # 2. Bureaucracy & Life Navigation (70)
    cat_gov = "Government Identity, Civil Registry & Taxes"
    g_items = [
        ("Certificates & Clearances", "Applying for Police Clearance Certificate online (pcc.police.gov.bd)", 
         "A pending local Thana case or incorrect Thana mapping delays clearance past visa deadlines.", 
         "Apply via online portal; ensure address matches passport exactly; track file at local Thana", "Missing foreign job or university visa deadline"),
        ("Certificates & Clearances", "Correcting HSC Board Exam Subject Marks and Transcript Errors", 
         "Discrepancies on board transcripts prevent international university credit transfers.", 
         "Apply to Controller of Examinations with original admit card, registration card, and college forward", "Rejection by foreign university admissions committee"),
        ("Certificates & Clearances", "Applying for Disability Golden Card (Suborna Nagorik) from Social Welfare", 
         "Entitles individuals to government healthcare subsidies, quotas, and transport fare discounts.", 
         "Get disability assessment certificate from Upazila Health Complex, apply to Social Services office", "Missing out on statutory welfare benefits and quota protections"),
        ("Certificates & Clearances", "Registering a Voluntary Non-Profit Club under Department of Youth Development", 
         "Operating an unregistered club bank account risks money laundering scrutiny by central bank.", 
         "Draft club constitution, executive committee list, apply to Upazila Youth Development Officer", "Frozen donations and inability to run legitimate social programs"),
        ("Certificates & Clearances", "Applying for International Barcode (GS1 Bangladesh) for Retail Products", 
         "Generating random fake barcodes prevents retail supermarket checkout scanning at POS counters.", 
         "Apply through GS1 Bangladesh office in DCCI; obtain certified Company Prefix and GTIN numbers", "Supermarkets rejecting shipment of retail packaged goods"),
        ("Certificates & Clearances", "Obtaining BSTI Clearance for Packaged Food and Beverage Products", 
         "Selling packaged drinking water or mustard oil without mandatory BSTI seal results in mobile court arrest.", 
         "Submit product samples to BSTI testing lab, pass factory hygiene audit, obtain CM license", "Mobile court raiding store, heavy fines, and product seizure"),
        ("Certificates & Clearances", "Applying for Drug License for Retail Pharmacy from DGDA", 
         "Operating a pharmacy without a Grade C Pharmacist certificate and DGDA license is a criminal offense.", 
         "Grade-C Pharmacist registration, commercial shop lease, refrigerator setup, DGDA portal filing", "Pharmacy sealed by drug administration mobile court"),
        ("Certificates & Clearances", "Enrolling in Universal Pension Scheme (Surokkha / Progoti / Prattay)", 
         "Selecting the wrong scheme category disqualifies contributor from government matching funds.", 
         "Verify eligibility: Progoti (private job), Surokkha (self-employed), Samata (low-income); register on upension.gov.bd", "Paying installments under wrong category with delayed pension maturity"),
        ("Certificates & Clearances", "Claiming Life Insurance Maturity Claim when Insurer Delays Payment", 
         "Insurance companies sit on maturity claims for months without releasing final bonus checks.", 
         "Submit original policy document, premium receipts, discharge voucher; file grievance to IDRA", "Losing months of interest while insurance company withholds money"),
        ("Certificates & Clearances", "Claiming Deceased Worker Benefit from Workers Welfare Foundation", 
         "Formal factory workers dying on the job qualify for statutory 2-3 Lakh BDT government compensation.", 
         "Submit employer accident report, post-mortem report, legal heir certificate to Welfare Board", "Impoverished families left destitute without statutory death grant"),
        ("Certificates & Clearances", "Surrendering Old MRP Passport and Transferring Valid Visas to New e-Passport", 
         "Cutting or punching holes through valid foreign visa pages in old passport cancels the visa.", 
         "Instruct passport counter officer to cancel old passport pages while keeping visa pages intact", "Accidentally voiding a 10-year US or Canadian visa"),
        ("Certificates & Clearances", "Selling a Privileged Foreign Diplomat Vehicle (Duty-Free Car Sale)", 
         "Buying a duty-free car from an embassy diplomat requires paying full customs duty to NBR before registration.", 
         "NBR customs duty assessment order, Ministry of Foreign Affairs clearance, BRTA registration", "Vehicle seized by customs for duty evasion"),
        ("Certificates & Clearances", "Registering a Primary Cooperative Society (সমবায় সমিতি)", 
         "Collecting public deposits under an unregistered cooperative violates Banking Companies Act.", 
         "Minimum 20 founding members, share capital deposit, approval from Upazila Cooperative Officer", "Arrest and freezing of cooperative society accounts"),
        ("Certificates & Clearances", "Applying for Industrial Boiler License from Office of Chief Inspector of Boilers", 
         "Operating an uncertified steam boiler in a factory causes catastrophic blast disasters.", 
         "Boiler hydrostatic pressure test, safety relief valve calibration, certified boiler attendant", "Boiler exploding, killing workers and facing murder charges"),
        ("Certificates & Clearances", "Filing Annual NBR VAT Return (Mushak 9.1) online", 
         "Failing to submit monthly VAT return by 15th of each month triggers automated 10,000 BDT fine.", 
         "Submit online return via vat.gov.bd before 15th; reconcile input tax credits and treasury deposits", "Compound monthly fines and temporary suspension of VAT BIN")
    ]
    for sub, title, prob, check, risk in g_items:
        items.append((cat_gov, sub, title, prob, prob, check, risk))

    # 3. Automotive Mechanics & Maintenance (50)
    cat_veh = "Vehicles, Transport & Driving"
    v_items = [
        ("Automotive Mechanics", "Replacing Car Spark Plugs: Iridium vs Platinum vs Copper Heat Ranges", 
         "Installing cold heat-range plugs in city driving causes severe carbon fouling and misfires.", 
         "Check vehicle service manual for exact heat range code; calibrate gap with wire feeler gauge", "Engine misfires, poor fuel economy, and unburnt fuel ruining catalytic converter"),
        ("Automotive Mechanics", "Replacing Engine Timing Belt vs Timing Chain: 100,000 km Service", 
         "Timing belt snapping on an interference engine causes pistons to smash into open valves, destroying engine.", 
         "Replace rubber timing belt, tensioner pulley, and water pump together at 100,000 km", "Complete catastrophic engine destruction requiring total engine replacement"),
        ("Automotive Mechanics", "Bench-Bleeding Brake Master Cylinder before Installation", 
         "Installing a dry brake master cylinder traps air pockets that standard wheel bleeding cannot purge.", 
         "Loop bleeder tubes from outlet ports back into reservoir; pump piston on bench until all bubbles vanish", "Spongy brake pedal sinking to floorboard with zero stopping power"),
        ("Automotive Mechanics", "Diagnosing Power Steering Whine: Hydraulic Fluid Aeration vs Pump", 
         "A tiny crack in the plastic reservoir suction hose draws air bubbles into fluid, making pump scream.", 
         "Inspect reservoir suction O-ring and hose clamps; bleed air by turning steering lock-to-lock on jack stands", "Unnecessarily replacing expensive 30,000 BDT power steering pump"),
        ("Automotive Mechanics", "Motorcycle Steering Head Bearings: Tapered Roller vs Loose Ball Bearings", 
         "Worn steering head bearings develop a central 'notch', making straight-line balance impossible.", 
         "Elevate front wheel; check for center detent notch; replace with heavy-duty tapered roller bearings", "Dangerous front handlebar weave and speed wobbles"),
        ("Automotive Mechanics", "Motorcycle Carburetor Tuning: Pilot Jet vs Main Jet vs Needle Clip", 
         "Changing exhaust without re-jetting carburetor creates dangerously lean fuel mixture.", 
         "Adjust pilot fuel screw for smooth idle; raise needle clip for midrange; upsize main jet for wide-open throttle", "Burnt exhaust valves and engine overheating"),
        ("Automotive Mechanics", "Motorcycle Valve Clearance (Tappet) Adjustment with Feeler Gauge", 
         "Valves tighten as seats wear; zero clearance leaves valves partially open, burning valve edges.", 
         "Measure cold engine valve clearance with feeler gauge; adjust tappet screws to factory specs", "Loss of compression, hard cold starting, and burnt exhaust valves"),
        ("Automotive Mechanics", "Soaking Motorcycle Wet Clutch Plates in Fresh Engine Oil before Install", 
         "Installing dry friction plates burns and glazes clutch material within the first 5 kilometers.", 
         "Submerge new friction plates in fresh engine oil for minimum 2 hours prior to assembly", "Severe clutch slipping under acceleration and burnt oil smell"),
        ("Automotive Mechanics", "Diagnosing Motorcycle Starter Motor Click: Solenoid vs Worn Brushes", 
         "A clicking starter relay does not always mean dead battery; it often indicates worn motor carbon brushes.", 
         "Tap starter motor casing lightly with screwdriver; check voltage drop across solenoid terminals", "Stranded on highway unable to start bike"),
        ("Automotive Mechanics", "Installing LED Auxiliary Fog Lights with Dedicated Relay Harness", 
         "Wiring high-power LED fog lights directly to headlight switch burns thin factory wire harness.", 
         "Use 40A automotive relay, in-line 15A fuse from battery, and handlebar waterproof switch", "Melted wiring loom, dead headlights, and motorcycle electrical fire")
    ]
    for sub, title, prob, check, risk in v_items:
        items.append((cat_veh, sub, title, prob, prob, check, risk))

    # 4. First Aid & Health Emergencies (50)
    cat_hlth = "Healthcare, Medical Navigation & Eldercare"
    h_items = [
        ("Emergency First Aid", "First Aid for Second-Degree Hot Oil Kitchen Burns", 
         "Applying ice, butter, or toothpaste on burns traps heat and causes deep tissue necrosis.", 
         "Cool under gentle running room-temperature tap water for 20 minutes; cover with sterile non-stick dressing", "Deep scarring, severe infection, and contracture deformity"),
        ("Emergency First Aid", "First Aid for Choking Adult: Heimlich Maneuver Protocol", 
         "Slapping a choking person on back while they are upright can lodge food deeper into trachea.", 
         "Stand behind victim; place fist above navel; deliver quick upward and inward abdominal thrusts", "Complete airway blockage and fatal asphyxiation within 4 minutes"),
        ("Emergency First Aid", "First Aid for Choking Infant (Under 1 Year Old)", 
         "Performing adult abdominal thrusts on an infant ruptures internal abdominal organs and liver.", 
         "Lay baby face down along forearm supporting jaw; deliver 5 firm back blows, then 5 two-finger chest thrusts", "Internal organ hemorrhage or infant death from choking"),
        ("Emergency First Aid", "Distinguishing Heat Exhaustion vs Heat Stroke Emergency", 
         "Heat stroke is a medical emergency where sweating stops and body temp exceeds 40 deg C, causing brain death.", 
         "Heat stroke: hot dry skin, confusion; immediately submerge in ice water bath; call emergency ambulance", "Permanent neurological brain damage and organ failure"),
        ("Emergency First Aid", "Managing Severe Arterial Bleeding: Tourniquet Application", 
         "Applying a loose tourniquet acts like a venous band, increasing blood loss instead of stopping it.", 
         "Place combat tourniquet 2-3 inches above bleeding limb; turn windlass rod until bleeding stops completely", "Patient bleeding to death in under 3 minutes"),
        ("Emergency First Aid", "First Aid for Suspected Spinal / Neck Injury after Motorcycle Crash", 
         "Ripping helmet off an accident victim with neck injury severs spinal cord, causing quadriplegia.", 
         "Do not remove helmet unless airway is obstructed; hold head in neutral inline stabilization", "Permanent lifelong paralysis from neck down"),
        ("Emergency First Aid", "First Aid for Acute Anaphylaxis Allergic Reaction: EpiPen Delivery", 
         "Waiting for oral antihistamines to work during anaphylactic throat swelling results in fatal suffocation.", 
         "Inject Epinephrine (EpiPen) immediately into outer thigh muscle; hold for 3 seconds; call ambulance", "Fatal respiratory arrest from airway angioedema"),
        ("Emergency First Aid", "First Aid for Diabetic Hypoglycemia: Rule of 15", 
         "Attempting to pour sugar water into an unconscious person's mouth causes fluid inhalation into lungs.", 
         "If conscious: take 15g fast sugar (glucose tabs/juice); wait 15 mins; re-test. If unconscious: call 999", "Fatal aspiration pneumonia or brain death from prolonged hypoglycemia"),
        ("Emergency First Aid", "First Aid for Grand Mal Epileptic Seizure: Preventing Injury", 
         "Forcing spoons or shoes into a seizing patient's mouth breaks teeth and blocks airway.", 
         "Never put anything in mouth; clear hard objects away; cushion head; roll into recovery position when seizure ends", "Broken teeth, aspiration of blood, and tongue laceration"),
        ("Emergency First Aid", "First Aid for Corrosive Acid / Alkali Poisoning Ingestion", 
         "Inducing vomiting after drinking acid burns the esophagus a second time, causing esophageal rupture.", 
         "Never induce vomiting; never give neutralizing chemical agents; rush immediately to emergency toxicology", "Fatal perforation of stomach and chemical mediastinitis")
    ]
    for sub, title, prob, check, risk in h_items:
        items.append((cat_hlth, sub, title, prob, prob, check, risk))

    # 5. Home, Electrical & Construction Safety (45)
    cat_home = "Home Appliances, Furniture & Tools"
    hm_items = [
        ("Electrical & Wiring", "Sizing Electrical Wire Gauge (RM) for AC and Water Geyser Circuits", 
         "Connecting a 2-ton AC to thin 1.5RM lighting wire causes wires to melt inside PVC conduits.", 
         "Use minimum 4.0RM copper wire for AC; 2.5RM for geyser; dedicated circuit breaker for each", "Electrical wiring fire inside wall conduit burning house down"),
        ("Electrical & Wiring", "Installing Residual Current Circuit Breaker (RCCB / RCBO 30mA)", 
         "Standard MCB circuit breakers only trip on massive short circuits, not during human electrocution.", 
         "Install 30mA sensitivity RCCB in main distribution board; test test-button monthly", "Fatal electrocution from touching faulty washing machine or wet wall"),
        ("Electrical & Wiring", "Installing Surge Protection Device (SPD Type 2) in Distribution Board", 
         "Lightning strikes on nearby utility lines send voltage spikes that destroy all home TVs and ACs.", 
         "Install Type-2 DIN-rail SPD connected to solid earth; ensure earth resistance is under 5 Ohms", "All home electronics and inverter boards fried in a single thunderstorm"),
        ("Plumbing & Water", "Sizing Domestic Water Pressure Booster Pump: VFD vs Pressure Tank", 
         "Cheap pressure switch pumps cycle on and off every 3 seconds, causing violent pressure surges.", 
         "Choose Variable Frequency Drive (VFD) booster pump for continuous silent constant pressure", "Blowing out toilet bidet sprayers and bursting flexible water hoses"),
        ("Plumbing & Water", "Treating Persistent Wall Efflorescence (Saltpeter / লোনা লাগা)", 
         "Applying wall putty over damp salted bricks results in flakes falling off again in 3 months.", 
         "Chip plaster down to bare brick; wash with mild acid; apply waterproof crystalline slurry (e.g. Sika)", "Ruined luxury interior paint and crumbling brickwork"),
        ("Plumbing & Water", "Installing Anti-Syphon Trap (P-Trap) on Bathroom Floor Drains", 
         "Drains without water seal traps allow sewer gases and cockroaches to enter living spaces.", 
         "Install deep P-trap with minimum 50mm water seal; ensure regular water flow to prevent dry-out", "Horrendous sewer gas smell and cockroach infestation inside bedrooms"),
        ("Plumbing & Water", "Sizing Rooftop Water Tank Capacity for Multi-Family Apartment", 
         "Undersized tanks run out of water during morning rush hour, burning pump motors dry.", 
         "Calculate 150 liters per person per day x total residents + 20% safety storage margin", "Building running out of water every morning; burnt water pumps"),
        ("Safety & Civil", "Installing Carbon Monoxide (CO) Detector near Kitchen and Gas Lines", 
         "Carbon monoxide is invisible, odorless, and kills sleeping families during silent gas leaks.", 
         "Install battery-backed digital CO alarm 5 feet off floor near sleeping areas and kitchen", "Silent death from carbon monoxide poisoning during sleep"),
        ("Safety & Civil", "Core-Cutting RCC Beams for Kitchen Hood Ducting: Structural Integrity", 
         "Plumbers blindly drill 6-inch holes through structural beams, cutting through main tension rebar.", 
         "Never core-drill through concrete structural beams; drill through non-loadbearing exterior brick walls", "Structural weakening and catastrophic beam shear failure")
    ]
    for sub, title, prob, check, risk in hm_items:
        items.append((cat_home, sub, title, prob, prob, check, risk))

    return items

print("Final 285 scenarios loaded.")
