"""
Script to generate 1,000 completely unique, distinct real-world practical scenarios
for the 'How-To' life navigation project.
"""

import json
import os

scenarios = []
current_id = 1

def add_scenario(category, subcategory, title, problem, what_people_dont_know, checklist, risk):
    global current_id
    scenarios.append({
        "id": current_id,
        "category": category,
        "subcategory": subcategory,
        "title": title,
        "the_problem": problem,
        "what_people_dont_know": what_people_dont_know,
        "critical_checklist": checklist,
        "primary_risk": risk
    })
    current_id += 1

print("Building scenarios...")
