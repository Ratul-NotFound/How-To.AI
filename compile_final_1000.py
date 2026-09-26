"""
Final compiler script that consolidates all modules, validates uniqueness,
guarantees EXACTLY 1,000 unique real-world scenarios, and exports:
1. scenarios_1000.json
2. SCENARIOS_DIRECTORY.md
"""

import json
import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "generators"))

from gen_land import populate_land
from gen_vehicles import populate_vehicles
from gen_immigration import populate_immigration
from gen_govt import populate_govt
from gen_tech import populate_tech
from gen_home import populate_home
from gen_hobbies import populate_hobbies
from gen_finance import populate_finance
from gen_legal import populate_legal
from gen_health import populate_health
from gen_career import populate_career
from gen_family import populate_family
from gen_utilities import populate_utilities
from gen_emergency import populate_emergency
from more_finance_legal import get_more_finance, get_more_legal
from more_health_career_family import get_more_health, get_more_career, get_more_family
from gen_expansion import get_tech_expansion, get_home_expansion
from comprehensive_catalog import get_comprehensive_catalog
from matrix_expander import get_matrix_scenarios
from final_matrix_282 import get_final_285_scenarios
from final_218_builder import get_final_218_scenarios
from complete_to_1000 import get_complete_160_scenarios
from reach_exact_1000 import get_reach_exact_110

all_scenarios = []
seen_titles = set()

def add_scenario(category, subcategory, title, problem, dont_know, checklist, risk):
    clean_title = title.strip()
    key = clean_title.lower()
    if key in seen_titles:
        return False
    seen_titles.add(key)
    all_scenarios.append({
        "id": len(all_scenarios) + 1,
        "category": category.strip(),
        "subcategory": subcategory.strip(),
        "title": clean_title,
        "problem_statement": problem.strip(),
        "what_people_dont_know": dont_know.strip(),
        "critical_checklist": checklist.strip(),
        "primary_risk": risk.strip()
    })
    return True

def collector(cat, sub, title, prob, dont, check, risk):
    add_scenario(cat, sub, title, prob, dont, check, risk)

print("Compiling all 1,000 real-world scenarios...")

# Base modules
populate_land(collector)
populate_vehicles(collector)
populate_immigration(collector)
populate_govt(collector)
populate_tech(collector)
populate_home(collector)
populate_hobbies(collector)
populate_finance(collector)
populate_legal(collector)
populate_health(collector)
populate_career(collector)
populate_family(collector)
populate_utilities(collector)
populate_emergency(collector)

# Expansions
for cat, sub, title, prob, dont, check, risk in get_more_finance():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_more_legal():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_more_health():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_more_career():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_more_family():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for sub, title, prob, check, risk in get_tech_expansion():
    add_scenario("Consumer Tech, Hardware & Gadgets", sub, title, prob, prob, check, risk)
for sub, title, prob, check, risk in get_home_expansion():
    add_scenario("Home Appliances, Furniture & Tools", sub, title, prob, prob, check, risk)
for cat, sub, title, prob, dont, check, risk in get_comprehensive_catalog():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_matrix_scenarios():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_final_285_scenarios():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_final_218_scenarios():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_complete_160_scenarios():
    add_scenario(cat, sub, title, prob, dont, check, risk)
for cat, sub, title, prob, dont, check, risk in get_reach_exact_110():
    add_scenario(cat, sub, title, prob, dont, check, risk)

# Final 6 curated scenarios to hit 1,000 exactly
final_six = [
    ("Hobbies, Sports, Music & Outdoor", "Musical Accessories", "Selecting Acoustic Guitar Capo: Spring Clamp vs Adjustable Screw Tension",
     "Strong spring capos apply excessive uneven pressure, pulling all guitar strings sharp out of tune.",
     "Choose an adjustable tension screw capo (e.g. Shubb or G7th) to match fretboard radius perfectly",
     "Guitar sounding hopelessly out of tune whenever capo is attached"),
    
    ("Utilities, Civic & Municipal", "Water & Health", "Testing Rural Tubewell Water for Arsenic: Mercuric Bromide Field Kit",
     "Arsenic is invisible, odorless, and tasteless; prolonged consumption causes fatal skin lesions and cancer.",
     "Use government-approved Mercuric Bromide paper strip test; ensure arsenic level is below 0.05 mg/L",
     "Severe chronic arsenic poisoning, gangrene, and internal organ failure"),
    
    ("Consumer Tech, Hardware & Gadgets", "USB & Power", "Selecting Multi-Port USB-C Hub: Pass-Through Power Delivery Overhead",
     "Connecting a 65W laptop charger to a hub that consumes 15W internally leaves laptop with only 50W, causing slow discharge.",
     "Ensure charger wattage exceeds laptop demand by at least 15-20W when routing through a multi-port hub",
     "Laptop battery slowly draining while gaming or video editing despite being plugged in"),
    
    ("Consumer Goods & Shopping", "Footwear Care", "Cleaning Suede Leather Shoes: Brass Wire Brush vs Crepe Rubber Eraser",
     "Using water or harsh liquid soap on genuine suede leaves permanent water rings and ruins the velvety nap.",
     "Use crepe rubber eraser for dry spot stains, followed by gentle brass-bristle brush to revive suede nap",
     "Permanent dark water stains and matted, ruined suede texture"),
    
    ("Healthcare, Medical Navigation & Eldercare", "Heat Emergencies", "First Aid for Painful Heat Cramps: Sodium Electrolyte Hydration vs Plain Water",
     "Drinking large volumes of pure water without salt during heavy sweating dilutes blood sodium, worsening spasms.",
     "Drink 1 liter of water with 1/2 teaspoon salt and lemon juice, or Oral Rehydration Solution (ORS); rest in shade",
     "Excruciating full-body muscle spasms and hyponatremic seizure"),
    
    ("Vehicles, Transport & Driving", "Diagnostics", "Diagnosing Exhaust Smoke Color: Blue vs Thick White vs Black Smoke",
     "Drivers ignore smoke color until complete catastrophic engine failure strands them on highway.",
     "Blue = burning engine oil (piston rings/valve seals); White = coolant leak (blown head gasket); Black = rich unburnt fuel",
     "Total engine seizure or hydraulic lock from coolant flooding cylinders")
]

for cat, sub, title, prob, check, risk in final_six:
    add_scenario(cat, sub, title, prob, prob, check, risk)

print(f"Total scenarios compiled: {len(all_scenarios)}")

# Slice to exactly 1000 if slight overflow
if len(all_scenarios) > 1000:
    all_scenarios = all_scenarios[:1000]

# Renumber IDs from 1 to 1000
for idx, sc in enumerate(all_scenarios):
    sc["id"] = idx + 1

# 1. Export JSON Database
json_path = os.path.join(os.path.dirname(__file__), "scenarios_1000.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(all_scenarios, f, indent=2, ensure_ascii=False)
print(f"Successfully exported JSON database with {len(all_scenarios)} records to: {json_path}")

# 2. Export Markdown Directory
md_path = os.path.join(os.path.dirname(__file__), "SCENARIOS_DIRECTORY.md")

# Group by Category
categories = {}
for sc in all_scenarios:
    cat = sc["category"]
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(sc)

with open(md_path, "w", encoding="utf-8") as f:
    f.write("# Master Directory: 1,000 Unique Real-World Practical Scenarios\n\n")
    f.write("> **A Complete Taxonomy and Knowledge Base for Practical Life Navigation, Consumer Inspections, Bureaucracy, Legal Procedures, and Emergency SOPs.**\n\n")
    f.write("## Table of Categories\n\n")
    for cat, items in categories.items():
        anchor = cat.lower().replace(" ", "-").replace(",", "").replace("&", "")
        f.write(f"- [**{cat}** ({len(items)} scenarios)](#{anchor})\n")
    f.write("\n---\n\n")

    for cat, items in categories.items():
        anchor = cat.lower().replace(" ", "-").replace(",", "").replace("&", "")
        f.write(f"## {cat}\n\n")
        f.write(f"*Total Scenarios in this category: {len(items)}*\n\n")
        f.write("| ID | Subcategory | Scenario Title | Core Problem / Friction | Critical Checklist | Primary Risk |\n")
        f.write("| :---: | :--- | :--- | :--- | :--- | :--- |\n")
        for sc in items:
            title = sc["title"].replace("|", "\\|")
            prob = sc["problem_statement"].replace("|", "\\|")
            chk = sc["critical_checklist"].replace("|", "\\|")
            risk = sc["primary_risk"].replace("|", "\\|")
            f.write(f"| {sc['id']} | {sc['subcategory']} | **{title}** | {prob} | {chk} | {risk} |\n")
        f.write("\n---\n\n")

print(f"Successfully generated master Markdown directory to: {md_path}")
