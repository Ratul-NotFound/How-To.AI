"""Hobbies, Musical Instruments, Sports & Outdoor (65 scenarios)"""

def populate_hobbies(add):
    cat = "Hobbies, Sports, Music & Outdoor"
    
    items = [
        # Musical Instruments
        ("Guitars & Strings", "Inspecting Acoustic Guitar Action, Fret Buzz, and Truss Rod", 
         "High string action hurts beginner fingers; bowed neck causes unplayable fret buzz.", 
         "Check string height at 12th fret (<2.5mm), sight down neck for twist, check two-way truss rod", "Giving up guitar within 2 weeks due to excruciating finger pain"),
        ("Guitars & Strings", "Solid Spruce Top vs Laminated Wood Acoustic Guitar resonance", 
         "Plywood laminate tops sound thin and do not age/improve in tone over time.", 
         "Look at soundhole cross-section to verify continuous wood grain across top plate", "Paying solid-wood prices for cheap industrial plywood guitar"),
        ("Guitars & Strings", "Setting up Electric Guitar Intonation and Bridge Saddles", 
         "Chords sound horribly out of tune high up the fretboard even when open strings are in tune.", 
         "Tune open string, compare harmonic at 12th fret vs fretted note, adjust saddle screw", "Guitar sounding chronically dissonant during soloing"),
        ("Guitars & Strings", "Single Coil vs Humbucker Pickups for noise-free playing", 
         "Single-coil Strat pickups hum loudly when playing under LED lights or computer monitors.", 
         "Choose Humbuckers or HSS configuration for heavy overdrive without 60-cycle hum", "Obnoxious buzzing ruining guitar recordings"),
        ("Guitars & Strings", "Selecting Classical Guitar Nylon Strings vs Steel Strings", 
         "Putting steel strings on a classical nylon guitar snaps the headstock or tears bridge off.", 
         "Never put steel strings on classical guitar; check internal bracing", "Permanent destruction of instrument wooden soundboard"),

        # Keyboards, Drums & Violins
        ("Instruments", "Digital Piano: Graded Hammer Action vs Synth Semi-Weighted keys", 
         "Springy semi-weighted keyboards ruin classical piano finger technique and dynamics.", 
         "Insist on 88-key Graded Hammer Standard (GHS) or Tri-sensor Scaled Hammer action", "Inability to develop acoustic piano touch sensitivity"),
        ("Instruments", "Buying a Beginner Violin: Peg slipping, soundpost alignment, and bridge curve", 
         "Cheap factory violins have untapered friction pegs that slip instantly, detuning strings.", 
         "Check ebony pegs fitting, ensure soundpost is standing upright inside body, check bridge arch", "Violin physically impossible to tune or play"),
        ("Instruments", "Electronic Drum Kit: Mesh Heads vs Rubber Pads", 
         "Hard rubber drum pads vibrate wrists painfully and sound like tapping on hard plastic.", 
         "Choose dual-zone Mesh Heads for realistic stick rebound and whisper-quiet practice", "Wrist tendonitis and neighbor complaints about thumping"),
        ("Instruments", "Maintaining Acoustic Guitar Humidity (preventing body cracks)", 
         "Dry winter weather or continuous air conditioning dries wood, cracking soundboard.", 
         "Keep guitar in case with 2-way soundhole humidifier; maintain 45-55% relative humidity", "Soundboard splitting wide open down center seam"),

        # Sports Equipment & Fitness
        ("Sports Equipment", "Knocking-in and Oiling a Cricket Bat (English vs Kashmir Willow)", 
         "Playing with an un-knocked English willow bat cracks the edges on the very first fast ball.", 
         "Apply raw linseed oil, 6 hours of mallet knocking on edges and toe, apply protective scuff sheet", "Bat snapping in half during the first club match"),
        ("Sports Equipment", "Distinguishing English Willow Grade 1 vs Grade 3 vs Kashmir Willow", 
         "Sellers bleach Kashmir willow with chemicals and sell it as premium Grade 1 English Willow.", 
         "Check grain count (6-10 straight equidistant grains), natural wood blemishes, bat ping test", "Overpaying by 15,000+ BDT for heavy sluggish bat"),
        ("Sports Equipment", "Selecting Badminton Racket: Head Heavy vs Even Balance & String Tension", 
         "Strung at 28+ lbs tension without proper wrist technique causes tennis elbow and snapped frames.", 
         "Beginners should choose 4U Even Balance with 22-24 lbs BG65 string tension", "Severe wrist inflammation and shattered racket frame"),
        ("Sports Equipment", "Choosing Football Boots: Firm Ground (FG) vs Artificial Turf (TF)", 
         "Wearing long FG molded plastic studs on artificial turf fields causes ACL knee tears.", 
         "Use TF rubber-nubbed turf shoes on modern 5-a-side artificial turf pitches", "Torn knee meniscus or ACL ligament rupture"),
        ("Sports Equipment", "Home Gym Power Rack Safety: 11-Gauge Steel vs Thin Commercial Tubes", 
         "Thin sheet metal racks buckle when a 100 kg barbell is dropped onto safety pins.", 
         "Minimum 2x2 or 3x3 inch 11-gauge (3mm thick) steel tubing with through-bolted safety bars", "Barbell crashing onto lifter's chest or neck"),
        ("Sports Equipment", "Olympic Barbell (2-inch sleeves) vs Standard 1-inch barbell", 
         "Cheap 1-inch screw-collar bars bend permanently when loaded past 80 kg.", 
         "Insist on 20 kg 7-foot Olympic barbell with rotating bronze bushings / bearings", "Permanent bar bend causing wrist injury during bench press"),

        # Outdoor, Camping & Trekking
        ("Outdoor & Trekking", "Selecting Camping Tent: Hydrostatic Head Waterproof Rating", 
         "Cheap single-layer tents with 800mm rating leak like a sieve during tropical downpours.", 
         "Double-layer tent with minimum 3000mm hydrostatic head flysheet and bathtub floor", "Waking up floating in soaking wet sleeping bag at 2 AM"),
        ("Outdoor & Trekking", "Backpack Sizing: Torso Length Adjustment and Hip Belt Load Transfer", 
         "Carrying 15 kg on shoulders without hip belt load transfer pinches spinal nerves.", 
         "Measure C7 vertebra to iliac crest; adjust internal frame so 80% weight sits on pelvis", "Debilitating shoulder spasms and lower back disc compression"),
        ("Outdoor & Trekking", "Trekking Boot selection: Ankle Support and Vibram Grip", 
         "Wearing running sneakers on slippery muddy trails causes severe ankle sprains.", 
         "Mid-cut waterproof breathable boots with deep multidirectional lug outsole", "Slipping off mountain ridge or fractured ankle miles from help"),
        ("Outdoor & Trekking", "Water Purification on Trail: Gravity Filter vs Chlorine Dioxide Tabs", 
         "Drinking clear mountain stream water without filtration causes severe Giardia dysentery.", 
         "0.1-micron hollow-fiber membrane filter (Sawyer Squeeze) plus chemical tabs for viruses", "Violent vomiting and dehydration in the wilderness"),
        ("Outdoor & Trekking", "Selecting Binoculars: Roof Prism vs Porro Prism and Magnification", 
         "High 16x binoculars without tripod shake uncontrollably, giving headaches.", 
         "Choose 8x42 or 10x42 Roof Prism with BaK-4 glass and fully multi-coated (FMC) lenses", "Dim, blurry double vision with severe chromatic aberration")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Hobbies module ready.")
