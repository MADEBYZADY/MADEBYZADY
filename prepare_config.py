import os, re
from PIL import Image

# Hardcoded descriptions
FOLDER_DESCRIPTIONS = {
    "ACCOUNTS": "All my links.",
    "PERSONAL WORK": "Personal creative and development projects.", 
    "LOGOS": "Logo designs and brand assets.",
    "COLLABS": "Client work and collaborative projects.",
    "Support ZADY": "Support my work."
}

desktop_folders = [{'name': 'ABOUT ZADY'}]

# # Delete all files from virtual_desktop/_icons directory
# icons_dir = "virtual_desktop/_icons"
# if os.path.exists(icons_dir):
#     for file in os.listdir(icons_dir):
#         file_path = os.path.join(icons_dir, file)
#         try:
#             if os.path.isfile(file_path):
#                 os.unlink(file_path)
#         except Exception as e:
#             print(f"Error deleting {file_path}: {e}")


# Copy handmade icons to virtual_desktop/_icons
handmade_icons_dir = "handmade"
icons_dir = "virtual_desktop/_icons"

if not os.path.exists(icons_dir):
    os.makedirs(icons_dir)

for icon_file in os.listdir(handmade_icons_dir):
    if icon_file.endswith('.ico'):
        src = os.path.join(handmade_icons_dir, icon_file)
        dst = os.path.join(icons_dir, icon_file)
        if os.path.exists(src):
            with open(src, 'rb') as fsrc:
                with open(dst, 'wb') as fdst:
                    fdst.write(fsrc.read())

# Walk virtual_desktop folders
for folder_name in os.listdir("virtual_desktop"):
    if folder_name.startswith("_"):
        continue
        
    folder_path = os.path.join("virtual_desktop", folder_name)
    if not os.path.isdir(folder_path):
        continue

    files = []
    
    # Process files in folder
    for filename in os.listdir(folder_path):
        if os.path.isfile(os.path.join(folder_path, filename)):
            # Check if icon exists
            icon_path = os.path.join("virtual_desktop", "_icons", f"{filename}.ico")
            
            if not os.path.exists(icon_path):
                # Try to create icon from image
                try:
                    img_path = os.path.join(folder_path, filename)
                    img = Image.open(img_path)
                    img = img.resize((32, 32), Image.Resampling.BICUBIC)
                    img.save(icon_path, format='png')
                    files.append(filename)
                    print(f"{filename}")
                except:
                    # Add * prefix if can't create icon
                    print(f"*{filename}")
                    files.append(f"*{filename}")
            else:
                files.append(filename)

    folder_config = {
        "name": folder_name,
        "description": FOLDER_DESCRIPTIONS.get(folder_name, ""),
        "files": sorted(files, key=lambda x: float(x.split(' - ')[0].strip('*')) - (1 if float(x.split(' - ')[0].strip('*')) % 1 != 0 else 0), reverse=True)
    }
    
    desktop_folders.append(folder_config)

desktop_folders.append({'name':'Support ZADY'})
print(desktop_folders)
# Write config
#with open("static/js/config.js", "w") as f:
#    f.write("const DESKTOP_FOLDERS = ")
#    f.write(str(desktop_folders).replace("'", '"'))
#    f.write(";")
