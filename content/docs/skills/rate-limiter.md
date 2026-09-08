---
title: Rate Limiter
description: Prevent API abuse and runaway tool usage.
---

# Rate Limiter

The Rate Limiter skill prevents API abuse and runaway tool usage by enforcing rate limits on tool calls.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `rate-limiter` |
| **Category** | Cost Control |
| **Default** | Enabled |

## How It Works

1. **Tracks tool calls** - Counts calls per minute and per session
2. **Checks limits** - Before each tool execution
3. **Warns or blocks** - When approaching or exceeding limits
4. **Logs usage** - For monitoring and debugging

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `maxCallsPerMinute` | number | 60 | Maximum tool calls per minute |
| `maxCallsPerSession` | number | 0 | Maximum calls per session (0 = unlimited) |
| `blockedAfterLimit` | boolean | false | Block all calls after limit (vs warning) |

## Example Configuration

```yaml
skills:
  rate-limiter:
    enabled: true
    maxCallsPerMinute: 60
    maxCallsPerSession: 500
    blockedAfterLimit: true
```

## Rate Limit Warnings

When approaching limits:

```
⚠️ Rate limit warning
Tool calls this minute: 50/60
Consider pausing to avoid hitting the limit.
```

When exceeded (if blocking enabled):

```
🛑 Rate limit exceeded
Tool calls this minute: 60/60
Please wait before continuing.
Limit resets in: 32 seconds
```

## Why Rate Limits Matter

### Prevent Runaway Loops
Without limits, a bug could cause infinite tool calls:
```
read_file → error → retry → error → retry...
```

### Control Costs
More tool calls = more API usage = higher costs.

### Improve Quality
Rapid-fire calls often indicate the AI is flailing rather than thinking.

## Best Practices

1. **Start with defaults** - 60/minute is reasonable
2. **Add session limits** - Prevents very long runaway sessions
3. **Enable blocking** - For production safety
4. **Monitor patterns** - High rates may indicate issues
