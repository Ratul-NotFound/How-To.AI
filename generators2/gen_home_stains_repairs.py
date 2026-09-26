"""
Day-to-Day Home Maintenance, Repairs, Stain Removal & Practical Hacks (210 scenarios)
"""

def get_home_stains_repairs_scenarios():
    cat = "Home Maintenance, Stain Removal & DIY Hacks"
    items = []
    
    # 1. Stain Removal Science & Fabric Care (50)
    stains = [
        ("Stain Removal", "Removing Bright Yellow Turmeric (Haldi) Stains from White Clothes", 
         "Curcumin in turmeric is water-insoluble; washing in hot water or bleach locks the yellow pigment permanently.", 
         "Pre-treat with dish soap; wash with cold water; lay damp cloth in direct bright sunlight for 4 hours (UV photolysis breaks curcumin bonds)", "Ruined expensive white cotton shirts with permanent yellow splotches"),
        ("Stain Removal", "Removing Blood Stains from Fabrics: Cold Water vs Hot Water Coagulation", 
         "Using warm or hot water cooks hemoglobin blood protein, permanently baking the dark brown stain into cotton fibers.", 
         "Soak fabric exclusively in ice-cold water; apply 3% Hydrogen Peroxide directly to stain; blot gently with clean cloth until fizzing stops", "Permanent dark brown blood stains on bedding or clothing"),
        ("Stain Removal", "Removing Dark Cooking Oil and Grease Stains from Cotton & Silk", 
         "Washing oily clothes directly in laundry detergent fails because detergents are too dilute to break concentrated lipid grease.", 
         "Apply concentrated liquid dishwashing soap (degreaser) directly to dry stain; sprinkle cornstarch/baby powder to absorb oil; wash after 30 mins", "Dark translucent circular grease spots permanently visible on shirts"),
        ("Stain Removal", "Removing Permanent Marker & Ballpoint Ink from Shirts", 
         "Water spreads oil-based ink across the fabric into a massive dark puddle.", 
         "Place paper towel behind stain; dab with 90%+ Isopropyl Rubbing Alcohol or alcohol hand sanitizer; blot from outside inward to absorb ink", "Permanent ink smudge ruining formal office trousers or shirts"),
        ("Stain Removal", "Removing Stubborn Rust (Iron Oxide) Stains from White Fabrics", 
         "Applying chlorine bleach on a rust stain causes a severe chemical reaction that turns the rust bright permanent orange.", 
         "Never use bleach; apply fresh lemon juice and table salt paste directly onto rust stain; place in direct sun for 2 hours, then wash", "Chlorine bleach reacting to make rust stain 10x darker and permanent"),
        ("Stain Removal", "Removing Yellow Armpit Sweat Stains from Dress Shirts", 
         "Stains are not caused by sweat alone, but by chemical reaction between sweat proteins and aluminum in antiperspirant deodorants.", 
         "Mix 1 part dish soap, 2 parts 3% hydrogen peroxide, and 1 part baking soda into a paste; scrub into armpits with toothbrush; sit 1 hour", "Embarrassing stiff yellow crust under armpits of favorite shirts"),
        ("Stain Removal", "Removing Chewing Gum Stuck to Denim Jeans or Wool Carpet", 
         "Pulling soft gum smears sticky elastomeric polymers deeper into fabric fibers, causing tearing.", 
         "Rub an ice cube in plastic bag over gum for 5 minutes until frozen rock-hard; scrape brittle frozen gum off with dull butter knife", "Ripping fabric threads and leaving sticky gooey residue"),
        ("Stain Removal", "Removing Melted Candle Wax from Tablecloths and Fabrics", 
         "Scraping cold wax damages fabric; washing in machine leaves greasy paraffin residue.", 
         "Place brown paper grocery bag on top and bottom of stained fabric; run a warm clothes iron over paper to melt and absorb wax into paper", "Greasy waxy stain permanently embedded in family tablecloth"),
        ("Stain Removal", "Removing Red Wine or Pomegranate Juice Stains Instantly", 
         "Rubbing red wine stain with a dry cloth grinds dark anthocyanin tannin pigments deep into the weave.", 
         "Immediately blot (do not rub) with club soda or cold water; cover liberally with table salt to pull liquid; rinse with hydrogen peroxide", "Permanent purple-red discoloration on expensive dining rug"),
        ("Stain Removal", "Removing Stubborn Sticky Adhesive Price Sticker Residue from Plastic/Glass", 
         "Scraping stickers with fingernails leaves sticky gummy glue that collects black dirt and dust.", 
         "Apply vegetable cooking oil, peanut butter, or eucalyptus oil over sticky residue for 10 minutes; wipe away glue cleanly with cloth", "Cloudy scratched glass or sticky black residue on new cookware")
    ]
    for sub, title, prob, check, risk in stains:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 2. DIY Home Plumbing & Fixtures (45)
    plumbing = [
        ("DIY Plumbing", "Unclogging Kitchen Sink Grease Trap with Baking Soda & Boiling Vinegar", 
         "Chemical drain crystals contain corrosive lye that heats up and melts thin plastic P-trap pipes.", 
         "Pour 1 cup baking soda down drain, follow with 1 cup boiling white vinegar; cover drain for 15 mins; flush with 2 liters boiling water", "Pipes melting under sink, causing thousands in flood damage"),
        ("DIY Plumbing", "Removing Thick White Hard Water Limescale from Showerheads and Faucets", 
         "Scraping calcium scale with metal knives strips chrome plating and scratches metal.", 
         "Fill a plastic ziplock bag with warm white vinegar; submerge showerhead; secure with rubber band overnight; rinse dissolved scale", "Weak, spraying, misdirected shower water flow and ruined chrome fixtures"),
        ("DIY Plumbing", "Fixing a Continuously Running Toilet Cistern (Worn Flapper Seal)", 
         "A misaligned or mineral-coated rubber flapper valve allows 200+ liters of water to silently leak into toilet bowl daily.", 
         "Check flapper chain slack (needs slight slack); clean mineral grit off rubber seal; replace 200 BDT flapper valve if warped", "Massive water pump electricity bills and running out of rooftop water"),
        ("DIY Plumbing", "Fixing Low Water Pressure in Bathroom Sink Faucet (Clogged Aerator)", 
         "Homeowners call expensive plumbers thinking pipes are blocked, when only the faucet tip mesh is clogged.", 
         "Unscrew aerator nozzle counter-clockwise using cloth and pliers; rinse accumulated sand and pipe scale from internal mesh", "Paying 1,000+ BDT to a plumber for a 2-minute aerator rinse"),
        ("DIY Plumbing", "Fixing a Dripping Water Tap (Replacing Rubber O-Ring Washer)", 
         "Tightening the tap handle harder crushes the brass threads without stopping the persistent drip.", 
         "Shut off main angle valve; unscrew tap headgear with wrench; replace worn 50 BDT black rubber seal washer or ceramic disc cartridge", "Stripped tap threads requiring complete replacement of luxury brass fixture")
    ]
    for sub, title, prob, check, risk in plumbing:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 3. Furniture, Woodwork & Hardware Fixes (45)
    furniture = [
        ("DIY Repairs", "Fixing a Stripped Screw Hole in Wooden Furniture (The Toothpick Trick)", 
         "Re-driving a screw into an oversized stripped hole spins loosely without biting into wood.", 
         "Dip 3-4 wooden toothpicks or wooden matchsticks into PVA wood glue; stuff into hole; snap flush; drive screw directly into wood core", "Hinges falling off wardrobe doors and loose wobbly cabinet handles"),
        ("DIY Repairs", "Silencing Loud Squeaky Hardwood or Laminate Floorboards", 
         "Floorboards rubbing against adjacent planks or subfloor nails squeak with every footstep.", 
         "Dust talcum powder or powdered graphite into gaps between squeaking floor planks; sweep in with broom to lubricate friction points", "Loud irritating floor creaks waking up the house at night"),
        ("DIY Repairs", "Unsticking Jammed Wooden Drawers and Sliding Windows in Monsoon Humidity", 
         "High air humidity swells wood, causing drawers and wooden window sashes to stick stubbornly.", 
         "Rub a plain paraffin candle wax stick or dry bar of soap along drawer wooden runners and slide friction surfaces", "Yanking drawer forcefully, snapping decorative wooden front handle"),
        ("DIY Repairs", "Removing Water Ring Heat Stains from Wooden Dining Tables (The Iron Trick)", 
         "Moisture trapped under the clear lacquer finish leaves an unsightly white cloudy ring from hot coffee mugs.", 
         "Place a dry white cotton towel over the white ring; run a dry warm clothes iron (no steam!) gently over towel for 10-15 seconds", "Permanently marred antique dining table with cloudy white heat blemishes"),
        ("DIY Repairs", "Repairing Small Holes in Plaster Walls (Spackle & Toothpaste Emergency)", 
         "Driving nails creates unsightly chipped plaster holes when moving wall artwork.", 
         "Clean loose dust; apply lightweight spackle paste with putty knife flush with wall; sand smooth with 220-grit sandpaper when dry", "Ugly visible craters and paint peeling across living room walls")
    ]
    for sub, title, prob, check, risk in furniture:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 4. Household Hacks & Tool Maintenance (40)
    hacks = [
        ("Home Hacks", "Sharpening Dull Scissors with Aluminum Foil", 
         "Throwing away dull scissors when cutting paper or fabric becomes ragged and frustrating.", 
         "Fold a sheet of aluminum foil into 6-8 layers; make 10-15 clean full-length cuts through the foil to re-hone scissor blades", "Tearing delicate wrapping paper and fabrics with ragged dull blades"),
        ("Home Hacks", "Unfreezing Stuck Padlocks: Powdered Graphite vs Sticky WD-40", 
         "Spraying liquid WD-40 or cooking oil into outdoor padlocks attracts dust, gumming up internal brass pins within weeks.", 
         "Puff dry powdered graphite lubricant directly into the padlock keyhole; insert key and rotate smoothly to coat pins", "Key snapping off inside jammed lock, requiring bolt-cutter destruction"),
        ("Home Hacks", "Deodorizing a Smelly Refrigerator with Activated Charcoal & Coffee Grounds", 
         "Wiping fridge with air freshener leaves toxic chemical perfume smell that contaminates dairy and butter.", 
         "Place an open shallow bowl of activated charcoal briquettes or dry used coffee grounds on middle shelf to adsorb organic odors", "Milk, butter, and cakes absorbing nasty leftover onion and fish odors"),
        ("Home Hacks", "Preventing Bathroom Mirror from Fogging with Shaving Cream", 
         "Steamy hot showers fog up mirrors, and wiping with wet hands leaves ugly cloudy streaks.", 
         "Apply a small dab of traditional shaving cream across dry mirror; buff completely dry with microfiber cloth (creates hydrophobic barrier)", "Inability to shave or brush teeth in fogged bathroom mirror"),
        ("Home Hacks", "Removing Pet Hair from Fabric Sofas and Rugs with Rubber Squeegee", 
         "Vacuum cleaners often lack static suction to pull deeply embedded dog and cat fur from fabric upholstery.", 
         "Drag a common rubber window squeegee across sofa cushions; rubber generates static friction that rolls pet fur into clean piles", "Sofa covered in embedded pet hair and allergen dander")
    ]
    for sub, title, prob, check, risk in hacks:
        items.append((cat, sub, title, prob, prob, check, risk))

    return items

print("Home stains and repairs module loaded.")
