import os

output_file = "components.txt"
script_name = os.path.basename(__file__)
base_dir = os.path.dirname(os.path.abspath(__file__))

with open(output_file, "w", encoding="utf-8") as out:
    for root, dirs, files in os.walk(base_dir):
        print(root, dirs, files)
        for file in files:
            if file == script_name or file == output_file:
                continue
            
            filepath = os.path.join(root, file)
            
            try:
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                
                out.write(f"{'='*60}\n")
                out.write(f"ARCHIVO: {filepath}\n")
                out.write(f"{'='*60}\n")
                out.write(content)
                out.write("\n\n")
                print(f"✓ {filepath}")
            except Exception as e:
                print(f"✗ {filepath} - {e}")

print(f"\nGuardado en {output_file}")