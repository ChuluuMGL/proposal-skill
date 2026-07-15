# Manual-Edit Protection Protocol

## Protection register

Before editing, create `baseline-protection.md` with this table. A blank or unreviewed register does not authorize a rebuild.

| Slide | Protected object/copy | Protection type | Evidence | Authorized change | Owner/status |
|---|---|---|---|---|---|
| 12 | Hero image crop | bbox + crop | `protected-elements.json` | none | protected |

Protection types: `text`, `image bbox`, `image crop`, `brand element`, `whole slide`, or `layout relationship`.

## Rules

- The named/latest deck is the baseline. Make a copy before modifying it.
- Preserve user-written copy verbatim unless the ledger says it may be changed.
- Preserve image crop as well as image position; a correctly placed image with a changed crop is still a regression.
- Preserve locked brand assets, footer/page-number grammar, and confirmed page structures.
- If an authorized change affects a protected object, record previous value, replacement, reason, approver, and verification in the ledger.
- Do not infer authorization from a general request such as “polish it.” Ask only when the change would materially alter confirmed content.

## Evidence commands

```bash
python3 scripts/compare_protected_elements.py capture baseline.pptx protected-elements.json
python3 scripts/compare_protected_elements.py compare protected-elements.json revised.pptx --report protected-diff.md
```

The script is a difference detector, not automatic permission. Review its output against the human register.
