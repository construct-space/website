---
title: Session Summary
description: Automatically generate summaries when sessions complete.
---

# Session Summary

The Session Summary skill automatically generates summaries when sessions complete, enabling easy context resumption in future conversations.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `session-summary` |
| **Category** | Productivity |
| **Default** | Enabled |

## How It Works

1. **Session Completes** - When you finish a conversation
2. **Analysis** - Reviews what was accomplished
3. **Summary Generation** - Creates a structured summary
4. **Persistence** - Saves for future reference

## Summary Contents

Each summary captures:

### What Was Done
- Features implemented
- Bugs fixed
- Files modified
- Commands executed

### Key Decisions
- Architecture choices
- Implementation approaches
- Trade-offs discussed

### Next Steps
- Remaining work
- Open questions
- Suggested follow-ups

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `autoSave` | boolean | true | Save summaries to project |
| `includeToolCalls` | boolean | false | Include tool call details |
| `maxSummaryLength` | number | 2000 | Maximum summary length (characters) |

## Example Configuration

```yaml
skills:
  session-summary:
    enabled: true
    autoSave: true
    includeToolCalls: false
    maxSummaryLength: 2000
```

## Example Summary

```markdown
## Session Summary - Jan 14, 2026

### Completed
- Implemented user authentication with JWT
- Created login and register pages
- Added auth middleware for protected routes

### Files Modified
- src/composables/useAuth.ts (created)
- src/pages/login.vue (created)
- src/pages/register.vue (created)
- src/middleware/auth.ts (created)

### Decisions
- Used JWT over sessions for stateless auth
- Stored tokens in httpOnly cookies
- Added 30-day token expiry

### Next Steps
- Add password reset flow
- Implement OAuth providers
- Add email verification
```

## Resuming Context

When starting a new session:

```
Continue working on the authentication system from yesterday
```

The AI can reference the previous summary to understand context and pick up where you left off.

## Storage Location

Summaries are stored in:
```
project/
  .construct/
    sessions/
      2026-01-14-auth-implementation.md
      2026-01-13-project-setup.md
```
