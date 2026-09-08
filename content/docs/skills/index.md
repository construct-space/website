---
title: Skills
description: Middleware hooks that extend AI behavior in Construct.
---

# Skills

Skills are middleware hooks that extend and control AI behavior in Construct. They can monitor sessions, validate actions, enforce policies, and add custom functionality.

## How Skills Work

Skills hook into the AI lifecycle at key points:

1. **Session events** - When sessions start, complete, or error
2. **Tool calls** - Before/after tools execute
3. **Agent events** - When agents are dispatched or switched
4. **Context changes** - When project or mode changes

Each skill can:
- **Log** information about events
- **Validate** and optionally cancel operations
- **Transform** data passing through

## Built-in Skills

Construct includes 10 built-in skills:

| Skill | Purpose | Default |
|-------|---------|---------|
| [Cost Tracker](/docs/skills/cost-tracker) | Monitor AI API costs | Enabled |
| [Approval Guard](/docs/skills/approval-guard) | Require approval for dangerous commands | Enabled |
| [Smart Router](/docs/skills/smart-router) | Route to cost-effective models | Enabled |
| [Session Summary](/docs/skills/session-summary) | Generate session summaries | Enabled |
| [Rate Limiter](/docs/skills/rate-limiter) | Prevent API abuse | Enabled |
| [Secret Scanner](/docs/skills/secret-scanner) | Detect exposed secrets | Enabled |
| [Tool Guardian](/docs/skills/tool-guardian) | Control tool access | Disabled |
| [Session Logger](/docs/skills/session-logger) | Log all session events | Enabled |
| [Delete Guard](/docs/skills/delete-guard) | Prevent accidental deletion | Enabled |
| [Auto Commit](/docs/skills/auto-commit) | Suggest git commits | Disabled |

## Skill Categories

### Safety Skills
Prevent accidents and protect your codebase:
- **Approval Guard** - Blocks dangerous commands until approved
- **Secret Scanner** - Detects API keys and secrets before commit
- **Delete Guard** - Requires confirmation for deletions
- **Tool Guardian** - Controls which tools can execute

### Cost Control Skills
Manage AI spending:
- **Cost Tracker** - Monitors real-time API costs
- **Smart Router** - Uses cheaper models for simple tasks
- **Rate Limiter** - Prevents runaway tool usage

### Productivity Skills
Enhance your workflow:
- **Session Summary** - Remembers what happened in each session
- **Auto Commit** - Suggests meaningful commit messages
- **Session Logger** - Provides debugging information

## Configuring Skills

Skills are configured in your project's settings or `context/skills/` directory. Each skill has its own configuration options.

Example configuration:

```yaml
skills:
  cost-tracker:
    enabled: true
    warnThreshold: 1.0
    hardLimit: 5.0

  approval-guard:
    enabled: true
    maxIterations: 20
```

## Custom Skills

You can create custom skills by adding files to `context/skills/custom/`. See [Creating Custom Skills](/docs/skills/custom) for details.
