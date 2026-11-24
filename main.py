#!/usr/bin/env python3
"""Writes one satirical sentence to /output/entry.txt."""
import os

SENTENCE = (
    "The senator who just drafted a 400-page bill to govern artificial "
    "intelligence spent the morning asking his intern to print his Word "
    "document, scan it, and email it back to him as a PDF."
)

def main() -> None:
    os.makedirs("/output", exist_ok=True)
    with open("/output/entry.txt", "w", encoding="utf-8") as f:
        f.write(SENTENCE + "\n")

if __name__ == "__main__":
    main()
