# Optimizing skill descriptions

> Source: https://agentskills.io/skill-creation/optimizing-descriptions

How to improve your skill's description so it triggers reliably on relevant prompts.

## How skill triggering works

Agents use progressive disclosure to manage context. At startup, they load only the `name` and `description` of each available skill. When a user's task matches a description, the agent reads the full `SKILL.md` into context.

The description carries the entire burden of triggering. If the description doesn't convey when the skill is useful, the agent won't know to reach for it.

Important nuance: agents typically only consult skills for tasks that require knowledge or capabilities beyond what they can handle alone.

## Writing effective descriptions

- **Use imperative phrasing.** "Use this skill when..." rather than "This skill does..."
- **Focus on user intent, not implementation.**
- **Err on the side of being pushy.** Explicitly list contexts where the skill applies.
- **Keep it concise.** A few sentences to a short paragraph. Hard limit of 1024 characters.

## Designing trigger eval queries

Test with ~20 queries: 8-10 that should trigger and 8-10 that shouldn't.

```json
[
	{
		"query": "I've got a spreadsheet with revenue in col C and expenses in col D — can you add a profit margin column?",
		"should_trigger": true
	},
	{ "query": "whats the quickest way to convert this json file to yaml", "should_trigger": false }
]
```

### Should-trigger queries

Vary along: phrasing, explicitness, detail, and complexity.

### Should-not-trigger queries

The most valuable negatives are **near-misses** — queries that share keywords but need something different.

## Testing whether a description triggers

Run each query through your agent and observe whether the skill is invoked. Run multiple times (3+) and compute a **trigger rate**.

## Avoiding overfitting

Split your query set:

- **Train set (~60%)**: queries you use to guide improvements
- **Validation set (~40%)**: queries you set aside to check generalization

## The optimization loop

1. Evaluate on both train and validation sets
2. Identify failures in the train set
3. Revise the description (generalize, don't overfit to specific keywords)
4. Repeat until train set passes or improvement plateaus
5. Select the best iteration by validation pass rate

Five iterations is usually enough.

## Example: before and after

```yaml
# Before
description: Process CSV files.

# After
description: >
  Analyze CSV and tabular data files — compute summary statistics,
  add derived columns, generate charts, and clean messy data. Use this
  skill when the user has a CSV, TSV, or Excel file and wants to
  explore, transform, or visualize the data, even if they don't
  explicitly mention "CSV" or "analysis."
```
