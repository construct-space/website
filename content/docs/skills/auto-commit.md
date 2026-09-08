---
title: Auto Commit
description: Intelligently suggest git commits after AI-assisted code changes.
---

# Auto Commit

The Auto Commit skill intelligently suggests git commits after AI-assisted code changes. It analyzes what changed and generates appropriate commit messages.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `auto-commit` |
| **Category** | Productivity |
| **Default** | Disabled |

## How It Works

1. **Tracks changes** - Monitors file operations during session
2. **Analyzes work** - Groups changes by feature/fix/refactor
3. **Generates message** - Creates appropriate commit message
4. **Suggests commit** - Presents for your approval (does not auto-commit)

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `autoSuggest` | boolean | true | Automatically suggest commits |
| `minChanges` | number | 3 | Minimum file changes before suggesting |
| `commitStyle` | string | "conventional" | Message style |
| `includeCoAuthor` | boolean | true | Include AI co-author attribution |

## Example Configuration

```yaml
skills:
  auto-commit:
    enabled: true
    autoSuggest: true
    minChanges: 3
    commitStyle: conventional
    includeCoAuthor: true
```

## Commit Styles

### Conventional (default)
```
feat(auth): add OAuth2 login flow

- Add OAuth2 configuration
- Create login callback handler
- Implement token refresh logic
- Add user session management

Co-authored-by: Construct AI <ai@construct.app>
```

### Simple
```
Add OAuth2 login flow

Co-authored-by: Construct AI <ai@construct.app>
```

### Detailed
```
Add OAuth2 login flow

This commit implements OAuth2 authentication with support for
Google and GitHub providers. Changes include:

Files modified:
- src/auth/oauth.ts (created)
- src/auth/providers/google.ts (created)
- src/auth/providers/github.ts (created)
- src/config/auth.ts (modified)

Co-authored-by: Construct AI <ai@construct.app>
```

## Commit Suggestion Flow

When a session completes with file changes:

```
📝 Suggested Commit

feat(auth): implement user authentication

- Created useAuth composable
- Added login and register pages
- Implemented auth middleware
- Added JWT token handling

[Commit] [Edit Message] [Skip]
```

## Type Detection

The skill analyzes changes to determine the commit type:

| Detected Pattern | Type |
|-----------------|------|
| New feature files | `feat` |
| Bug fixes, error handling | `fix` |
| Code restructuring | `refactor` |
| README, comments | `docs` |
| Test files | `test` |
| Config, dependencies | `chore` |

## Co-Author Attribution

When enabled, commits include:

```
Co-authored-by: Construct AI <ai@construct.app>
```

This provides transparency about AI-assisted code.
