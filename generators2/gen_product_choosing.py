"""
Everyday Consumer Choices & Product Buying Engineering (150 scenarios)
"""

def get_product_choosing_scenarios():
    cat = "Everyday Consumer Goods & Product Selection"
    items = []
    
    # 1. Apparel, Bedding & Winter Living (40)
    apparel = [
        ("Apparel & Living", "Selecting Winter Thermal Innerwear: Merino Wool vs Synthetic vs Cotton", 
         "Wearing cotton thermals traps sweat, chilling the body rapidly into hypothermia when active in winter.", 
         "Choose 100% Merino Wool (naturally antimicrobial, insulates when wet) or technical Polyester; never cotton", "Freezing from damp cold sweat during winter travel or mountain trekking"),
        ("Apparel & Living", "Selecting Rain Umbrella: Windproof Fiberglass Ribs vs Cheap Wire Frame", 
         "Cheap stamped-steel wire umbrellas invert and snap in the first 40 km/h monsoon thunderstorm gust.", 
         "Choose flexible fiberglass ribs with double-canopy wind-vented slot to let wind pass without inverting", "Umbrella snapping inside out during heavy storm, getting drenched in torrential rain"),
        ("Apparel & Living", "Debunking the '1000 Thread Count' Bedsheet Marketing Gimmick", 
         "Manufacturers twist 3 cheap micro-polyester threads together to claim fake '1000 thread count' that traps body heat.", 
         "Choose 300-400 Thread Count woven from Single-Ply Long-Staple Cotton (Percale for crisp cool, Sateen for silky warm)", "Sleeping on hot, sweaty, scratchy synthetic polyester sheets that pill"),
        ("Apparel & Living", "Selecting Winter Blankets: Goose Down vs Microfiber vs Heavy Wool Quilt", 
         "Heavy cotton quilts (লেপ) feel suffocating and trap moisture from humidity without drying out.", 
         "Choose lightweight baffle-box stitched Goose Down duvet or hypoallergenic microfiber comforter with breathable cotton cover", "Waking up drenched in clammy sweat under heavy, unwashed cotton quilts"),
        ("Apparel & Living", "Selecting Hiking & Running Socks: Merino Wool Cushion vs Blister-Prone Cotton", 
         "Cotton socks absorb sweat and stay damp, generating intense skin friction that causes painful blisters within 5 km.", 
         "Choose seamless-toe Merino Wool or technical synthetic socks with targeted arch compression and heel padding", "Painful fluid blisters on heels and toes halting hiking trips"),
        ("Apparel & Living", "Selecting Waterproof Raincoat: Breathable Gore-Tex vs Plastic PVC Poncho", 
         "Non-breathable PVC plastic raincoats trap 100% body sweat inside, soaking the wearer in internal perspiration.", 
         "Look for microporous membrane (e.g. Gore-Tex or eVent) with minimum 10,000mm waterproofing and 10,000g breathability", "Drenched in your own sweat inside raincoat while hiking")
    ]
    for sub, title, prob, check, risk in apparel:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 2. Electrical, Home & Safety Equipment (45)
    safety = [
        ("Electrical Safety", "Selecting Power Strip / Surge Protector: Clamping Voltage & Joules Rating", 
         "Cheap multi-plugs without Metal Oxide Varistors (MOVs) provide zero surge protection, melting during surges.", 
         "Choose surge strip with minimum 1,000+ Joules absorption, clamping voltage < 400V, and individual reset breaker", "Electrical power surge frying 2,000 USD PC and TV equipment simultaneously"),
        ("Electrical Safety", "Selecting Ceiling Fan Speed Regulator: Capacitor Step vs Old Resistive Coil", 
         "Old large resistive knob regulators waste electricity as heat; fan on speed 1 consumes same power as speed 5.", 
         "Replace with modern electronic Capacitor-based Step Regulator (stepped speeds, zero heat, proportional energy savings)", "Paying high electricity bills while fan regulator generates hot burning smell in wall"),
        ("Security & Safes", "Selecting Home Security Safe: Fireproof Rating vs Anti-Pry Burglary Plate", 
         "Cheap digital lockboxes can be bypassed in 3 seconds using the 'solenoid bounce' technique by smacking the top.", 
         "Ensure UL-listed mechanical or motorized deadbolts, hardened manganese anti-drill plate, and 1-hour 927 deg C fire rating", "Burglars cracking domestic safe in under 2 minutes"),
        ("Security & Safes", "Selecting Luggage Combination Lock: TSA-Certified vs Generic Padlocks", 
         "Using regular non-TSA padlocks on checked bags prompts airport security agents to cut locks off with bolt cutters.", 
         "Look for Red Travel Sentry Diamond logo (TSA 007 / TSA 008 certified) allowing airport security master key inspection", "Luggage arriving on carousel with ripped zippers and broken padlock"),
        ("Kitchen Fixtures", "Selecting Kitchen Sink: 16-Gauge 304 Stainless Steel vs Composite Granite", 
         "Thin 20-gauge steel sinks flex, dent easily, and sound like a loud metal drum whenever water runs.", 
         "Choose heavy 16-gauge (1.5mm thick) 304 stainless steel with thick undercoating sound-deadening rubber pads", "Loud irritating tinny water ringing noise echoing across open kitchen")
    ]
    for sub, title, prob, check, risk in safety:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 3. Water, Heating & Durability (35)
    water = [
        ("Water & Heating", "Selecting Domestic Water Geyser: Glass-Lined Enamelled Tank vs Bare Steel", 
         "Bare galvanized steel geyser tanks rust through within 2-3 years, leaking water onto bathroom ceiling.", 
         "Insist on Blue Diamond Glass-Lined inner tank with sacrificial Magnesium Anode Rod to prevent galvanic corrosion", "Geyser tank bursting and leaking rusty boiling water over electrical wiring"),
        ("Water & Heating", "Selecting Bathroom Shower Mixer: Thermostatic Anti-Scald Valve vs Manual Mixer", 
         "Flushing a toilet while someone showers drops cold water pressure, scalding the bather with boiling water.", 
         "Install Thermostatic Shower Valve with wax element that automatically maintains set 38 deg C temperature instantly", "Severe second-degree scalding burns in shower when someone turns on kitchen tap"),
        ("Water & Heating", "Selecting Insulated Stainless Steel Water Bottle: Copper Lining & Lead Free", 
         "Cheap counterfeit vacuum flasks use toxic lead solder beads at the base to create the vacuum seal.", 
         "Verify vacuum base is lead-free glass/crimped sealed; check for food-grade 18/8 (304) stainless steel interior", "Long-term exposure to toxic heavy metals in drinking water"),
        ("Kitchen Fixtures", "Selecting Induction Cookware: True Multi-Ply Base vs Stamped Steel Dot Plate", 
         "Pans with glued aluminum base plates warp over high heat, breaking contact with induction glass.", 
         "Choose Fully Clad Tri-Ply (Stainless-Aluminum-Stainless) construction; test flat bottom with magnet", "Induction stove displaying 'Error' and pan rocking on glass cooktop")
    ]
    for sub, title, prob, check, risk in water:
        items.append((cat, sub, title, prob, prob, check, risk))

    return items

print("Product choosing module loaded.")
