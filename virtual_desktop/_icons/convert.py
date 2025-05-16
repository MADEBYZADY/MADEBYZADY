from PIL import Image
from pathlib import Path

for ico_path in Path('.').rglob('*.ico'):
    png_path = ico_path.with_suffix('.png')
    with Image.open(ico_path) as img:
        img.save(png_path)
    ico_path.unlink()