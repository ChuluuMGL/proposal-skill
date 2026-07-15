#!/usr/bin/env python3
"""Turn page-level feedback headings into a reviewable final-polish ledger.

Expected heading examples: `## P12`, `### Slide 12`, or `## 第12页`.
Unmapped paragraphs are deliberately retained under “Unmapped feedback” rather
than guessed onto a slide.
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

HEADING = re.compile(r"^#{1,6}\s*(?:P\s*|Slide\s*|Page\s*|第\s*)(\d+)\s*(?:页)?\b", re.I)


def build(source: str) -> str:
    items: list[tuple[str, str]] = []
    current_page = ""
    current_lines: list[str] = []
    unmapped: list[str] = []
    for raw in source.splitlines():
        match = HEADING.match(raw.strip())
        if match:
            if current_page:
                items.append((current_page, " ".join(current_lines).strip()))
            current_page, current_lines = match.group(1), []
        elif current_page:
            if raw.strip():
                current_lines.append(raw.strip())
        elif raw.strip():
            unmapped.append(raw.strip())
    if current_page:
        items.append((current_page, " ".join(current_lines).strip()))
    lines = [
        "# Revision Ledger", "",
        "| Slide | Feedback | Action | Protection impact | Verification | Status |",
        "|---|---|---|---|---|---|",
    ]
    for page, feedback in items:
        lines.append(f"| {page} | {feedback.replace('|', '\\|')} |  |  |  | open |")
    if not items:
        lines.append("|  | No page heading parsed; map feedback manually. |  |  |  | open |")
    if unmapped:
        lines.extend(["", "## Unmapped feedback", "", *[f"- {item}" for item in unmapped]])
    lines.extend(["", "## Completion rule", "", "Every closed row names the revised object and the verification method. Any protection impact must link to the authorization in `baseline-protection.md`.", ""])
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Build a final-polish feedback-to-slide ledger.")
    parser.add_argument("feedback", type=Path, help="UTF-8 Markdown/text feedback file")
    parser.add_argument("--output", type=Path, required=True, help="revision-ledger.md")
    args = parser.parse_args()
    args.output.write_text(build(args.feedback.read_text(encoding="utf-8")), encoding="utf-8")
    print(f"wrote {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
