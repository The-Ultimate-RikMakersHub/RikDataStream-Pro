import os
import sys

def verify_static_assets():
    """Validates that all zero-cost assets are local before deployment."""
    required_files = ["index.html", "style.css", "manifest.json", "data/queries.sql"]
    for file_node in required_files:
        if not os.path.exists(file_node):
            print(f"⚠️ Missing critical client asset node: {file_node}")
            sys.exit(1)
    print("✅ Success: All 100% serverless client-side assets verified cleanly.")

if __name__ == "__main__":
    verify_static_assets()
