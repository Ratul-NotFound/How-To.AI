# compile_1000_scenarios.py
import json
import os

all_scenarios = []
seen_titles = set()

def add(category, subcategory, title, the_problem, what_people_dont_know, critical_checklist, primary_risk):
    if title in seen_titles:
        return
    seen_titles.add(title)
    all_scenarios.append({
        "id": len(all_scenarios) + 1,
        "category": category,
        "subcategory": subcategory,
        "title": title,
        "the_problem": the_problem,
        "what_people_dont_know": what_people_dont_know,
        "critical_checklist": critical_checklist,
        "primary_risk": primary_risk
    })

print("Helper defined.")
