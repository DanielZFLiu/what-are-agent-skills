# Evaluating skill output quality

> Source: https://agentskills.io/skill-creation/evaluating-skills

How to test whether your skill produces good outputs using eval-driven iteration.

## Designing test cases

A test case has three parts:

- **Prompt**: a realistic user message
- **Expected output**: a human-readable description of what success looks like
- **Input files** (optional): files the skill needs to work with

Store test cases in `evals/evals.json` inside your skill directory:

```json
{
	"skill_name": "csv-analyzer",
	"evals": [
		{
			"id": 1,
			"prompt": "I have a CSV of monthly sales data in data/sales_2025.csv. Can you find the top 3 months by revenue and make a bar chart?",
			"expected_output": "A bar chart image showing the top 3 months by revenue, with labeled axes and values.",
			"files": ["evals/files/sales_2025.csv"]
		}
	]
}
```

**Tips for writing good test prompts:**

- Start with 2-3 test cases
- Vary the prompts (different phrasings, levels of detail, formality)
- Cover edge cases
- Use realistic context (file paths, column names, personal context)

## Running evals

Run each test case twice: once **with the skill** and once **without it**. This gives you a baseline to compare against.

### Workspace structure

```
csv-analyzer/
├── SKILL.md
└── evals/
    └── evals.json
csv-analyzer-workspace/
└── iteration-1/
    ├── eval-top-months-chart/
    │   ├── with_skill/
    │   │   ├── outputs/
    │   │   ├── timing.json
    │   │   └── grading.json
    │   └── without_skill/
    │       ├── outputs/
    │       ├── timing.json
    │       └── grading.json
    └── benchmark.json
```

### Capturing timing data

```json
{
	"total_tokens": 84852,
	"duration_ms": 23332
}
```

## Writing assertions

Assertions are verifiable statements about what the output should contain.

Good assertions:

- "The output file is valid JSON"
- "The bar chart has labeled axes"
- "The report includes at least 3 recommendations"

Weak assertions:

- "The output is good"
- "The output uses exactly the phrase 'Total Revenue: $X'"

Add assertions to each test case:

```json
{
	"assertions": [
		"The output includes a bar chart image file",
		"The chart shows exactly 3 months",
		"Both axes are labeled",
		"The chart title or caption mentions revenue"
	]
}
```

## Grading outputs

Evaluate each assertion against actual outputs. Record **PASS** or **FAIL** with specific evidence:

```json
{
	"assertion_results": [
		{
			"text": "The output includes a bar chart image file",
			"passed": true,
			"evidence": "Found chart.png (45KB) in outputs directory"
		},
		{
			"text": "Both axes are labeled",
			"passed": false,
			"evidence": "Y-axis is labeled 'Revenue ($)' but X-axis has no label"
		}
	],
	"summary": {
		"passed": 3,
		"failed": 1,
		"total": 4,
		"pass_rate": 0.75
	}
}
```

## Aggregating results

```json
{
	"run_summary": {
		"with_skill": {
			"pass_rate": { "mean": 0.83, "stddev": 0.06 },
			"time_seconds": { "mean": 45.0, "stddev": 12.0 },
			"tokens": { "mean": 3800, "stddev": 400 }
		},
		"without_skill": {
			"pass_rate": { "mean": 0.33, "stddev": 0.1 },
			"time_seconds": { "mean": 32.0, "stddev": 8.0 },
			"tokens": { "mean": 2100, "stddev": 300 }
		},
		"delta": {
			"pass_rate": 0.5,
			"time_seconds": 13.0,
			"tokens": 1700
		}
	}
}
```

## Analyzing patterns

- Remove assertions that always pass in both configurations
- Investigate assertions that always fail in both
- Study assertions that pass with the skill but fail without
- Tighten instructions when results are inconsistent
- Check time and token outliers

## Iterating on the skill

The loop:

1. Give the eval signals and current `SKILL.md` to an LLM and ask it to propose improvements
2. Review and apply the changes
3. Rerun all test cases in a new `iteration-<N+1>/` directory
4. Grade and aggregate the new results
5. Review with a human. Repeat.

Stop when you're satisfied with the results or no longer seeing meaningful improvement.
