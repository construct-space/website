---
title: Smart Router
description: Automatically select cost-effective AI models based on task complexity.
---

# Smart Router

The Smart Router skill automatically selects the most cost-effective AI model for each task. Simple questions go to cheap models; complex reasoning uses premium models.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `smart-router` |
| **Category** | Cost Control |
| **Default** | Enabled |

## How It Works

1. **Task Analysis** - Examines the incoming request
2. **Complexity Detection** - Determines task difficulty
3. **Model Selection** - Routes to optimal model tier
4. **Logging** - Records model selection decisions

## Model Tiers

### Budget Tier
**Models**: GLM-4-Flash, DeepSeek
**Cost**: $0.10-0.28 per 1M tokens

Best for:
- Simple Q&A
- Basic lookups
- Quick clarifications
- Status checks

### Balanced Tier
**Models**: GLM-4, DeepSeek-Coder, Claude Haiku
**Cost**: $0.28-2.00 per 1M tokens

Best for:
- Code writing
- General tasks
- Moderate complexity
- Most development work

### Premium Tier
**Models**: Claude Sonnet, Claude Opus
**Cost**: $3-15 per 1M tokens

Best for:
- Complex reasoning
- Architecture decisions
- Nuanced analysis
- Multi-step planning

### Vision Tier
**Models**: GLM-4V, Claude Vision
**Cost**: $1-3 per 1M tokens

Best for:
- Image understanding
- Screenshot analysis
- Visual design review

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `enableCostOptimization` | boolean | true | Prefer cheaper models for simple tasks |
| `defaultTier` | string | "balanced" | Default tier when unsure |
| `taskAnalysis` | boolean | true | Analyze task to determine complexity |

## Example Configuration

```yaml
skills:
  smart-router:
    enabled: true
    enableCostOptimization: true
    defaultTier: balanced
    taskAnalysis: true
```

## Routing Examples

| Request | Detected Tier | Reason |
|---------|---------------|--------|
| "What's the time?" | Budget | Simple factual |
| "Write a login form" | Balanced | Standard code task |
| "Design a scalable auth system" | Premium | Complex architecture |
| "What's in this screenshot?" | Vision | Image input |

## Cost Savings

Typical savings with Smart Router:

| Without | With | Savings |
|---------|------|---------|
| All Sonnet | Smart routing | 40-60% |
| $10/day | $4-6/day | $120-180/month |
