FOLDERS_ORDERED = [
    "ABOUT ZADY",
    "PERSONAL WORK",
    "COMMS & COLLABS",
    "LOGOS",
    "ACCOUNTS",
    "SUPPORT ZADY",
]
FOLDER_DESCRIPTIONS = {
    "ACCOUNTS": "ALL MY LINKS.",
    "PERSONAL WORK": "MY OWN PROJECTS.", 
    "LOGOS": "LOGO DESIGNS.",
    "COMMS & COLLABS": "CLIENT WORK, COMMISSIONS & COLLABORATIVE PROJECTS.",
}

import os, re, json
try:
    from PIL import Image
except:
    print('stai ca iti lipseste perna')
    os.system('pip install pillow')
    os.system('start "" https://i.ibb.co/HTXTxmDP/Untitled.jpg')
    exit()

link_store = {}
desktop_folders = []

# se sterg toate iconurile generate ca nu stiu care sunt actualizate
icons_dir = "virtual_desktop/_icons"
if os.path.exists(icons_dir):
    for file in os.listdir(icons_dir):
        file_path = os.path.join(icons_dir, file)
        try:
            if os.path.isfile(file_path):
                os.unlink(file_path)
        except Exception as e:
            print(f"Error deleting {file_path}: {e}")


handmade_icons_dir = "handmade"
icons_dir = "virtual_desktop/_icons"
if not os.path.exists(icons_dir):
    os.makedirs(icons_dir)

for icon_file in os.listdir(handmade_icons_dir):
    if 1:#icon_file.endswith('.ico'):
        src = os.path.join(handmade_icons_dir, icon_file)
        dst = os.path.join(icons_dir, icon_file)
        if os.path.exists(src):
            with open(src, 'rb') as fsrc:
                with open(dst, 'wb') as fdst:
                    fdst.write(fsrc.read())

for folder_name in FOLDERS_ORDERED: #os.listdir("virtual_desktop"):
    if folder_name.startswith("_"):
        continue

    folder_path = os.path.join("virtual_desktop", folder_name)
    if not os.path.isdir(folder_path):
        desktop_folders.append({'name': folder_name})
        continue

    files = []
    for filename in os.listdir(folder_path):
        if os.path.isfile(os.path.join(folder_path, filename)):
            if folder_name == "ACCOUNTS":
                with open(os.path.join(folder_path, filename), "r", encoding="utf-8") as f:
                    content = [x.strip() for x in f.readlines()]
                filename = filename.removesuffix(".txt") + ".url"
                link_store[filename.split(' - ', 1)[-1]] = content[0]
                if len(content) == 1:
                    content.append(filename.split(' - ', 1)[-1].split(' ZADY')[0].removesuffix('.url'))
                if os.path.exists(os.path.join("virtual_desktop", "_icons", f"{content[1]}.ico")):
                    img = Image.open(os.path.join("virtual_desktop", "_icons", f"{content[1]}.ico"))
                    img = Image.open(img_path)
                    img = img.resize((32, 32), Image.Resampling.BICUBIC)
                    img.save(os.path.join("virtual_desktop", "_icons", f"{filename}.png"), format='png')
                else:
                    with open(os.path.join("virtual_desktop", "_icons", f"{content[1]}.png"), 'rb') as fsrc:
                        with open(os.path.join("virtual_desktop", "_icons", f"{filename}.png"), 'wb') as fdst:
                            fdst.write(fsrc.read())
                files.append(filename)
            else:
                icon_path = os.path.join("virtual_desktop", "_icons", f"{filename}.png")
                if not os.path.exists(icon_path):
                    try:
                        img_path = os.path.join(folder_path, filename)
                        img = Image.open(img_path)
                        img = img.resize((32, 32), Image.Resampling.BICUBIC)
                        img.save(icon_path, format='png')
                        files.append(filename)
                        print(f"am generat icon pentru {filename}")
                    except Exception as e:
                        if filename.endswith('.html'):
                            filename = filename.strip(".html") + ".mp4"
                        files.append(f"*{filename}")
                        print(f"eroare la generarea iconului pentru *{filename}, {e}")
                else:
                    files.append(filename)

    folder_config = {
        "name": folder_name,
        "description": FOLDER_DESCRIPTIONS.get(folder_name, ""),
        "files": sorted(files, key=lambda x: float(x.split(' - ')[0].strip('*')) - (1 if float(x.split(' - ')[0].strip('*')) % 1 != 0 and folder_name != 'ACCOUNTS' else 0), reverse=folder_name != 'ACCOUNTS')
    }
    print(folder_config)
    
    desktop_folders.append(folder_config)

#desktop_folders.append({'name':'SUPPORT ZADY'})

# Write config
with open("script.js", "r", encoding="utf-8") as f:
    content = f.read()

with open("script.js", "w", encoding="utf-8") as f:
    f.write("const LINK_STORE = ")
    f.write(json.dumps(link_store))
    f.write(";\n\n")
    f.write("const DESKTOP_FOLDERS = ")
    f.write(json.dumps(desktop_folders))
    f.write(";\n\n")
    f.write("class Folder" + content.split("class Folder", 1)[-1])
