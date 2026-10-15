#!/usr/bin/env python3
"""Check that the release version is consistent across the repository.

Stdlib only. Verifies:
  - skill.json (and package.json, if present) parse and carry a clean x.y.z version
  - README badges (README.md, README.zh-CN.md) show the same version
  - any "softwareVersion" in the READMEs matches
  - CHANGELOG.md has a heading for the version, e.g. "## [1.2.3] - 2026-01-01"

Exit code 0 when consistent, 1 otherwise.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SEMVER = re.compile(r"^\d+\.\d+\.\d+$")
BADGE = re.compile(r"img\.shields\.io/badge/version-([0-9][0-9A-Za-z.\-]*?)-[A-Za-z0-9]+\)")
SOFTWARE_VERSION = re.compile(r'"softwareVersion"\s*:\s*"([^"]+)"')


def main() -> int:
    errors: list[str] = []

    try:
        version = json.loads((ROOT / "skill.json").read_text(encoding="utf-8"))["version"]
    except (OSError, ValueError, KeyError) as exc:
        print(f"FAIL: cannot read skill.json version: {exc}")
        return 1
    if not SEMVER.match(version):
        errors.append(f"skill.json version {version!r} is not x.y.z")

    package = ROOT / "package.json"
    if package.is_file():
        try:
            pkg_version = json.loads(package.read_text(encoding="utf-8")).get("version")
        except ValueError as exc:
            errors.append(f"package.json is not valid JSON: {exc}")
        else:
            if pkg_version is not None and pkg_version != version:
                errors.append(f"package.json version {pkg_version} != skill.json {version}")

    for name in ("README.md", "README.zh-CN.md"):
        path = ROOT / name
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        badges = BADGE.findall(text)
        if not badges:
            errors.append(f"{name}: no version badge found")
        for found in badges:
            if found != version:
                errors.append(f"{name}: version badge {found} != skill.json {version}")
        for found in SOFTWARE_VERSION.findall(text):
            if found != version:
                errors.append(f"{name}: softwareVersion {found} != skill.json {version}")

    changelog = ROOT / "CHANGELOG.md"
    if not changelog.is_file():
        errors.append("CHANGELOG.md is missing")
    else:
        heading = re.compile(rf"^## \[?{re.escape(version)}\]?(\s|$)", re.MULTILINE)
        if not heading.search(changelog.read_text(encoding="utf-8")):
            errors.append(f"CHANGELOG.md has no heading for {version}")

    if errors:
        for error in errors:
            print(f"FAIL: {error}")
        return 1
    print(json.dumps({"pass": True, "version": version}))
    return 0


if __name__ == "__main__":
    sys.exit(main())
