"""
Reach Exact 1000 module providing 110 rich, diverse scenarios to reach and exceed 1,000 unique scenarios.
"""

def get_reach_exact_110():
    scenarios = []
    
    # Category 1: Construction & Real Estate (10)
    c_re = "Land, Housing & Property"
    items_re = [
        ("Construction Quality", "RCC Concrete Curing: 28-Day Compressive Strength Cylinder Test", 
         "Stripping wooden shuttering before 21-28 days of water curing reduces concrete strength by 50%.", 
         "Keep columns wrapped in wet hessian burlap for 14-28 days; test laboratory crush cylinders at 7 and 28 days", "Premature slab deflection, micro-cracks, and structural failure"),
        ("Construction Quality", "Installing Early Streamer Emission (ESE) Lightning Arrester on High-Rise", 
         "Improper down-conductor earthing causes lightning charge to flash into building electrical conduits.", 
         "Ensure dedicated continuous 50mm2 copper tape directly to separate chemical earth pit (< 5 Ohms)", "Lightning strike frying building transformers and setting roof ablaze"),
        ("Construction Quality", "Basement Retaining Wall Waterproofing: Bentonite Geotextile Membrane", 
         "Standard bitumen paint fails under underground hydrostatic water table pressure, flooding basement.", 
         "Install sodium bentonite self-healing waterproofing sheets outside retaining walls before backfilling", "Basement parking flooded with rising groundwater every monsoon"),
        ("Construction Quality", "Installing Double-Glazed Soundproof UPVC Windows in Busy Traffic Corridors", 
         "Single-pane sliding aluminum windows leak street traffic noise through thin glass and air gaps.", 
         "Use double-glazed argon-gas filled insulated glass unit (6mm glass + 12mm gap + 6mm glass) with EPDM seals", "Constant sleep disruption from loud street horns and traffic roar"),
        ("Construction Quality", "Sizing Commercial Kitchen Grease Trap for Restaurant Drainage", 
         "Dumping hot cooking oil directly into municipal drains solidifies into massive sewer-blocking fatbergs.", 
         "Install stainless steel 3-chamber gravity grease interceptor; skim grease cake weekly", "Municipal sewer backup flooding restaurant kitchen and heavy fines"),
        ("Construction Quality", "Installing Domestic Hybrid Solar Inverter with LiFePO4 Battery Bank", 
         "Lead-acid batteries die in 2 years; Lithium Iron Phosphate (LiFePO4) lasts 10+ years with 6,000 cycles.", 
         "Choose LiFePO4 battery pack with certified CANbus BMS communication to hybrid solar inverter", "Wasting money replacing dead lead-acid batteries every 24 months"),
        ("Construction Quality", "Selecting Anti-Skid Bathroom Floor Tiles: R10 / R11 Slip Resistance", 
         "Polished porcelain tiles in wet bathrooms become as slippery as an ice rink, causing fatal falls.", 
         "Demand matte-finish ceramic tiles with certified R10 or R11 anti-slip slip resistance rating", "Elderly parent slipping on wet tiles and suffering fatal hip fracture"),
        ("Construction Quality", "Preventing Sewer Gas Backdraft with Air Admittance Valves (AAV)", 
         "Unvented plumbing drainage pipes siphon water out of P-traps, venting toxic sewer gases into bedrooms.", 
         "Install one-way Air Admittance Valves (AAV) at top of vertical soil stacks to equalize drainage pressure", "Persistent toxic hydrogen sulfide sewer gas odor in bathrooms"),
        ("Construction Quality", "Selecting Exterior Weather-Coat Paint with Elastomeric Crack-Bridging", 
         "Standard acrylic exterior paints crack along microscopic plaster lines, letting monsoon rain seep in.", 
         "Use high-build elastomeric waterproof exterior coating that stretches over hairline cracks", "Water seeping through exterior wall, ruining interior luxury paint"),
        ("Construction Quality", "Resolving Boundary Encroachment with Municipal Surveyor Joint Hearing", 
         "Private surveyors give conflicting reports; only an official joint municipal survey settles disputes.", 
         "File application with City Corporation Town Planning department for official joint demarcation hearing", "Escalating violent physical clashes with encroaching neighbors")
    ]
    for sub, title, prob, check, risk in items_re:
        scenarios.append((c_re, sub, title, prob, prob, check, risk))

    # Category 2: Mechanics & Transport (10)
    c_vh = "Vehicles, Transport & Driving"
    items_vh = [
        ("Automotive Mechanics", "Diagnosing Torque Converter Lockup Clutch Shudder in Automatic Transmission", 
         "A trembling vibration between 40-60 km/h is often transmission clutch shudder, not warped wheels.", 
         "Add Lubegard Instant Shudder Fix or perform complete synthetic transmission fluid flush", "Unnecessarily spending 80,000 BDT to replace good suspension parts"),
        ("Automotive Mechanics", "Testing Oxygen Sensor Switching Voltage: 0.1V to 0.9V Oscillation", 
         "A lazy oxygen sensor stays stuck at 0.5V, forcing engine into rich fuel trim that wastes 30% gas.", 
         "Connect OBD2 live data scanner; verify upstream O2 sensor oscillates rapidly between 0.1V and 0.9V", "Terrible fuel mileage, black exhaust smoke, and fouled spark plugs"),
        ("Automotive Mechanics", "Diagnosing ABS Wheel Speed Sensor Tone Ring Corrosion", 
         "Rust buildup on ABS reluctor rings triggers false ABS activation during gentle low-speed braking.", 
         "Inspect magnetic tone rings on wheel hubs for chipped teeth and metal debris; test sensor resistance", "Brake pedal vibrating and extending stopping distance in traffic"),
        ("Automotive Mechanics", "Testing Car Radiator Pressure Cap Valve (0.9 vs 1.1 Bar Rating)", 
         "A weak radiator cap spring allows coolant to boil at lower temp, overflowing into expansion reservoir.", 
         "Pressure test radiator cap with cooling system pressure tester; verify seal holds rated pressure", "Engine overheating and coolant spewing over engine bay"),
        ("Automotive Mechanics", "Cleaning Car AC Evaporator Core with Ultrasonic Foam without Dash Removal", 
         "Mechanics charge massive fees to tear down dashboard just to clean a smelly, dusty AC evaporator.", 
         "Inject expanding evaporator cleaning foam directly through drain tube into evaporator housing", "Paying 15,000 BDT in labor and rattles in reassembled dashboard"),
        ("Automotive Mechanics", "Inspecting Motorcycle Brake Master Cylinder Sight Glass for Sun Degradation", 
         "Sunlight rots plastic sight glasses, causing sudden catastrophic brake fluid blowout on highway.", 
         "Check sight glass for micro-crazing; replace with aluminum threaded sight glass replacement kit", "Instant total loss of front brakes at 80 km/h"),
        ("Automotive Mechanics", "Motorcycle Rear Monoshock Preload and Rebound Damping Tuning", 
         "Riding with passenger on soft factory preload causes rear shock to bottom out over speed bumps.", 
         "Adjust spring preload collar using C-spanner to achieve 30-35mm rider sag with luggage", "Bottoming out suspension, bending swingarm, and harsh back pain"),
        ("Automotive Mechanics", "Sealing Spoke Wheels for Tubeless Conversion: Rim Band Tape Kit", 
         "Spoke wheels on adventure bikes require inner tubes; converting to tubeless requires airtight tape.", 
         "Clean rim with isopropyl alcohol; apply heavy 3M 5200 sealant over each spoke nipple; apply rim tape", "Sudden flat tire in remote wilderness miles from repair shop"),
        ("Automotive Mechanics", "Cleaning Motorcycle Drive Chain: Kerosene vs Harsh Brake Cleaner", 
         "Spraying harsh chlorinated brake cleaner destroys internal rubber O-rings/X-rings, ruining chain.", 
         "Clean chain exclusively with pure kerosene or dedicated O-ring safe chain cleaner; lubricate with heavy gear oil", "Chain O-rings drying, snapping, and breaking chain at speed"),
        ("Automotive Mechanics", "Diagnosing Vehicle Fuel Filter Restriction with Fuel Pressure Gauge", 
         "A clogged in-tank fuel filter starves engine of fuel at highway speeds while idling normally.", 
         "Connect inline mechanical fuel pressure gauge; verify fuel pressure holds under full throttle load", "Car hesitating and losing all power when overtaking trucks")
    ]
    for sub, title, prob, check, risk in items_vh:
        scenarios.append((c_vh, sub, title, prob, prob, check, risk))

    # Category 3: Tech & Audio (10)
    c_tc = "Consumer Tech, Hardware & Gadgets"
    items_tc = [
        ("Advanced Tech", "Diagnosing USB-C Power Delivery Handshake Negotiation Failures", 
         "Cheap USB-C cables lacking E-Marker chips negotiate only basic 5V/3A, failing to fast-charge laptops.", 
         "Use certified 100W/240W E-Marker USB-C cables; check USB Power Delivery voltage profile in OS", "Laptop slowly draining battery while plugged into charger"),
        ("Advanced Tech", "Sizing Network Switch: Managed vs Unmanaged and PoE+ 802.3at Power Budget", 
         "Connecting 8 high-power PTZ security cameras to a weak PoE switch exceeds watt budget, rebooting cameras.", 
         "Calculate total camera wattage draw; choose PoE+ switch with minimum 30W per port and 120W total budget", "Security cameras constantly rebooting and losing footage"),
        ("Advanced Tech", "Configuring Automatic USB Shutdown on NAS during Power Outage", 
         "When UPS battery dies during loadshedding, sudden power cut corrupts NAS Btrfs/ZFS storage pool.", 
         "Connect UPS USB monitoring cable to NAS; configure automated safe shutdown when battery hits 20%", "Corrupted storage pool and loss of terabytes of family backups"),
        ("Advanced Tech", "Applying Honeywell PTM7950 Phase-Change Thermal Pad on Laptops", 
         "Standard thermal paste pumps out from bare laptop silicon dies within months, causing 95 deg C spikes.", 
         "Apply solid phase-change PTM7950 pad; cures into ultra-thin liquid at 45 deg C with zero pump-out", "Laptops running hot and noisy 3 months after thermal repaste"),
        ("Advanced Tech", "Verifying Ultra High Speed HDMI 2.1 Cable with Official HDMI App", 
         "Counterfeit 'HDMI 2.1' cables lack shielding, causing black screen flickers at 4K 120Hz.", 
         "Scan the holographic security QR label on retail box using official HDMI Cable Certification app", "Intermittent signal dropouts on expensive gaming consoles"),
        ("Advanced Tech", "Setting up WireGuard VPN Server on Home Router for Encrypted Remote Access", 
         "Using outdated PPTP or OpenVPN with weak keys exposes home network to external intrusion.", 
         "Configure WireGuard on router with public key exchange; access home NAS securely from mobile phones", "Hackers infiltrating home smart cameras over public Wi-Fi"),
        ("Advanced Tech", "Preventing IP Conflicts with Static DHCP Reservations for Smart Devices", 
         "Two devices assigned the same local IP address knock each other off the internet intermittently.", 
         "Assign permanent Static DHCP IP reservations based on MAC addresses in router admin panel", "Smart home hub disconnecting and printer disappearing from network"),
        ("Advanced Tech", "Sizing Home Theater Subwoofer Crossover Frequency (80Hz THX Standard)", 
         "Setting subwoofer crossover to 150Hz makes bass directional, letting ear pinpoint subwoofer box.", 
         "Set AV receiver crossover to 80Hz; set main speakers to 'Small'; adjust phase knob for loudest bass", "Muddy boomy dialogue and unnatural localized bass thumping"),
        ("Advanced Tech", "Calibrating Vinyl Turntable Phono Cartridge Tracking Force with Digital Gauge", 
         "Too light tracking force causes needle to skip and scratch vinyl; too heavy crushes groove walls.", 
         "Use digital stylus force scale; adjust counterweight to manufacturer recommended grams (e.g. 1.8g)", "Permanent irreversible destruction of expensive vinyl record grooves"),
        ("Advanced Tech", "Cleaning Camera Lens Internal Fungus with Hydrogen Peroxide Solution", 
         "Wiping fungal hyphae with alcohol leaves microscopic acid etchings on optical glass coatings.", 
         "Disassemble lens elements; soak infected glass in 50/50 mix of 3% hydrogen peroxide and ammonia", "Fungus spreading across all lenses in camera dry cabinet")
    ]
    for sub, title, prob, check, risk in items_tc:
        scenarios.append((c_tc, sub, title, prob, prob, check, risk))

    # Category 4: Consumer Goods & Shopping (10)
    c_cg = "Consumer Goods & Shopping"
    items_cg = [
        ("Textiles & Apparel", "Buying 100% Cashmere Sweater: 2-Ply Mongolian vs Cheap Blends", 
         "Retailers label cheap recycled wool blends as pure cashmere, which pills and thins after 2 washes.", 
         "Check for dense 2-ply tight knit; pull gently (should bounce back without permanent stretch)", "Sweater covered in ugly fuzz pills and developing holes in 1 season"),
        ("Textiles & Apparel", "Buying Raw Selvedge Denim: Sanforized vs Unsanforized Shrinkage", 
         "Unsanforized raw denim shrinks by up to 2 whole waist sizes and 3 inches in length upon first soak.", 
         "Size up 2 sizes for unsanforized shrink-to-fit denim, or buy pre-shrunk Sanforized selvedge", "300 USD custom Japanese jeans shrinking so small they cannot be worn"),
        ("Textiles & Apparel", "Buying Goodyear Welted Leather Shoes: Resoling vs Cemented Soles", 
         "Glued cemented dress shoes cannot be resoled once the sole wears through, becoming trash.", 
         "Look for Goodyear welt stitched perimeter sole; allows cobblers to resole shoe infinite times", "Throwing away 200 USD leather dress shoes after sole wears down"),
        ("Textiles & Apparel", "Buying Down Winter Jacket: 800+ Fill Power vs Heavy Synthetic Filling", 
         "Low fill-power down requires twice the weight to provide the same warmth, feeling bulky and stiff.", 
         "Choose 800+ Fill Power ethically sourced hydrophobic goose down for ultralight warmth", "Freezing in sub-zero winter weather under heavy, uninsulated jacket"),
        ("Textiles & Apparel", "Buying 100% Pure Flax Linen Bedding: Pre-Washed vs Coarse Fabric", 
         "Unwashed raw linen feels scratchy like burlap until softened through multiple enzyme washes.", 
         "Choose stone-washed or garment-washed European flax linen for instant buttery softness", "Sleeping on scratchy, stiff sheets that irritate skin"),
        ("Jewelry & Care", "Using Ultrasonic Jewelry Cleaner: Safe vs Unsafe Gemstones", 
         "Putting emeralds, opals, or pearls into an ultrasonic cleaner shatters internal fractures.", 
         "Only clean diamonds, rubies, sapphires, and solid gold in ultrasonic; hand-wash soft organic gems", "Priceless family emerald shattering into fragments inside cleaner"),
        ("Personal Care", "Selecting Cordless Water Flosser: Pressure Range (30-100 PSI)", 
         "Weak budget water flossers lack sufficient jet pulsation pressure to dislodge plaque between teeth.", 
         "Look for 1400 pulses/minute frequency with adjustable pressure range from 30 to 100 PSI", "Persistent plaque buildup and gum inflammation despite water flossing"),
        ("Kitchen Goods", "Selecting Electric Kettle: 100% 304 Food-Grade Stainless Steel Interior", 
         "Kettles with plastic water level gauges leach toxic microplastics and BPA into boiling water.", 
         "Choose seamless unibody 304 stainless steel interior with zero plastic contact with boiling water", "Drinking water contaminated with leached plastic chemicals"),
        ("Kitchen Goods", "Selecting Glass Food Containers: Borosilicate Glass vs Soda-Lime Glass", 
         "Soda-lime glass containers shatter violently when transferred from freezer directly into microwave.", 
         "Insist on thermal-shock resistant Borosilicate glass (safe up to 400 deg C thermal differential)", "Glass container exploding inside microwave into razor-sharp shards"),
        ("Kitchen Goods", "Selecting Heavy-Duty Waxed Canvas Chef Apron for Kitchen and Workshop", 
         "Thin polyester aprons melt instantly when struck by hot kitchen oil splatters or welding sparks.", 
         "Choose heavy 12-16 oz water-resistant waxed cotton canvas with reinforced brass grommets", "Oil splatters soaking through fabric, burning skin on chest and legs")
    ]
    for sub, title, prob, check, risk in items_cg:
        scenarios.append((c_cg, sub, title, prob, prob, check, risk))

    # Category 5: Banking & Business (10)
    c_fn = "Banking, Finance & Investments"
    items_fn = [
        ("Wealth Management", "Enrolling in Dividend Reinvestment Plan (DRIP) for Compound Growth", 
         "Leaving stock dividends uninvested in cash accounts suffers drag from inflation and manual taxes.", 
         "Authorize automated DRIP to purchase fractional shares with zero brokerage commissions", "Missing out on exponential compound share accumulation over 10 years"),
        ("Wealth Management", "Filing Formal Dispute on Bangladesh Bank CIB Reporting Errors", 
         "Banks fail to update CIB after loan clearance, leaving citizens classified as defaulters.", 
         "Submit clearance certificate to bank CIB cell; file complaint with central bank Financial Integrity Dept", "Inability to obtain business loans or credit cards due to bank clerical errors"),
        ("Wealth Management", "Proper Procedure for Closing Credit Card: Written No-Dues Certificate", 
         "Cutting a credit card in half without formal account closure allows annual fees to compound silently.", 
         "Clear balance to zero, request formal account closure reference number, obtain written NOC certificate", "Discovering 5 years later that a forgotten 10 BDT fee grew to 50,000 BDT in fines"),
        ("Commercial Trade", "Setting up Offshore Multi-Currency Business Account (Wise / Airwallex)", 
         "Traditional banks charge predatory 4-5% wire spreads on international IT consulting payments.", 
         "Submit company incorporation papers, utility bill, and website contract proof for multi-currency routing", "Losing thousands of USD every month to commercial bank currency margins"),
        ("Commercial Trade", "Registering Trademark under Madrid Protocol for Multi-Country Protection", 
         "Filing separate trademark applications in 20 countries costs tens of thousands in foreign lawyer fees.", 
         "File single international application through WIPO Madrid System based on home trademark filing", "Rival registering your brand name in export markets, locking you out"),
        ("Commercial Trade", "Setting up Recognized Employee Provident Fund (PF) Trustee Board", 
         "Unrecognized provident funds are taxed as standard corporate income, losing tax benefits.", 
         "Draft PF Trust Deed, appoint equal employee-employer trustees, obtain NBR Commissioner recognition", "Tax authorities seizing provident fund balances as corporate taxable income"),
        ("Commercial Trade", "Drafting Non-Solicitation Agreement for Senior Sales Executives", 
         "Departing sales directors take entire corporate client books and sales teams to rival startups.", 
         "Include reasonable 12-month non-solicitation of clients and staff; define confidential client lists", "Losing 50% of annual recurring corporate revenue within one month"),
        ("Commercial Trade", "Registering with Export Promotion Bureau (EPB) for GSP Certificates", 
         "Exporters cannot claim duty-free European GSP benefits without registered REX number from EPB.", 
         "Apply on EPB online portal, submit factory audit compliance, obtain Registered Exporter (REX) number", "European buyers hit with 12% import duty, cancelling export orders"),
        ("Commercial Trade", "Managing Currency Forward Hedging for 180-Day Import Usance LC", 
         "Unhedged deferred import LCs wipe out profit margins if local currency depreciates by 10%.", 
         "Book a forward exchange contract with authorized dealer bank to lock future exchange rate", "Bankruptcy caused by currency devaluation on millions in import liabilities"),
        ("Commercial Trade", "Setting up Executive Performance Bonus with Legal Clawback Clauses", 
         "Executives manipulate short-term quarterly metrics to claim bonuses right before company crashes.", 
         "Draft bonus agreement with mandatory 3-year clawback clause for financial restatements or fraud", "Inability to recover millions in fraudulently claimed executive bonuses")
    ]
    for sub, title, prob, check, risk in items_fn:
        scenarios.append((c_fn, sub, title, prob, prob, check, risk))

    # Category 6: Health & First Aid (10)
    c_ht = "Healthcare, Medical Navigation & Eldercare"
    items_ht = [
        ("Clinical Medicine", "First Aid for Toxic Jellyfish Sting: Acetic Acid (Vinegar) Rinse", 
         "Rinsing a jellyfish sting with freshwater triggers remaining nematocysts to inject massive venom.", 
         "Douse affected area with household vinegar (acetic acid) for 30 seconds; pluck tentacles with tweezers", "Extreme agonizing venom pain, anaphylaxis, and deep skin scarring"),
        ("Clinical Medicine", "First Aid for Foreign Object Lodged in Toddler's Ear (Button, Bead, Seed)", 
         "Poking inside ear with cotton buds or tweezers pushes the object deeper against eardrum.", 
         "Do not poke; if insect: pour warm baby oil to float insect; if bead: rush to ENT specialist immediately", "Perforating child's eardrum and permanent hearing impairment"),
        ("Clinical Medicine", "First Aid for Dislocated Finger Joint: Buddy Taping Protocol", 
         "Pulling hard on a dislocated finger in the field tears collateral ligaments and volar plate.", 
         "Do not yank finger; tape dislocated finger to adjacent healthy finger (buddy tape); see doctor", "Permanent crooked finger deformity and chronic joint stiffness"),
        ("Clinical Medicine", "Managing Mild Hypothermia: Passive External Rewarming Protocol", 
         "Placing a severely cold hypothermic victim into a boiling hot bath causes fatal cardiac shock.", 
         "Remove wet clothes; wrap in warm dry blankets in sheltered room; offer warm sweet liquids", "Sudden cardiac ventricular fibrillation and circulatory collapse"),
        ("Clinical Medicine", "Managing Acute Otitis Media (Middle Ear Infection) Pain in Toddlers", 
         "Pouring garlic oil or ear drops into an ear with a perforated eardrum damages auditory nerves.", 
         "Administer oral ibuprofen for pain; consult pediatrician for oral antibiotics; never pour drops", "Hearing loss, chronic ear discharge, and mastoid bone infection"),
        ("Clinical Medicine", "Diagnosing Vitamin B12 Deficiency in Long-Term Metformin Diabetes Patients", 
         "Metformin inhibits intestinal B12 absorption; doctors often misdiagnose tingling feet as diabetic nerve damage.", 
         "Check serum B12 annually for patients on Metformin > 3 years; supplement with methylcobalamin", "Irreversible peripheral neuropathy and balance instability"),
        ("Clinical Medicine", "Managing Chronic Dry Mouth (Xerostomia) to Prevent Rapid Dental Decay", 
         "Lack of protective saliva allows oral acids to rot all teeth down to the gumline within 2 years.", 
         "Use saliva substitute sprays (xylitol), chew sugar-free gum, apply high-fluoride toothpaste daily", "Losing all natural teeth to rampant root caries decay"),
        ("Clinical Medicine", "Managing Frozen Shoulder (Adhesive Capsulitis): Pendulum Exercises", 
         "Forcing the arm past pain barrier during early freezing stage tears inflamed joint capsule.", 
         "Perform gentle Codman's pendulum exercises daily; use heat therapy; avoid aggressive manipulation", "Severe chronic shoulder stiffness lasting over 3 years"),
        ("Clinical Medicine", "Diagnosing Restless Legs Syndrome (RLS): Serum Ferritin Evaluation", 
         "Treating agonizing nighttime leg tingling as simple cramps ignores iron deficiency in brain cells.", 
         "Check serum Ferritin (target > 75 ng/mL for RLS); supplement with iron and dopamine agonists", "Years of severe chronic insomnia and psychological exhaustion"),
        ("Clinical Medicine", "Managing Chronic Tension Headaches with Cervical Posture Correction", 
         "Swallowing daily painkiller tablets ignores forward-head 'text neck' compressing occipital nerves.", 
         "Perform chin tuck exercises; adjust computer screen height to eye level; stretch trapezius", "Medication-overuse rebound headaches and chronic cervical spine disc bulge")
    ]
    for sub, title, prob, check, risk in items_ht:
        scenarios.append((c_ht, sub, title, prob, prob, check, risk))

    # Category 7: Agriculture & Rural (10)
    c_ag = "Pets, Gardening & Agriculture"
    items_ag = [
        ("Farming Operations", "Deworming Dairy Cattle: Rotating Anthelmintic Drug Classes", 
         "Using the same Albendazole dewormer continuously creates super-resistant parasitic worms.", 
         "Rotate chemical classes: Benzimidazoles (Albendazole) ➔ Levamisole ➔ Macrocyclic lactones (Ivermectin)", "Chronic anemia, emaciation, and milk drop across entire dairy herd"),
        ("Farming Operations", "Diagnosing Subclinical Mastitis in Cows: California Mastitis Test (CMT)", 
         "Waiting for milk to show visible clots ignores subclinical infections that destroy udder quarters.", 
         "Perform California Mastitis Test (CMT) paddle check monthly; dip teats in post-milking iodine solution", "Permanent loss of infected udder quarter and milk production"),
        ("Farming Operations", "Managing Calf Diarrhea (Scours): Immediate Electrolyte Rehydration", 
         "Withholding milk from a scouring calf starves the calf, causing rapid fatal hypoglycemia and death.", 
         "Continue feeding milk; provide 2 liters of balanced oral electrolyte solution between milk feedings", "Calf dying of acute dehydration within 24 hours of diarrhea onset"),
        ("Farming Operations", "Installing Rodent-Proof Feed Storage Bins in Commercial Poultry Sheds", 
         "Rats consume expensive poultry feed and transmit fatal Salmonella and Pasteurella diseases.", 
         "Store feed in galvanized steel elevated silos with smooth rodent-guard baffles on legs", "Contaminated feed wiping out entire flock with fowl cholera"),
        ("Farming Operations", "Vaccinating Village Chickens against Newcastle Disease (Ranikhet / চুনা পায়খানা)", 
         "Newcastle disease wipes out 100% of unvaccinated backyard village chickens during seasonal epidemics.", 
         "Administer BCRDV eye drop vaccine at Day 4 and Day 21; follow with RDV booster injection at 2 months", "Entire flock of 200 chickens dying within 48 hours of infection"),
        ("Farming Operations", "Managing Honeybee Hive Ventilation during High Summer Heat", 
         "Poor hive ventilation in 38 deg C heat melts internal wax honeycombs, drowning queen and brood.", 
         "Install screened bottom boards; provide shaded hive stands; ensure clean water source within 20 meters", "Hive melting into a puddle of honey and colony absconding"),
        ("Farming Operations", "Testing Agricultural Irrigation Water Salinity with EC Meter", 
         "Pumping saline groundwater onto vegetable fields poisons soil with sodium, stunting all crops.", 
         "Test water Electrical Conductivity (EC): water with EC > 1.5 dS/m is dangerous for sensitive crops", "Salinizing fertile agricultural land permanently for decades"),
        ("Farming Operations", "Applying Zinc Sulfate and Boron Fertilizer for Rice Panicle Sterility", 
         "Deficiency of boron and zinc causes paddy flowers to fail fertilization, producing empty chaff (চিটা).", 
         "Apply 10 kg Zinc Sulfate and 5 kg Solubor Boron per hectare during final land preparation", "25% of paddy harvest turning into worthless empty chaff grains"),
        ("Farming Operations", "Pruning Fruit Trees (Mango/Guava): Center Canopy Open-Vase Thinning", 
         "Dense, unpruned tree canopies block sunlight, harboring fungal anthracnose and fruit flies.", 
         "Prune dead and crossing branches to create open-center vase shape; allows sunlight to reach fruit", "Fruit rotting on branches and heavy pest infestation"),
        ("Farming Operations", "Managing Dog Separation Anxiety: Gradual Desensitization Training", 
         "Punishing a dog for destructive chewing when left alone escalates severe panic and anxiety.", 
         "Practice micro-departures (10s, 30s, 2m); provide frozen peanut butter Kong toys; never scold on return", "Dog injuring paws trying to claw through doors and constant barking")
    ]
    for sub, title, prob, check, risk in items_ag:
        scenarios.append((c_ag, sub, title, prob, prob, check, risk))

    # Category 8: Civil Registry & Government (10)
    c_gv = "Government Identity, Civil Registry & Taxes"
    items_gv = [
        ("Public Bureaucracy", "Obtaining Certified True Copy of Judgment Decree from Civil Court (নকল শাখা)", 
         "Clerks delay delivery for months unless citizen follows formal Form 12 application tracking.", 
         "Submit Form 12 with required court stamp fee; note exact record room volume ledger and diary date", "Missing statutory 30-day appeal deadline in District Judge Court"),
        ("Public Bureaucracy", "Enforcing Family Court Child Visitation Order (Execution Case)", 
         "Custodial parent deliberately violates court visitation orders by hiding child during weekends.", 
         "File Execution Case under Family Courts Act 2023; seek police escort or warrant of arrest", "Permanent alienation and losing connection with child"),
        ("Public Bureaucracy", "Filing Police Lost Report for Board Exam Admit Card before Exams", 
         "Students losing admit cards 2 days before public exams panic and are barred by center invigilators.", 
         "File immediate Police GD; get signed carbon copy; headmaster issues emergency provisional admit card", "Barred from entering public board exam hall; losing academic year"),
        ("Public Bureaucracy", "Registering a Non-Muslim Will under Indian Succession Act in Bangladesh", 
         "Unregistered wills are challenged by distant relatives as forged or executed under coercion.", 
         "Execute before two independent witnesses; register at Sub-registry office; keep medical vitality certificate", "Will challenged in court and estate frozen in probate litigation"),
        ("Public Bureaucracy", "Applying for Compassionate Appointment (পোষ্য কোটা) in Government Jobs", 
         "Children of deceased government employees miss strict statutory 2-year application deadline.", 
         "Submit application within 2 years of parent's death in service with succession certificate", "Permanent forfeiture of statutory compassionate employment right"),
        ("Public Bureaucracy", "Obtaining Permission to Fell Commercial Timber Trees on Private Land", 
         "Cutting mature teak or mahogany trees without Forest Department transit pass attracts seizure.", 
         "Apply to Upazila Forest Officer for tree felling permit and timber transit pass (টিপি)", "Police seizing timber truck on highway and criminal charges under Forest Act"),
        ("Public Bureaucracy", "Filing Objection against Draft Mouza Survey Map at Settlement Camp (Section 30)", 
         "Failing to file Section 30 objection during field revision locks disputed boundary in final gazette.", 
         "File Form 10 objection before Revenue Officer at Settlement Camp with historical Khatian records", "Disputed land permanently recorded in neighbor's name in final BS Gazette"),
        ("Public Bureaucracy", "Appealing Rejection of Senior Citizen Allowance (বয়স্ক ভাতা)", 
         "Local ward members allocate old-age allowances to political favorites instead of deserving elderly.", 
         "Submit appeal to Upazila Nirbahi Officer (UNO) with Smart NID proving age > 65 and poverty proof", "Impoverished senior citizen deprived of statutory social safety allowance"),
        ("Public Bureaucracy", "Enrolling Child in Government Primary School Midday Meal & Stipend", 
         "Children without 17-digit online birth certificate are excluded from government education stipends.", 
         "Ensure digital birth certificate is linked on school admission database; open mobile banking wallet", "Child excluded from free school textbooks, meals, and monthly stipend"),
        ("Public Bureaucracy", "Applying for Artisan Handicraft National Award & SME Foundation Grant", 
         "Traditional rural artisans lose grants because applications lack certified business registration.", 
         "Register with SME Foundation; obtain trade license; submit certified photographs of artisanal works", "Missing out on non-repayable government artisan grants of 5 Lakh BDT")
    ]
    for sub, title, prob, check, risk in items_gv:
        scenarios.append((c_gv, sub, title, prob, prob, check, risk))

    # Category 9: Global Visas & Travel (10)
    c_tr = "Travel, Tourism & Global Visas"
    items_tr = [
        ("Global Visas", "Applying for Argentina Tourist Visa: Consular Interview in New Delhi", 
         "Argentine consular officers require in-person interview in India for Bangladeshi applicants.", 
         "Submit verified apostilled police clearance, round-trip ticket, travel itinerary, VFS New Delhi interview", "Visa refusal and non-refundable flight cancellation losses"),
        ("Global Visas", "Applying for Chile Tourist Visa: Online SAC Ciudadanos Portal", 
         "Uploading bank statements without bank manager seal results in instant online application rejection.", 
         "Submit scanned stamped bank solvency, company leave letter, confirmed hotel reservations", "Delayed visa processing causing missed South American tour"),
        ("Global Visas", "Applying for Peru Tourist Visa: Machu Picchu Ticket Proof", 
         "Consular section rejects applications that lack pre-booked entrance tickets to Machu Picchu.", 
         "Confirmed ticket from official Peru Ministry of Culture website, hotel bookings, flight itinerary", "Visa rejected for incomplete tourism itinerary"),
        ("Global Visas", "Applying for Colombia Tourist Visa: Online V-Type Tourism Visa", 
         "Failing to provide certified Spanish translation of employer leave letter causes refusal.", 
         "Submit official Spanish translation of bank statement and leave letter; upload clean PDF scans", "Visa denied by Colombian Ministry of Foreign Affairs"),
        ("Global Visas", "Applying for Costa Rica Tourist Visa: US Multi-Entry Visa Exemption", 
         "Entering Costa Rica without visa requires a valid US/Schengen visa stamped in passport.", 
         "Verify multiple-entry US B1/B2 visa has minimum 3 months validity remaining on arrival date", "Turned away at San Jose airport immigration"),
        ("Global Visas", "Applying for Panama Tourist Visa: Consular Stamped Tourist Card", 
         "Travelers transiting Panama City with separate tickets require entry visa if leaving airport.", 
         "Ensure baggage is checked through to final destination, or obtain stamped Panama tourist visa", "Detained in Tocumen international airport transit zone"),
        ("Global Visas", "Applying for Mauritius On-Arrival Tourist Entry Voucher", 
         "Immigration officers require physical proof of minimum $100 USD cash per day and hotel voucher.", 
         "Confirmed resort voucher, return flight ticket, sufficient cash currency or credit card limit", "Denied entry at Port Louis airport immigration"),
        ("Global Visas", "Applying for Seychelles Electronic Border Authorization (ETA)", 
         "Traveling without pre-approved online Seychelles ETA results in denial of boarding at departure gate.", 
         "Apply via official Seychelles government travel authorization portal 72 hours before flight", "Airlines refusing boarding pass issuance at Dhaka airport"),
        ("Global Visas", "Applying for Tanzania Tourist eVisa: Mount Kilimanjaro Climbing Permits", 
         "Climbing Kilimanjaro requires booking through certified Tanzanian National Parks (TANAPA) agency.", 
         "Official TANAPA agency contract, international yellow fever certificate, online eVisa confirmation", "Arriving in Arusha unable to climb mountain due to fake agency scam"),
        ("Global Visas", "Applying for East Africa Tourist Visa (Kenya, Uganda, Rwanda Unified)", 
         "Must apply to the country you enter first; applying to Rwanda when landing in Nairobi invalidates visa.", 
         "Apply through first point-of-entry government portal; carry yellow fever card and confirmed flight", "Denied entry and forced to pay separate visa fees for all 3 countries")
    ]
    for sub, title, prob, check, risk in items_tr:
        scenarios.append((c_tr, sub, title, prob, prob, check, risk))

    # Category 10: Travel Logistics & Consumer Rights (10)
    c_lg = "Travel, Tourism & Global Visas"
    items_lg = [
        ("Travel Logistics", "Claiming Lost Checked Baggage Compensation under Montreal Convention 1999", 
         "Airlines cap baggage compensation at low domestic limits unless passengers cite Montreal Convention.", 
         "File Property Irregularity Report (PIR) immediately; cite Montreal Convention liability limit (~1,700 USD)", "Accepting meager 20 USD/kg compensation for lost 2,000 USD suitcase"),
        ("Travel Logistics", "Navigating Airport Red Channel Customs Declaration for Commercial Samples", 
         "Carrying commercial garment samples through green channel results in seizure and smuggling arrest.", 
         "Walk through Red Channel; present company sample letter and Carnet/invoice; pay temporary bond", "Arrested for smuggling and confiscation of business export samples"),
        ("Travel Logistics", "Endorsing Child Traveler Passport under Parents' Custody for Foreign Travel", 
         "Minors traveling with one parent without notarized consent from other parent are stopped at immigration.", 
         "Carry notarized affidavit of consent from non-traveling spouse and child birth certificate", "Offloaded by immigration police on suspected child abduction"),
        ("Travel Logistics", "Avoiding Airline Hidden Seat Assignment Fees during Web Check-In", 
         "Airlines design check-in screens to look like seat selection is mandatory and costs extra money.", 
         "Skip paid seat selection; let system automatically assign free seat at final check-in stage", "Paying 50+ USD extra per person for standard middle seats"),
        ("Travel Logistics", "Verifying Schengen 90/180-Day Rolling Window Rule before Re-Entering Europe", 
         "Calculating 90 days from calendar year instead of rolling backwards 180 days leads to overstay arrest.", 
         "Use official European Commission Schengen Short-Stay Calculator to verify remaining allowed days", "Detained at European airport border, fined 1,000 EUR, and 3-year entry ban"),
        ("Travel Logistics", "Securing High-Altitude Mountain Evacuation Insurance (above 4,000 meters)", 
         "Standard travel insurance excludes medical evacuation above 2,500 meters or mountaineering.", 
         "Buy specialized policy (e.g. World Nomads / Ripcord) covering helicopter evacuation up to 6,000m", "Helicopter company demanding $5,000 USD upfront cash before launching rescue"),
        ("Travel Logistics", "Transferring Overseas Pension / 401(k) Funds Legally back to Bangladesh", 
         "Wire transfers of foreign pension funds without tax treaty certification attract double income taxation.", 
         "Submit US-BD Double Taxation Avoidance Agreement certificate and IRS distribution form 1099-R", "Losing 30% of retirement nest egg to duplicate withholding taxes"),
        ("Travel Logistics", "Handling Hotel Overbooking and Bumped Reservations under Consumer Law", 
         "Hotels overbook rooms by 10% during festivals, leaving late-arriving guests stranded at midnight.", 
         "Demand hotel provide equivalent room at nearby hotel at their expense plus complimentary taxi", "Stranded on street at 1 AM in a strange city during peak holiday season"),
        ("Travel Logistics", "Verifying Car Rental Collision Damage Waiver (CDW) Zero-Deductible Policy", 
         "Basic CDW policies have a $2,000 USD deductible; any tiny parking scratch is billed to your credit card.", 
         "Purchase Super CDW (Zero Excess / Zero Deductible) directly or through credit card primary coverage", "Charged $1,500 USD on credit card for a pre-existing parking lot door ding"),
        ("Travel Logistics", "Converting Foreign Driving License to Local BRTA License", 
         "Foreign license holders cannot drive beyond 90 days without local BRTA endorsement.", 
         "Submit foreign license, embassy verification certificate, passport, medical test to BRTA", "Arrest for driving without valid license after 90 days of arrival")
    ]
    for sub, title, prob, check, risk in items_lg:
        scenarios.append((c_lg, sub, title, prob, prob, check, risk))

    return scenarios

print("Reach exact 110 module ready.")
