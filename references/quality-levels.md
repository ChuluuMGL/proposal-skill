# Three-Layer Acceptance Reports

Do not merge these reports. Copy the templates below into the final-polish folder and state the exact inspection scope.

## Technical QA

- Status: passed / warnings / failed
- PPTX package and page count:
- Script mapping:
- Placeholder, overflow, and structural audit:
- Protected-element comparison:
- Commands and output location:
- Remaining technical exceptions:

## Visual QA

- Status: passed / warnings / failed
- Render/open method:
- Pages reviewed full-size (and pages not reviewed):
- Crop, alignment, contrast, whitespace, table/chart findings:
- P0/P1 defects remaining:
- Remaining visual exceptions:

## Commercial QA

- Status: passed / warnings / failed
- Story-map and chapter-transition conclusion:
- Client-facing copy conclusion:
- Evidence, KPI, budget/scope/ownership boundary conclusion:
- Remaining commercial exceptions:

## Delivery status rule

| Combination | Allowed handoff label |
|---|---|
| Technical passed; visual/commercial not reviewed | `技术通过，待视觉/商业复核` |
| All passed | `客户可交付版` |
| Any failed | `待确认版` or `blocked` with named issue |
