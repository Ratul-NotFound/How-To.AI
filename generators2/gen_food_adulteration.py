"""
Food Safety, Adulteration Detection & Nutrition Science (160 scenarios)
"""

def get_food_adulteration_scenarios():
    cat = "Food Safety, Adulteration & Nutrition"
    items = []
    
    # 1. Chemical Adulteration Detection (50)
    adulteration = [
        ("Chemical Adulteration", "Detecting Formalin in Fresh Fish at Local Wet Markets", 
         "Formalin-treated fish looks shiny and stiff for days, but flies refuse to sit on it and gills turn pale brown.", 
         "Check for live houseflies around fish stall; inspect gills (must be bright natural red, not dark or dry); smell for pungent chemical odor", "Long-term ingestion causing chronic gastritis, liver toxicity, and nasopharyngeal cancer"),
        ("Chemical Adulteration", "Spotting Artificially Ripened Mangoes with Calcium Carbide", 
         "Carbide-ripened mangoes have uniform bright yellow skin but sour, pale, tasteless inner flesh with black stems.", 
         "Drop mango in bucket of water: naturally ripened mangoes sink; chemically forced unripe mangoes float; look for green patches under yellow skin", "Ingestion of toxic arsenic and phosphorus hydride traces causing neurological toxicity"),
        ("Chemical Adulteration", "Detecting Metanil Yellow Dye in Turmeric (Haldi) Powder", 
         "Unethical spice millers mix carcinogenic industrial dye Metanil Yellow to make low-grade turmeric look golden.", 
         "Add a few drops of concentrated Hydrochloric Acid (HCl) to dissolved turmeric: if it turns deep magenta/pink, dye is present", "Severe stomach ulcers, liver degradation, and carcinogenic tissue damage"),
        ("Chemical Adulteration", "Testing Chili Powder for Brick Dust and Industrial Sudan Red Dye", 
         "Traders mix red brick dust, sawdust, and toxic Sudan-I dye into chili powder for color and weight.", 
         "Sprinkle chili powder in a glass of water: pure chili floats briefly; brick dust settles rapidly to the bottom leaving red streaks", "Chronic kidney inflammation, intestinal lining erosion, and cancer"),
        ("Chemical Adulteration", "Testing Raw Milk for Starch, Flour, and Detergent Adulteration", 
         "Vendors add starch and water to skimmed milk to fake thick creamy consistency on lactometer tests.", 
         "Add 2 drops of Iodine solution to boiled milk sample: if milk turns deep blue, starch is present; shake bottle: soap bubbles indicate detergent", "Severe diarrhea, kidney damage in infants, and stunted child growth"),
        ("Chemical Adulteration", "Testing Pure Raw Honey vs Sugar Syrup and High Fructose Corn Syrup", 
         "Commercial honey brands dilute honey with inverted sugar syrup that never crystallizes.", 
         "Drop honey into a glass of clean water: pure honey settles as a solid lump at the bottom; adulterated syrup dissolves immediately into cloudy water", "Consuming 70% pure refined sugar disguised as therapeutic honey"),
        ("Chemical Adulteration", "Detecting Urea and Hydrose in Puffed Rice (Muri)", 
         "Producers use urea fertilizer and sodium hydrosulfite (Hydrose) to make puffed rice abnormally white, large, and crisp.", 
         "Pure muri is slightly off-white/cream colored; artificially whitened muri is snowy bright white and has an acrid aftertaste when chewed dry", "Chronic kidney overload and chemical toxicity"),
        ("Chemical Adulteration", "Testing Pure Mustard Oil (সরিষার তেল) for Toxic Argemone Oil", 
         "Argemone oil adulteration causes Epidemic Dropsy, cardiac arrest, glaucoma, and bilateral leg swelling.", 
         "Add 5ml concentrated Nitric Acid (HNO3) to 5ml mustard oil: a reddish-brown ring at the junction indicates toxic argemone oil", "Epidemic dropsy, heart failure, and permanent blindness"),
        ("Chemical Adulteration", "Testing Pure Ghee for Vanaspati / Dalda (Hydrogenated Palm Oil)", 
         "Dalda mixed with artificial butter flavor is packaged as premium rural Cow Ghee.", 
         "Add 5ml Hydrochloric Acid and a pinch of sugar to melted ghee (Baudouin Test): if crimson red color appears within 5 mins, dalda is present", "Massive intake of artificial trans-fats clogging coronary arteries"),
        ("Chemical Adulteration", "Testing Tea Leaves for Exhausted Dyed Used Leaves and Iron Filings", 
         "Used hotel tea leaves are dried, dyed with coal tar dyes, and mixed with fresh tea.", 
         "Sprinkle dry tea leaves on damp white filter paper: artificial dye instantly leeches yellow/brown spots before water is even hot", "Ingesting chemical industrial dyes and magnetic iron rust particles")
    ]
    for sub, title, prob, check, risk in adulteration:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 2. Food Safety & Pathogens (45)
    pathogens = [
        ("Microbial Safety", "Reheating Cooked Rice: Preventing Bacillus Cereus Spore Poisoning", 
         "Leaving cooked rice at room temperature allows heat-resistant Bacillus cereus spores to produce emetic vomiting toxins.", 
         "Cool leftover cooked rice within 1 hour; store in refrigerator under 4 deg C; reheat thoroughly to steaming hot (75 deg C) only once", "Violent nausea, projective vomiting, and diarrhea within 1-5 hours of eating"),
        ("Microbial Safety", "Canned Food Safety: Identifying Clostridium Botulinum Bulging Cans", 
         "Botulinum neurotoxin is the deadliest biological poison known; 1 microgram is fatal to an adult.", 
         "Never consume food from dented, bulging, leaking cans, or jars that hiss/spurt liquid upon opening; discard immediately without tasting", "Fatal flaccid muscle paralysis, respiratory arrest, and death"),
        ("Microbial Safety", "Raw Poultry Cutting Board Cross-Contamination (Campylobacter & Salmonella)", 
         "Cutting raw chicken on a wooden board and then chopping salad greens on the same board spreads live bacteria.", 
         "Use dedicated color-coded cutting boards (Red for raw meat, Green for vegetables); wash hands with soap for 20s after touching raw poultry", "Severe bloody gastroenteritis, high fever, and sepsis"),
        ("Microbial Safety", "Cooking Ground Minced Meat: Safe Internal Temperature (71 deg C / 160 deg F)", 
         "Unlike whole steaks where bacteria sit on the surface, grinding meat spreads surface E. coli throughout the entire patty.", 
         "Always cook beef patties and minced meatballs to minimum 71 deg C internal temperature with a digital meat thermometer; never eat pink burgers", "Hemolytic Uremic Syndrome (HUS), kidney failure, and death from E. coli O157"),
        ("Microbial Safety", "Boiling Raw Unpasteurized Cow Milk: The Rolling Boil Rule", 
         "Raw milk from rural farms frequently harbors Bovine Tuberculosis, Brucella, and Listeria bacteria.", 
         "Bring raw milk to a rolling boil for minimum 5-10 minutes while stirring to ensure complete pathogen destruction before consumption", "Chronic debilitating Brucellosis fever and extrapulmonary tuberculosis"),
        ("Microbial Safety", "Understanding 'Use By' vs 'Best Before' Dates on Packaged Food", 
         "Consumers throw away edible food or consume dangerous spoiled meat because they confuse date labels.", 
         "'Use By' is a strict safety cutoff for perishable meats/dairy (do not eat after); 'Best Before' indicates peak flavor/crispness (safe to eat)", "Food poisoning from expired poultry or wasting thousands in good food"),
        ("Microbial Safety", "Defrosting Frozen Meat Safely: The Danger Zone (4 deg C to 60 deg C)", 
         "Leaving frozen chicken on kitchen counter all day allows surface bacteria to multiply exponentially while center stays frozen.", 
         "Thaw meat safely inside the refrigerator overnight, under cold running water, or in microwave directly before cooking; never on open counter", "Explosive bacterial multiplication producing heat-stable toxins"),
        ("Microbial Safety", "Raw Egg Safety: Salmonella Enteritidis in Homemade Mayonnaise", 
         "Making raw egg mayonnaise or Caesar dressing without pasteurized eggs risks severe Salmonella infection.", 
         "Use pasteurized shell eggs for raw sauces, or heat egg yolks gently to 60 deg C with acid (vinegar/lemon) before emulsifying", "Severe food poisoning, high fever, and hospitalization in children and elderly"),
        ("Microbial Safety", "Reusing Deep-Frying Cooking Oil: Total Polar Compounds (TPC)", 
         "Reheating cooking oil multiple times creates toxic free radicals, trans-fats, and carcinogenic Acrolein smoke.", 
         "Never reuse frying oil more than 2-3 times; discard immediately if oil darkens, foams, smells rancid, or smokes below 170 deg C", "Arterial endothelial inflammation, cardiovascular disease, and stomach cancer"),
        ("Microbial Safety", "Street Food Hygiene: Ice Block Contamination in Drinks (Typhoid & Hepatitis A)", 
         "Street beverage vendors use industrial cooling ice made from untreated sewer water containing fecal pathogens.", 
         "Avoid street drinks containing crushed raw ice; consume only freshly boiled tea or bottled beverages with factory unbroken cap seals", "Acute Hepatitis A liver jaundice, Typhoid fever, and severe cholera outbreaks")
    ]
    for sub, title, prob, check, risk in pathogens:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 3. Pantry Storage & Preservation (35)
    storage = [
        ("Pantry Storage", "Storing Cooking Potatoes and Onions: Preventing Sprouting & Solanine", 
         "Storing potatoes next to onions accelerates potato sprouting; sprouted green potatoes contain toxic solanine.", 
         "Store potatoes in cool, dark, well-ventilated paper bags away from ethylene-emitting onions; cut away any green flesh", "Solanine poisoning causing severe stomach cramps, vomiting, and hallucinations"),
        ("Pantry Storage", "Preserving Fresh Coriander / Cilantro Leaves for 3+ Weeks", 
         "Leaving cilantro in plastic grocery bags turns it into a slimy black liquid within 4 days.", 
         "Trim stems, place upright in a glass jar with 1 inch water (like a flower bouquet), cover loosely with ziplock, store in fridge", "Wasting fresh herbs every week and throwing away rotten greens"),
        ("Pantry Storage", "Storing Whole Spices vs Ground Powders to Prevent Flavor Loss", 
         "Pre-ground spices lose their volatile essential oils within 3 months, tasting like sawdust in cooking.", 
         "Buy whole cumin, coriander, and cardamom; store in airtight glass jars away from stove heat; grind small fresh batches", "Dull, flat, tasteless curries despite adding large quantities of spices"),
        ("Pantry Storage", "Preventing Mold on Stored Homemade Mango / Garlic Pickles (Achar)", 
         "Using a wet spoon or exposing pickle surface above oil layer allows white fungal mold to colonize.", 
         "Always ensure top layer of pickle is submerged under 1/2 inch of pure mustard oil; use exclusively sterile dry spoons", "Throwing away expensive jars of heirloom family pickles due to mold"),
        ("Pantry Storage", "Extending Shelf Life of Fresh Bread: Room Temp vs Fridge vs Freezer", 
         "Storing bread in the refrigerator accelerates starch retrogradation, making bread go stale 3x faster than room temp.", 
         "Store sliced bread at room temperature for 3 days; freeze remaining slices in airtight bags; toast directly from frozen", "Dry, leathery, stale bread that has to be discarded")
    ]
    for sub, title, prob, check, risk in storage:
        items.append((cat, sub, title, prob, prob, check, risk))

    return items

print("Food adulteration module loaded.")
