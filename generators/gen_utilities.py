"""Utilities, Civic Infrastructure & Agriculture (40 scenarios)"""

def populate_utilities(add):
    cat = "Utilities, Civic & Municipal"
    
    items = [
        # Electricity & Gas
        ("Utilities", "Applying for new Pre-paid / Post-paid Electricity Meter (DESCO / DPDC / BREB)", 
         "Linemen demand heavy bribes claiming transformer load shortage.", 
         "Apply directly on utility online portal, submit wiring test certificate, load sanction challan", "Paying double to touts and receiving uncalibrated meter"),
        ("Utilities", "Contesting an absurdly inflated electricity or gas bill (Ghost Billing)", 
         "Meter readers record incorrect cumulative kWh readings or average estimates without visiting.", 
         "Photograph physical meter display with timestamp, file complaint to Executive Engineer (O&M)", "Paying thousands for power never consumed; risk of line disconnection"),
        ("Utilities", "LPG Gas Cylinder Safety: Checking expiry date and pressure regulator", 
         "Expired, rusted LPG cylinders sold by local retailers leak and cause catastrophic kitchen explosions.", 
         "Check cylinder stay-plate test date (e.g. B-26 = Q2 2026), test soap-bubble water leak on valve", "Fatal LPG explosion and massive house fire"),
        ("Utilities", "Handling electric meter tampering or false power theft allegations", 
         "Utility inspection teams accuse consumers of bypassing meters to extort compounding penalties.", 
         "Demand laboratory meter testing in front of consumer; preserve unbroken meter seals", "Facing criminal electricity theft case under Electricity Act"),

        # Water, Sanitation & Civic
        ("Civic Infrastructure", "Resolving contaminated, smelly tap water supply from WASA", 
         "Underground sewage pipelines often crack and seep into municipal drinking water lines.", 
         "Collect water sample for coliform lab test; file emergency complaint to WASA MODS Zone", "Severe outbreak of typhoid and bacterial dysentery in building"),
        ("Civic Infrastructure", "Emptying an overflowing septic tank legally in City Corporation", 
         "Private scavengers dump raw human sewage into storm drains, incurring massive environmental fines.", 
         "Book City Corporation automated vacuum tanker (FSM - Fecal Sludge Management) service", "Hefty municipal fines and biological contamination of neighborhood"),
        ("Civic Infrastructure", "Reporting an open uncovered manhole or broken street pavement", 
         "Open manholes cause fatal drowning accidents during waterlogged monsoon floods.", 
         "Lodge GPS geotagged photo complaint via City Corporation mobile app (e.g., 'Shobar Dhaka')", "Pedestrians or children falling into torrential storm drains"),
        ("Civic Infrastructure", "Dealing with noisy industrial or commercial operations in residential zones", 
         "Generators and metal workshops running all night violate Noise Pollution Control Rules.", 
         "Measure decibels via mobile app; submit written petition to Department of Environment (DoE)", "Severe chronic sleep deprivation and loss of hearing")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Utilities module ready.")
