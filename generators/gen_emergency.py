"""Emergencies, Cyber Crime, Scams & Lost Belongings (40 scenarios)"""

def populate_emergency(add):
    cat = "Emergencies, Cyber Security & Scams"
    
    items = [
        # Cyber Crime & Digital Defense
        ("Cyber Crime", "Recovering a hacked Facebook / Instagram account used for extortion", 
         "Hackers change linked email, phone, and enable 2-Factor Authentication (2FA) immediately.", 
         "Use facebook.com/hacked, upload government Smart NID photo for manual identity verification", "Blackmail of personal private photos and financial fraud to friends"),
        ("Cyber Crime", "Handling AI Voice Deepfake / Video Call Kidnapping Scams", 
         "Scammers clone a child's or relative's voice using AI, crying that they are in police custody or kidnapped.", 
         "Establish a secret family verbal passphrase; call the relative directly on regular GSM phone before sending money", "Transferring lakhs in panic to ruthless scammers"),
        ("Cyber Crime", "Dealing with Online Blackmail / Sextortion on Telegram or WhatsApp", 
         "Victims are tricked into video calls with nude clips recorded and threatened with release to family.", 
         "Do not pay (paying leads to demands for more money); preserve chat logs, contact Cyber Police Centre CID immediately", "Psychological trauma, loss of life savings, and public shaming"),
        ("Cyber Crime", "Reporting Cyber Crimes to CID Cyber Police Centre Bangladesh", 
         "Victims waste time going to local Thana where officers often lack technical forensics expertise.", 
         "Contact CID Cyber Police Centre hotline (01730336431) or visit CID Headquarters Malibagh Dhaka", "Evidence being wiped before investigators can trace IP/server logs"),

        # Lost Items & Physical Security
        ("Lost Property", "Step-by-step SOP for a Lost or Snatched Smartphone", 
         "Victims delay blocking SIM, allowing thieves to drain bKash, Nagad, and bank accounts within minutes.", 
         "1. Call telco to block SIM ➔ 2. Remote wipe via Find My ➔ 3. File Online GD with IMEI ➔ 4. Report to Cyber Police for tracking", "Total digital identity theft and massive financial loss"),
        ("Lost Property", "Recovering a Stolen Motorcycle via GPS Tracking and Police Thana", 
         "Going alone to retrieve a stolen bike from a chop-shop puts your life in extreme danger.", 
         "Track live GPS coordinates; inform local Thana Duty Officer to deploy armed police escort", "Physical violence from criminal syndicates or bike dismantled for parts"),
        ("Lost Property", "Lost National ID / Driving License / Passport: Immediate damage control", 
         "Criminals use lost original NID cards to register illegal SIM cards used in criminal extortion.", 
         "File Police GD immediately stating serial numbers; obtain certified GD copy for replacement", "Named as suspect in serious criminal investigation due to cloned SIM"),

        # Emergency Services Navigation
        ("Emergency Services", "Calling National Emergency Service 999: How to get instant police/fire/ambulance", 
         "Callers scream in panic without giving exact street landmark, wasting critical response time.", 
         "State: 1. Exact location landmark ➔ 2. Nature of emergency (Fire/Medical/Police) ➔ 3. Number of casualties", "Emergency dispatch arriving 45 minutes late due to vague directions"),
        ("Emergency Services", "Handling domestic building fire before Fire Service arrival", 
         "Using water on electrical or oil kitchen fires causes massive electrical shock or grease fireballs.", 
         "Shut off main electrical breaker; use Class B/C dry powder or CO2 extinguisher, or smother with heavy wet blanket", "Electrocution or fire instantly spreading across entire room"),
        ("Emergency Services", "Performing Bystander Hands-Only CPR on an unconscious adult", 
         "Brain death begins within 4-6 minutes of cardiac arrest; waiting for ambulance is fatal.", 
         "Place hands in center of chest, push hard and fast at 100-120 beats per minute (to the beat of 'Stayin' Alive')", "Irreversible brain damage or patient death before hospital arrival")
    ]
    
    for item in items:
        if len(item) == 5:
            sub, title, prob, check, risk = item
            dont = prob
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
        add(cat, sub, title, prob, dont, check, risk)

print("Emergency module ready.")
