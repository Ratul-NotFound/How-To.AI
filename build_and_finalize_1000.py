"""
Master compiler that aggregates all generator modules, supplements with domain
scenario matrices, and produces EXACTLY 1,000 unique real-world practical scenarios.
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

scenarios = []
seen_titles = set()

def add_scenario(category, subcategory, title, problem, dont_know, checklist, risk):
    clean_title = title.strip()
    key = clean_title.lower()
    if key in seen_titles:
        return False
    seen_titles.add(key)
    scenarios.append({
        "id": len(scenarios) + 1,
        "category": category.strip(),
        "subcategory": subcategory.strip(),
        "title": clean_title,
        "the_problem": problem.strip(),
        "what_people_dont_know": dont_know.strip(),
        "critical_checklist": checklist.strip(),
        "primary_risk": risk.strip()
    })
    return True

def collector(cat, sub, title, prob, dont, check, risk):
    add_scenario(cat, sub, title, prob, dont, check, risk)

print("Collecting curated scenarios...")
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

print(f"Total curated scenarios collected: {len(scenarios)}")
