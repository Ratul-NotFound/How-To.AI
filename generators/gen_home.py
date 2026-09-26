"""Home Appliances, Furniture, Tools & Home Living (95 scenarios)"""

def populate_home(add):
    cat = "Home Appliances, Furniture & Tools"
    
    items = [
        # Kitchen & Cooking Appliances
        ("Kitchen Appliances", "Distinguishing Solo Microwave vs Grill vs Convection Oven", 
         "Buyers purchase a solo microwave expecting to bake cakes or roast chicken, which is impossible.", 
         "Check for heating element coils + convection fan for baking/grilling; check internal liter capacity", "Buying an appliance that cannot cook desired recipes"),
        ("Kitchen Appliances", "Selecting Air Fryer: Basket type vs Dual-Zone vs Oven-Style", 
         "Small 3-liter air fryers require cooking food in 4 separate batches for a family of 4.", 
         "Choose minimum 5.5 to 6.5-liter capacity, check non-stick coating safety (PTFE/PFOA free)", "Food cooking unevenly and spending 2 hours making dinner"),
        ("Kitchen Appliances", "Choosing Heavy-Duty Mixer Grinder / Blender (Wattage & Copper Motor)", 
         "Cheap 500W aluminum-wound blenders burn out when grinding hard turmeric or lentils (Daal).", 
         "Insist on 750W-1000W 100% pure copper motor with overload protection switch", "Motor smoking and burning out on the first batch of spices"),
        ("Kitchen Appliances", "Kitchen Chimney / Exhaust Hood: Suction power and Filter type", 
         "Mesh filters clog with mustard oil within a week in South Asian cooking.", 
         "Choose Baffle Filters with minimum 1200 m³/hr suction power and auto-clean oil collector", "Kitchen filled with smoke and grease dripping onto cooking stove"),
        ("Kitchen Appliances", "Induction Cooktop vs Infrared Cooktop compatibility", 
         "Induction cooktops only work with magnetic stainless steel/cast iron; aluminum pans fail.", 
         "Use magnet test on cookware base; consider Infrared cooktop for universal pan compatibility", "Purchased pots and pans failing to heat up"),
        ("Kitchen Appliances", "Electric Pressure Cooker (Instant Pot) safety mechanisms", 
         "Forcing lid open before pressure pin drops can cause explosive scalding soup burns.", 
         "Verify 10+ safety locks, automatic pressure release valve, stainless steel inner pot", "Severe third-degree boiling liquid burns"),
        ("Kitchen Appliances", "Water Purifier selection: RO vs UV vs Gravity Filters", 
         "Using an RO purifier on already low-TDS water strips all essential calcium and magnesium.", 
         "Test tap water TDS (Total Dissolved Solids) first: RO if TDS > 300 ppm; UV/UF if TDS < 200 ppm", "Drinking demineralized acidic water or drinking bacteria"),
        ("Kitchen Appliances", "Calibrating and testing Home Water TDS with digital meter", 
         "Unscrupulous filter sales reps use electrolysis scam rods to turn clean water brown.", 
         "Use calibrated digital TDS meter; understand conductivity vs rust precipitate scams", "Paying 30,000 BDT for unneeded filter replacements"),

        # Cooling, Heating & Laundry
        ("Climate & Laundry", "Calculating AC Room Sizing (BTU/Tonnage) for top-floor sun exposure", 
         "Undersized 1-ton AC on a top-floor flat under direct sun runs continuously without cooling.", 
         "Calculate room volume, add 0.5 ton for top floor or west-facing glass windows", "Massive electricity bills and room staying hot at 32°C"),
        ("Climate & Laundry", "Verifying 100% Copper Condenser Tube vs Aluminum in AC", 
         "Aluminum condenser coils corrode and leak refrigerant within 2-3 years, impossible to braze-repair.", 
         "Demand written confirmation of 100% inner-grooved copper tube in outdoor and indoor units", "Gas leaking every summer; entire outdoor unit scrap"),
        ("Climate & Laundry", "Inverter vs Non-Inverter AC energy savings reality", 
         "Inverter AC only saves electricity if room is properly sealed without draft gaps under doors.", 
         "Ensure foam door seals, close room vents, run AC at 25°C-26°C with ceiling fan on low", "Zero power savings despite paying 40% premium for inverter"),
        ("Climate & Laundry", "Selecting Refrigerator: Frost vs Non-Frost and Compressor Warranty", 
         "Direct-cool frost refrigerators require monthly manual scraping of ice buildup.", 
         "Choose Non-Frost inverter with 10-12 year compressor warranty, check vegetable crisper humidity seal", "Frozen solid food, spoiled vegetables, high energy draw"),
        ("Climate & Laundry", "Front Load vs Top Load Washing Machine cleaning performance", 
         "Top load machines consume 3x more water and tangle/tear delicate cotton clothes.", 
         "Front load provides gentler tumble wash, uses 50% less water, and has internal water heater", "Clothes wearing out rapidly and persistent stains"),
        ("Climate & Laundry", "Installing Washing Machine Anti-Vibration Pads and Transit Bolts", 
         "Failing to remove the 4 yellow shipping transit bolts causes machine to violently jump across floor.", 
         "Remove all rear transit bolts before first run; level front rubber feet with bubble level", "Internal drum shattering and destroying machine on spin cycle"),
        ("Climate & Laundry", "Selecting BLDC Ceiling Fan for 60% Electricity Savings", 
         "Traditional induction fans consume 75W-85W; BLDC fans consume only 28W-32W at full speed.", 
         "Look for RF remote control, pure copper winding, star energy rating sticker", "Paying double electricity bills during peak summer months"),
        ("Climate & Laundry", "Water Heater / Geyser safety: Pressure Relief Valve and ELCB", 
         "Blocked pressure valves on geysers have caused massive fatal bathroom wall explosions.", 
         "Ensure 2-in-1 safety valve is installed, test Earth Leakage Circuit Breaker (ELCB) monthly", "Geyser tank exploding like a bomb or electrocution in shower"),

        # Furniture, Wood & Interior Materials
        ("Furniture & Wood", "Identifying Genuine Segun (Teak) wood vs Fake Stained Mehgani / Gorjon", 
         "Carpenters apply dark wood stain on cheap porous Mehgani and sell it as premium Chittagong Teak.", 
         "Check distinctive oily grain feel, natural golden brown luster, scratch test for teak aroma", "Paying 3x the price for inferior wood that warps"),
        ("Furniture & Wood", "Processed Board Differences: MDF vs Particle Board vs Plywood vs HDF", 
         "Particle board (Melamine board) swells and disintegrates into wet cardboard when exposed to moisture.", 
         "Insist on Marine/Boiling Water Resistant (BWR) Plywood for kitchen and bathroom cabinets", "Kitchen cabinets crumbling and sagging within 1 year"),
        ("Furniture & Wood", "Checking Wood Moisture Seasoning before making custom furniture", 
         "Unseasoned green timber shrinks and twists severely as it dries, cracking dining tables.", 
         "Use digital pin wood moisture meter (moisture content must be below 10-12%)", "Table tops cracking down the center and drawers jamming"),
        ("Furniture & Wood", "Termite and Wood-Borer Beetles chemical treatment", 
         "Applying surface varnish does not kill borer larvae buried deep inside timber core.", 
         "Pressure impregnation or deep kerosene-chlorpyrifos injection into drill holes before polishing", "Fine wood dust falling from furniture; hollow ruined core"),
        ("Furniture & Wood", "Selecting Sofa Foam Density (Rebonded vs High Resilience HR Foam)", 
         "Low-density 28-density foam sags permanently into an uncomfortable hollow within 6 months.", 
         "Demand minimum 32 to 40 Density High Resilience (HR) foam with pocket spring base", "Sofa looking collapsed and causing chronic lower back pain"),
        ("Furniture & Wood", "Choosing Mattress: Orthopedic Bonnell Spring vs Pocket Spring vs Memory Foam", 
         "Interconnected Bonnell springs transfer motion across entire bed whenever partner moves.", 
         "Choose Individual Pocket Springs for zero motion transfer, medium-firm for spinal alignment", "Restless sleep and waking up with debilitating back stiffness"),
        ("Furniture & Wood", "Testing dining chair joint construction (Mortise & Tenon vs Cheap Screws)", 
         "Chairs assembled with simple drywall screws become wobbly and collapse under weight.", 
         "Inspect underside for interlocking mortise-and-tenon joints with glued corner triangular gussets", "Chair legs snapping during a family dinner party"),
        ("Furniture & Wood", "Curtain Fabric selection: 100% Blackout vs Dim-out vs Sheer", 
         "Cheap coated blackout fabrics peel off in hot washing and stick together in summer heat.", 
         "Look for triple-weave fabric blackout without toxic chemical coating; check light test", "Bedroom flooded with morning light at 5:30 AM"),

        # Power Tools, Hardware & DIY
        ("Tools & Hardware", "Cordless Drill vs Impact Driver: Knowing which to use", 
         "Using a regular drill to drive long wood screws strips screw heads and burns drill motor.", 
         "Use Drill for smooth round holes; use Impact Driver with rotational concussive force for screws", "Stripped screws stuck halfway in wall and damaged drill"),
        ("Tools & Hardware", "Brushless vs Brushed electric motor tools longevity", 
         "Brushed motors wear carbon brushes every 100 hours, spark, and overheat quickly.", 
         "Choose Brushless motors for 30% longer runtime, zero maintenance, and cooler operation", "Tool burning out in the middle of home renovation"),
        ("Tools & Hardware", "Selecting wall anchors: Rawlplug vs Hollow Wall Butterfly vs Anchor Bolts", 
         "Using plastic plugs in hollow gypsum or drywall causes heavy mirrors and shelves to crash.", 
         "Use spring toggle bolts for drywall; metal expansion sleeve anchor bolts for solid concrete", "Heavy TV or shelf crashing onto child or floor"),
        ("Tools & Hardware", "Angle Grinder Safety: Preventing fatal kickback and wheel shatter", 
         "Using a cracked or unrated abrasive disc causes disc explosion at 11,000 RPM like shrapnel.", 
         "Never remove safety wheel guard, wear polycarbonate face shield, check disc RPM rating", "Fatal shrapnel injuries to face and throat"),
        ("Tools & Hardware", "Diagnosing house electrical earth leakage with multimeter", 
         "Missing grounding wire gives mild electric shocks on refrigerator handles and PC cabinets.", 
         "Measure AC voltage between Neutral and Earth (should be under 2V; if > 10V, earth is floating)", "Electrocution hazard during wet monsoon season"),
        ("Tools & Hardware", "Unclogging severe bathroom drain pipes without melting PVC with acid", 
         "Pouring concentrated sulfuric acid into drain melts PVC pipe joints, leaking into lower apartment.", 
         "Use mechanical plumbing drain auger snake or caustic soda with boiling water, not acid", "Pipes melting inside slab, costing 50,000+ BDT in ceiling repairs")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Home module ready.")
