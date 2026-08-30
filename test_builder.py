import json

# Let's define all 9 subjects cleanly and compactly in python
data = {
  "bangla": [],
  "english": [],
  "math": [],
  "islam": [],
  "gk": [],
  "science": [],
  "computer": [],
  "moral": [],
  "drawing": []
}

# Write a quick generator to test syntax and size
with open("curriculum_structure_test.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False)

print("Structure test passed")
