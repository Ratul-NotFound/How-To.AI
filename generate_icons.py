from PIL import Image, ImageDraw, ImageFont
import os

public_dir = r"e:\Project\how to\public"

def create_icon(size, filename):
    img = Image.new("RGBA", (size, size), (3, 7, 18, 255)) # Dark navy
    draw = ImageDraw.Draw(img)
    
    # Outer rounded rect border
    margin = int(size * 0.08)
    corner = int(size * 0.22)
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=corner,
        fill=(37, 99, 235, 255), # Blue-600
        outline=(96, 165, 250, 255),
        width=int(size * 0.02)
    )
    
    # Draw simple letter 'H'
    h_w = int(size * 0.12)
    top = int(size * 0.28)
    bottom = int(size * 0.72)
    left = int(size * 0.32)
    right = int(size * 0.68)
    mid_y = int(size * 0.50)
    
    # Left bar
    draw.rectangle([left, top, left + h_w, bottom], fill=(255, 255, 255, 255))
    # Right bar
    draw.rectangle([right - h_w, top, right, bottom], fill=(255, 255, 255, 255))
    # Cross bar
    draw.rectangle([left, mid_y - (h_w // 2), right, mid_y + (h_w // 2)], fill=(255, 255, 255, 255))
    
    path = os.path.join(public_dir, filename)
    img.save(path, "PNG")
    print(f"Created {path}")

create_icon(192, "icon-192.png")
create_icon(512, "icon-512.png")
create_icon(32, "favicon.ico")
