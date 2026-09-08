---
title: Cost Tracker
description: Monitor and control AI API costs in real-time.
---

# Cost Tracker

The Cost Tracker skill monitors AI API costs in real-time during sessions. It can warn when approaching limits and stop sessions that exceed cost thresholds.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `cost-tracker` |
| **Category** | Cost Control |
| **Default** | Enabled |

## How It Works

1. **Session Start** - Initializes cost tracking at zero
2. **After Each Completion** - Logs token usage and estimated cost
3. **Before Each Tool** - Checks if session cost is within limits
4. **Session End** - Provides final cost summary

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `warnThreshold` | number | 1.0 | Warn when session cost exceeds this (USD) |
| `hardLimit` | number | 0 | Stop session at this cost (0 = no limit) |
| `trackByProvider` | boolean | true | Track costs separately per AI provider |

## Example Configuration

```yaml
skills:
  cost-tracker:
    enabled: true
    warnThreshold: 0.50    # Warn at 50 cents
    hardLimit: 2.00        # Stop at $2
    trackByProvider: true
```

## Cost Calculation

Costs are estimated based on token usage:

| Model Tier | Input | Output |
|------------|-------|--------|
| Budget (GLM-4-Flash) | $0.10/1M | $0.10/1M |
| Balanced (Claude Haiku) | $0.25/1M | $1.25/1M |
| Premium (Claude Sonnet) | $3.00/1M | $15.00/1M |

## Session Summary

At the end of each session, you'll see:

```
Session Cost Summary
--------------------
Total tokens: 15,234
Input: 12,100 | Output: 3,134
Estimated cost: $0.47
Provider breakdown:
  - Claude Sonnet: $0.42
  - GLM-4-Flash: $0.05
```

## Best Practices

1. **Set reasonable limits** - Start with $1-2 per session
2. **Watch for warnings** - Adjust approach if costs climb
3. **Use Smart Router** - Let simple tasks use cheaper models
4. **Review summaries** - Understand where costs go
