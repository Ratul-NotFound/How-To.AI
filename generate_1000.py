"""
Generator script to produce exactly 1,000 unique, distinct real-world scenarios.
"""
import json
import os

scenarios = []
seen_titles = set()

def add(category, subcategory, title, problem, what_people_dont_know, checklist, risk):
    if title in seen_titles:
        return
    seen_titles.add(title)
    scenarios.append({
        "id": len(scenarios) + 1,
        "category": category,
        "subcategory": subcategory,
        "title": title,
        "the_problem": problem,
        "what_people_dont_know": what_people_dont_know,
        "critical_checklist": checklist,
        "primary_risk": risk
    })

# We will populate our scenarios using specialized generator modules.
