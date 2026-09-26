"""
Master compiler script to build and export EXACTLY 2,000 unique real-world practical scenarios.
Exports:
1. scenarios_2000.json
2. SCENARIOS_DIRECTORY_2000.md
"""

import json
import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "generators2"))

from gen_education_admissions import get_education_admissions_scenarios
from gen_food_adulteration import get_food_adulteration_scenarios
from gen_cooking_techniques import get_cooking_techniques_scenarios
from gen_home_stains_repairs import get_home_stains_repairs_scenarios
from gen_product_choosing import get_product_choosing_scenarios
from gen_life_skills_interpersonal import get_life_skills_interpersonal_scenarios
from mass_expansion_engine import generate_mass_scenarios

# Load base 1,000 scenarios
base_json_path = os.path.join(os.path.dirname(__file__), "scenarios_1000.json")
with open(base_json_path, "r", encoding="utf-8") as f:
    base_scenarios = json.load(f)

print(f"Loaded {len(base_scenarios)} base scenarios from scenarios_1000.json")

all_scenarios = list(base_scenarios)
seen_titles = set(sc["title"].strip().lower() for sc in base_scenarios)

def add_new(cat, sub, title, prob, dont, check, risk):
    clean = title.strip()
    key = clean.lower()
    if key in seen_titles:
        return False
    seen_titles.add(key)
    all_scenarios.append({
        "id": len(all_scenarios) + 1,
        "category": cat.strip(),
        "subcategory": sub.strip(),
        "title": clean,
        "problem_statement": prob.strip(),
        "what_people_dont_know": dont.strip(),
        "critical_checklist": check.strip(),
        "primary_risk": risk.strip()
    })
    return True

# Ingest new batch 2 generators
generators_list = [
    get_education_admissions_scenarios,
    get_food_adulteration_scenarios,
    get_cooking_techniques_scenarios,
    get_home_stains_repairs_scenarios,
    get_product_choosing_scenarios,
    get_life_skills_interpersonal_scenarios
]

for gen_fn in generators_list:
    for cat, sub, title, prob, dont, check, risk in gen_fn():
        add_new(cat, sub, title, prob, dont, check, risk)

for sc in generate_mass_scenarios():
    add_new(
        sc["category"],
        sc["subcategory"],
        sc["title"],
        sc["problem_statement"],
        sc["what_people_dont_know"],
        sc["critical_checklist"],
        sc["primary_risk"]
    )

print(f"Total scenarios before capping: {len(all_scenarios)}")

# Cap at exactly 2,000
if len(all_scenarios) > 2000:
    all_scenarios = all_scenarios[:2000]

# Renumber IDs cleanly from 1 to 2000
for idx, sc in enumerate(all_scenarios):
    sc["id"] = idx + 1

print(f"Final scenario count: {len(all_scenarios)}")

# 1. Export JSON
target_json = os.path.join(os.path.dirname(__file__), "scenarios_2000.json")
with open(target_json, "w", encoding="utf-8") as f:
    json.dump(all_scenarios, f, indent=2, ensure_ascii=False)
print(f"Exported 2,000 scenarios to {target_json}")

# 2. Export Master Markdown Directory
target_md = os.path.join(os.path.dirname(__file__), "SCENARIOS_DIRECTORY_2000.md")

# Group by Category
categories = {}
for sc in all_scenarios:
    cat = sc["category"]
    if cat not in categories:
        categories[cat] = []
    categories[cat].append(sc)

with open(target_md, "w", encoding="utf-8") as f:
    f.write("# Master Directory: 2,000 Unique Real-World Practical Scenarios\n\n")
    f.write("> **The Ultimate Life Operating System & Knowledge Base: Covering Bureaucracy, Property, Vehicles, Education & Admissions, Food Safety, Cooking Techniques, Recipes, Household Repairs, Stains, Product Selection, Life Skills, and Emergency SOPs.**\n\n")
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

print(f"Exported master Markdown directory to {target_md}")
