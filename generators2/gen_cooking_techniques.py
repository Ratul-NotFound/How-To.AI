"""
Kitchen Chemistry, Culinary Troubleshooting & Cooking Techniques (170 scenarios)
"""

def get_cooking_techniques_scenarios():
    cat = "Cooking Techniques & Culinary Troubleshooting"
    items = []
    
    # 1. Meat Tenderizing & Protein Chemistry (40)
    proteins = [
        ("Meat Chemistry", "Tenderizing Tough Beef / Mutton: Raw Papaya Paste (Papain Enzyme)", 
         "Adding too much papaya or leaving it overnight dissolves muscle fibers into an unpalatable mushy paste.", 
         "Use 1 tablespoon green raw papaya skin paste per kg meat; marinate for exactly 2-4 hours; rinse or cook immediately", "Meat texture turning into baby food mush with zero bite"),
        ("Meat Chemistry", "Braising Tough Cuts (Beef Shank / Brisket): Collagen to Gelatin Conversion", 
         "Boiling tough meat rapidly over high flame tightens muscle fibers into dry, chewy shoe leather.", 
         "Cook at low simmer (85-90 deg C) for 2.5 to 3.5 hours to slowly melt tough connective collagen into succulent gelatin", "Dry, tough, jaw-exhausting chewy beef chunks"),
        ("Meat Chemistry", "Slicing Steak & Cooked Meat: Against the Grain (Perpendicular to Fibers)", 
         "Cutting meat parallel to grain leaves long muscle fibers that are nearly impossible to chew through.", 
         "Identify the parallel direction of muscle fiber striations; slice strictly at a 90-degree angle across the fibers", "Tender cut of meat feeling tough and stringy in mouth simply from improper slicing"),
        ("Meat Chemistry", "Resting Cooked Meat after High-Heat Searing (5 to 10 Minute Rule)", 
         "Cutting hot meat immediately after searing causes internal cellular juice pressure to bleed out onto cutting board.", 
         "Rest meat on a warm cutting board for 5-10 minutes under loose foil tent; allows juices to redistribute into muscle fibers", "Steak or roasted meat ending up dry, pale, and swimming in pool of lost juice"),
        ("Meat Chemistry", "Dry Brining Chicken & Beef: Salt Osmosis and Moisture Retention", 
         "Wet brining waterlogs chicken skin, preventing it from ever getting crispy during roasting.", 
         "Salt meat generously 12-24 hours ahead; store uncovered on a wire rack in the fridge to dry out exterior skin", "Soggy rubbery chicken skin and bland unsalted internal meat"),
        ("Meat Chemistry", "Velveting Chicken for Asian Stir-Fries: Baking Soda and Cornstarch", 
         "Stir-frying lean chicken breast over high heat squeezes out water, turning meat dry and rubbery within 2 minutes.", 
         "Toss sliced chicken in 1/2 tsp baking soda, cornstarch, and egg white for 20 mins; blanch briefly in hot oil before stir-frying", "Tough, dry, stringy chicken pieces in homemade fried rice and noodles"),
        ("Meat Chemistry", "Preventing Fish Fillets from Sticking and Tearing in Pan", 
         "Placing wet cold fish fillets into a lukewarm pan bonds skin proteins to metal, tearing flesh to shreds.", 
         "Pat fish skin completely dry with paper towels; preheat stainless steel/cast iron pan until oil shimmers; do not touch for 3 mins", "Fish skin glued to pan, tearing fillet in half when attempting to flip"),
        ("Meat Chemistry", "Cooking Liver (কলিজা ভুনা) without Hardening and Bitter Aftertaste", 
         "Overcooking liver beyond 5 minutes expels all moisture, turning liver into hard chalky pellets.", 
         "Boil liver pieces with a pinch of turmeric for 3 minutes to remove scum; simmer in spiced gravy for only 5-7 minutes", "Hard, crumbly, rubbery liver chunks that children refuse to eat")
    ]
    for sub, title, prob, check, risk in proteins:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 2. Rescuing Ruined Dishes & Balances (45)
    rescues = [
        ("Culinary Rescue", "Fixing an Over-Salted Curry or Broth", 
         "Dumping gallons of water to fix salty curry dilutes all rich spices, leaving a watery bland mess.", 
         "Add raw peeled potato wedges (simmer 10 mins to absorb salt), or whisk in 2 tablespoons heavy cream, yogurt, or kneaded dough balls", "Ruining an entire feast for 10 dinner guests"),
        ("Culinary Rescue", "Fixing Curdled Yogurt in Korma / Rezala Gravy (Separated Oil & White Specks)", 
         "Dumping cold yogurt directly into a boiling pot causes milk proteins to instantly seize into unsightly curdled white specks.", 
         "Whisk 1 tsp cornstarch or besan into room-temperature yogurt; remove pot from heat; slowly whisk yogurt into warm gravy", "Curry looking broken, curdled, and unappetizing like cottage cheese soup"),
        ("Culinary Rescue", "Neutralizing an Overly Spicy (Chili Hot) Dish", 
         "Adding sugar alone creates an unpleasantly sweet curry without neutralizing capsaicin chemical heat.", 
         "Capsaicin is fat-soluble and acid-sensitive: add dairy (cream/milk/ghee), coconut milk, or a generous squeeze of fresh lemon juice", "Guests sweating, burning mouths, and unable to eat dinner"),
        ("Culinary Rescue", "Fixing a Split / Broken Mayonnaise or Hollandaise Sauce", 
         "Adding oil too quickly overwhelms egg yolk lecithin, causing emulsion to break into greasy yellow oil slick.", 
         "Place 1 fresh egg yolk + 1 tsp warm water in a clean bowl; slowly whisk the broken split sauce into the new yolk drop by drop", "Throwing away 2 cups of expensive olive oil and eggs"),
        ("Culinary Rescue", "Saving Burnt Rice at the Bottom of the Pot (Removing Burnt Smell)", 
         "Scraping the bottom transfers bitter burnt charcoal flavor and black flakes into the entire fluffy rice pot.", 
         "Do not scrape bottom; transfer clean top rice to new pot; place a slice of white bread or half an onion on top for 10 mins to absorb smoke", "Entire pot of Biryani or Polao smelling like an ash fire"),
        ("Culinary Rescue", "Rescuing a Watery, Thin Dal or Soup", 
         "Boiling watery dal for 30 minutes overcooks lentils, turning broth dark and muddy.", 
         "Scoop out 1 cup of cooked lentils; blend into smooth paste with fork/blender; stir back into pot, or add a pinch of roasted gram flour (besan)", "Watery, separated dal with lentils sinking to bottom"),
        ("Culinary Rescue", "Fixing Overly Sweet Curry from Excess Fried Onions (Beresta)", 
         "Adding extra salt to fix sweet korma creates a jarring clash of sweet and salty flavors.", 
         "Add a tart acidic agent: fresh lime juice, unsweetened plain curd, or sour tomato paste to cut through excess sugar", "Korma tasting like cloying dessert pudding instead of savory royal banquet"),
        ("Culinary Rescue", "Removing Bitter Taste from Burnt Garlic or Burnt Spices", 
         "Once garlic or ground turmeric burns black, chemical acrolein compounds cannot be masked.", 
         "Burnt ground spices cannot be saved; discard the base aromatics immediately and restart with fresh oil and garlic", "Ruining an entire meat dish with acrid, burnt, bitter undertones")
    ]
    for sub, title, prob, check, risk in rescues:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 3. Baking Chemistry & Dough Physics (40)
    baking = [
        ("Baking & Dough", "Diagnosing Why Yeast Dough Won't Rise (Dead Yeast vs Temperature)", 
         "Dissolving active dry yeast in boiling hot water (>45 deg C) instantly kills the living yeast cells.", 
         "Test water temperature on inside of wrist (warm, 38-40 deg C); proof yeast with pinch of sugar for 10 mins to confirm frothy foam", "Rock-hard, dense, unleavened bread bricks"),
        ("Baking & Dough", "Handling Sticky High-Hydration Pizza/Bread Dough: The Autolyse Technique", 
         "Dumping cups of dry flour onto sticky dough throws off hydration baker's percentages, making bread dry and tough.", 
         "Mix flour and water; rest for 30 mins (Autolyse) to develop gluten naturally; handle dough with wet hands instead of dry flour", "Dry, dense, floury bread crust with zero airy crumb pockets"),
        ("Baking & Dough", "Proofing Yeast Dough in Cold Winter Weather: The Oven Proofer Hack", 
         "Placing dough on cold granite countertops in winter stalls yeast fermentation, taking 5 hours to rise.", 
         "Place dough bowl in cold turned-off oven with a pot of steaming boiling water on bottom rack; close door to create warm steam chamber", "Under-proofed heavy dough that collapses during baking"),
        ("Baking & Dough", "Preventing Dense, Gummy Cakes: Baking Powder vs Baking Soda (Double-Acting)", 
         "Using old expired baking powder or substituting baking soda without an acid produces flat, metallic-tasting cakes.", 
         "Test baking powder in warm water (must fizz vigorously); understand baking soda requires acid (yogurt/lemon/cocoa) to release CO2", "Flat, sunken, rubbery cake with green-tinted metallic crumb"),
        ("Baking & Dough", "Creaming Butter and Sugar: Incorporating Microscopic Air Pockets", 
         "Melted warm butter cannot hold microscopic air bubbles, resulting in flat, greasy, dense cookies and cakes.", 
         "Use room temperature butter (18-20 deg C, indents with finger without greasy sheen); beat with sugar for 4-5 mins until pale and fluffy", "Heavy greasy cakes that fail to rise"),
        ("Baking & Dough", "Preventing Pie Crust and Paratha Dough Shrinking (Gluten Relaxation)", 
         "Rolling cold dough immediately after heavy kneading causes elastic gluten fibers to snap back and shrink in pan.", 
         "Wrap kneaded dough in plastic wrap; rest in refrigerator for minimum 30-45 minutes to let gluten chains relax before rolling", "Parathas shrinking into thick rubber disks on tawa")
    ]
    for sub, title, prob, check, risk in baking:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 4. Frying, Rice & Aromatic Mastery (45)
    frying = [
        ("Cooking Fundamentals", "The Wooden Chopstick Test for Deep Frying Oil Temperature", 
         "Dropping food into cold oil absorbs fat like a sponge; dropping into smoking oil burns outside while inside stays raw.", 
         "Dip tip of wooden chopstick/spoon into oil: steady stream of fine energetic bubbles indicates ideal frying temperature (170-180 deg C)", "Soggy, grease-logged samosas or burnt black raw-centered cutlets"),
        ("Cooking Fundamentals", "Double-Frying Method for Ultra-Crispy French Fries and Fried Chicken", 
         "Frying potatoes once at high heat browns surface before moisture inside can escape, turning fries soggy in 5 mins.", 
         "First fry at 150 deg C to cook through and gelatinize starches; cool completely; second fry at 190 deg C for 2 mins for shatter-crisp crust", "Limp, soggy, floppy french fries within 3 minutes of plating"),
        ("Cooking Fundamentals", "Cooking Perfect Non-Sticky Basmati Rice for Biryani & Polao", 
         "Stirring boiling rice with a spoon breaks delicate swollen long grains into mushy rice pudding.", 
         "Wash rice gently 4-5 times until water runs clear (removing surface amylose); soak 30 mins; parboil to 70% with 1 tsp ghee/lemon; never stir violently", "Broken, mushy, sticky clumped biryani grains"),
        ("Cooking Fundamentals", "Tempering Whole Spices (Tadka / Baghar / Phoron) Master Timing", 
         "Throwing delicate cumin or mustard seeds into smoking burnt oil turns them bitter black within 2 seconds.", 
         "Heat oil/ghee over medium heat; add whole cumin/mustard/bay leaf; wait 15-20 seconds until seeds sputter and release fragrant aroma; add onions", "Black bitter burnt cumin ruining entire pot of dal or curry"),
        ("Cooking Fundamentals", "Caramelizing Onions (Beresta) for Biryani: Uniform Golden Brown", 
         "Crowding the pan with thick-sliced onions steams them instead of browning, leading to uneven burnt patches.", 
         "Slice onions uniformly thin with mandoline; fry in medium-hot oil in batches; remove when light golden (residual carryover heat darkens them to crisp)", "Bitter, black, charred fried onions ruining royal biryani aroma")
    ]
    for sub, title, prob, check, risk in frying:
        items.append((cat, sub, title, prob, prob, check, risk))

    return items

print("Cooking techniques module loaded.")
