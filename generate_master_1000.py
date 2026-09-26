"""
Master builder script to generate exactly 1,000 unique real-world scenarios
covering all facets of daily life, consumer buying, legal, government, tech,
finance, land, travel, and emergencies.
"""

import json
import os

scenarios = []
seen_titles = set()

def add_entry(category, subcategory, title, problem, dont_know, checklist, risk):
    clean_title = title.strip()
    if clean_title in seen_titles:
        return False
    seen_titles.add(clean_title)
    scenarios.append({
        "id": len(scenarios) + 1,
        "category": category,
        "subcategory": subcategory,
        "title": clean_title,
        "problem_statement": problem.strip(),
        "what_people_dont_know": dont_know.strip(),
        "critical_checklist": checklist.strip(),
        "primary_risk": risk.strip()
    })
    return True

print("Builder initialized.")
