#!/usr/bin/env python3
"""Remove magenta background from parallax layers and make transparent."""

from PIL import Image
import os

# Magenta color to remove (with tolerance)
MAGENTA = (255, 0, 255)
TOLERANCE = 50  # Color distance tolerance

def color_distance(c1, c2):
    """Calculate Euclidean distance between two RGB colors."""
    return sum((a - b) ** 2 for a, b in zip(c1, c2)) ** 0.5

def remove_magenta(input_path, output_path):
    """Remove magenta background and save as transparent PNG."""
    img = Image.open(input_path)
    img = img.convert("RGBA")

    pixels = img.load()
    width, height = img.size

    # Make magenta pixels transparent
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]

            # Check if pixel is close to magenta
            if color_distance((r, g, b), MAGENTA) < TOLERANCE:
                pixels[x, y] = (r, g, b, 0)  # Make transparent

    img.save(output_path, "PNG")
    print(f"[OK] Processed: {os.path.basename(output_path)}")

def main():
    layers_dir = "assets/hero/layers"

    # Process all PNG files in the layers directory
    for filename in sorted(os.listdir(layers_dir)):
        if filename.endswith(".png"):
            input_path = os.path.join(layers_dir, filename)
            output_path = input_path  # Overwrite original

            print(f"Processing {filename}...")
            remove_magenta(input_path, output_path)

    print("\nDone! All layers processed.")

if __name__ == "__main__":
    main()
