"""
Complete generator script to compile EXACTLY 1,000 unique real-world scenarios
covering all aspects of human daily life with focus on practical navigation,
document checklists, inspection guides, and risk avoidance.
"""

import json
import os
import sys

# Ensure generator directory is in path
sys.path.append(os.path.join(os.path.dirname(__file__), "generators"))

all_scenarios = []
seen_titles = set()

def register_scenario(category, subcategory, title, problem, dont_know, checklist, risk):
    clean_title = title.strip()
    if clean_title.lower() in seen_titles:
        return False
    seen_titles.add(clean_title.lower())
    
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

def ingest_from_list(category, items):
    for item in items:
        if len(item) == 5:
            sub, title, prob_desc, check, risk = item
            register_scenario(category, sub, title, prob_desc, prob_desc, check, risk)
        elif len(item) == 6:
            sub, title, prob, dont, check, risk = item
            register_scenario(category, sub, title, prob, dont, check, risk)

print("Ingest helper ready.")
