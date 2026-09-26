"""
Database generator that systematically produces 1,000 distinct real-world scenarios.
"""

import json
import os

all_scenarios = []
seen_titles = set()

def add(category, subcategory, title, problem, dont_know, checklist, risk):
    clean = title.strip()
    key = clean.lower()
    if key in seen_titles:
        return
    seen_titles.add(key)
    all_scenarios.append({
        "id": len(all_scenarios) + 1,
        "category": category,
        "subcategory": subcategory,
        "title": clean,
        "the_problem": problem,
        "what_people_dont_know": dont_know,
        "critical_checklist": checklist,
        "primary_risk": risk
    })

# Ingest existing base generators safely
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

def safe_add(cat, *args):
    if len(args) == 5:
        sub, title, prob, check, risk = args
        add(cat, sub, title, prob, prob, check, risk)
    elif len(args) == 6:
        sub, title, prob, dont, check, risk = args
        add(cat, sub, title, prob, dont, check, risk)

print("Base safe loaders ready.")
