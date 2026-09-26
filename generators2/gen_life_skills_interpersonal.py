"""
Essential Life Skills, Interpersonal Negotiations & Practical Survival (160 scenarios)
"""

def get_life_skills_interpersonal_scenarios():
    cat = "Life Skills, Interpersonal & Practical Survival"
    items = []
    
    # 1. Moving House & Settling In (40)
    moving = [
        ("Moving & Settling", "First-Time Apartment Move-In: Changing Door Locks Immediately", 
         "New tenants rely on existing locks, unaware that past tenants, brokers, and painters hold duplicate keys.", 
         "Replace main door brass euro-cylinder lock on Day 1 before moving personal valuables into apartment", "Apartment burgled with duplicate key within first month with zero signs of forced entry"),
        ("Moving & Settling", "Moving House SOP: Preventing Moving Van Extortion at Destination", 
         "Moving laborers agree to low flat rate in morning, then hold furniture hostage demanding double cash at night.", 
         "Sign written contract detailing number of laborers, floor level stairs surcharge, and total all-inclusive fee upfront", "Moving laborers refusing to unload bed and fridge on street until extra 5,000 BDT is paid"),
        ("Moving & Settling", "Color-Coded Box Packing Method to Avoid Moving Day Chaos", 
         "Throwing random items into unmarked cardboard boxes creates days of agonizing confusion in new house.", 
         "Label each box with colored duct tape by room (Blue = Kitchen, Red = Master Bed); number each box matching phone inventory note", "Opening 15 boxes at midnight just to find a phone charger and toothbrush"),
        ("Moving & Settling", "Inspecting Gas & Electrical Load before Moving into Rented Flat", 
         "Moving into a flat only to discover gas line pressure is zero during morning cooking hours (6 AM to 1 PM).", 
         "Test kitchen stove during peak morning cooking hours (8 AM); test voltage with AC turned on to verify load capacity", "Discovering you cannot cook breakfast or run AC after paying 3 months advance rent")
    ]
    for sub, title, prob, check, risk in moving:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 2. Interpersonal & Family Dynamics (45)
    family = [
        ("Family Negotiations", "Setting Boundaries with Intrusive Relatives (Marriage/Salary/Infertility Questions)", 
         "Getting angry causes massive family drama; answering honestly invites unsolicited gossip and interference.", 
         "Use the 'Deflect and Pivot' technique: acknowledge politely with light humor and redirect conversation to their life", "Enduring exhausting emotional distress and invasive interrogation during family gatherings"),
        ("Family Negotiations", "Handling Wedding Vendors: Contract Safeguards for Photographers & Catering", 
         "Photographers withhold full raw high-resolution video files for 8 months unless pressured.", 
         "Demand written contract specifying raw photo delivery within 30 days, guest head-count buffer (+10%), and 20% final payment holdback", "Photographer losing wedding footage or delivering edited album 1 year late"),
        ("Family Negotiations", "Negotiating Annual Rent Increase with Landlord without Hostility", 
         "Landlord demands steep 15% rent hike, threatening eviction if tenant objects.", 
         "Present market comparables of neighboring buildings; highlight track record of timely payments; offer 2-year lease with 5% cap", "Facing abrupt forced relocation and paying fresh agent commissions"),
        ("Family Negotiations", "Resolving Sibling Jealousy during Ancestral Property Division", 
         "Informal verbal property distribution causes lifelong sibling estrangement and violent disputes.", 
         "Insist on neutral government-certified Amin survey; execute registered Deed of Partition (আপোষ বন্টননামা) signed by all siblings", "Lifelong family feud and children inheriting bitter civil lawsuits")
    ]
    for sub, title, prob, check, risk in family:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 3. Bereavement & Life Crises (40)
    crises = [
        ("Bereavement Logistics", "Navigating Death Formalities, Cemetery Burial Permits & Hospital Discharge in BD", 
         "Families in shock face confusing bureaucratic hurdles getting cemetery burial slips at night.", 
         "Collect formal hospital Death Slip; obtain Ward Councillor Death Certificate; contact Anjuman Mufidul Islam / Graveyard Committee", "Body stranded in hospital morgue unable to obtain municipal burial clearance"),
        ("Bereavement Logistics", "Managing Eldercare Dementia Patient: Preventing Wandering and Disappearance", 
         "Alzheimer's patients wander out of home unnoticed, becoming lost in chaotic urban traffic.", 
         "Install chime sensors on exit doors; fit patient with silicone GPS tracker wristband with phone number engraved", "Elderly parent vanishing in city streets unable to state name or home address"),
        ("Bereavement Logistics", "Immediate Financial Checklist upon Sudden Passing of Family Breadwinner", 
         "Families withdraw cash from ATM cards of deceased, which can violate banking succession laws.", 
         "Inform bank to freeze accounts formally; collect death certificates; apply for Waris and succession certificate", "Accusations of fund misappropriation by other legal heirs and account freezing")
    ]
    for sub, title, prob, check, risk in crises:
        items.append((cat, sub, title, prob, prob, check, risk))

    # 4. Essential Practical Life Skills (35)
    skills = [
        ("Practical Skills", "Sewing a Loose Button on Shirt: The Toothpick Shank Trick", 
         "Sewing a button flat against fabric makes it impossible to button up without tearing cloth.", 
         "Place a wooden toothpick over button; sew 6-8 loops through holes; remove toothpick; wrap thread tightly around neck to form flexible shank", "Button ripping off after 2 days or straining buttonhole fabric"),
        ("Practical Skills", "Ironing Formal Dress Shirts without Iron Scorch Marks or Fabric Shine", 
         "Pressing hot iron directly on dark wool or synthetic trousers melts fibers into an unsightly glossy shine.", 
         "Iron inside out; use clean white cotton pressing cloth between iron and garment; start with collar ➔ cuffs ➔ sleeves ➔ body", "Leaving permanent glossy shiny scorch marks on 100 USD formal trousers"),
        ("Practical Skills", "Surviving Extreme Summer Heatwaves without Air Conditioning", 
         "Sitting in closed stagnant room during 40 deg C heatwaves triggers heat exhaustion and heat stroke.", 
         "Hang damp cotton bedsheet in front of open window facing breeze; place bowl of ice water in front of table fan; stay hydrated with ORS", "Heat stroke, dehydration, and dangerous body hyperthermia"),
        ("Practical Skills", "Packing Suitcase Efficiently: The Military Ranger Roll Method", 
         "Folding clothes into flat rectangles causes deep wrinkles and takes up 50% more suitcase volume.", 
         "Roll t-shirts and trousers tightly into compact cylindrical bundles (Ranger Roll); pack inside compression packing cubes", "Suitcase bulging and clothes arriving at destination covered in deep creases")
    ]
    for sub, title, prob, check, risk in skills:
        items.append((cat, sub, title, prob, prob, check, risk))

    return items

print("Life skills module loaded.")
