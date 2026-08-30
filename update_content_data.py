import json

with open("curriculum_complete.json", "r", encoding="utf-8") as f:
    curriculum = json.load(f)

json_str = json.dumps(curriculum, ensure_ascii=False, indent=2)

with open("content-data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace LESSON_CONTENT block
start_marker = "const LESSON_CONTENT = "
start_idx = content.find(start_marker)
if start_idx != -1:
    end_marker = "\nconst CURRICULUM = {"
    end_idx = content.find(end_marker, start_idx)
    if end_idx != -1:
        new_content = content[:start_idx] + f"const LESSON_CONTENT = {json_str};\n" + content[end_idx:]
        with open("content-data.js", "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Updated content-data.js with full LESSON_CONTENT!")
    else:
        print("Could not find end marker for CURRICULUM")
else:
    print("Could not find start marker for LESSON_CONTENT")
