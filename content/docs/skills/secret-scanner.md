---
title: Secret Scanner
description: Detect and block accidental exposure of secrets and API keys.
---

# Secret Scanner

The Secret Scanner skill detects and blocks accidental exposure of secrets, API keys, and credentials in code and commits.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `secret-scanner` |
| **Category** | Safety |
| **Default** | Enabled |

## How It Works

1. **File Writes** - Scans content before writing to files
2. **Git Commits** - Scans staged content before commits
3. **Detection** - Identifies patterns that look like secrets
4. **Blocking** - Stops the operation and alerts you

## Detected Patterns

### Cloud Providers
- AWS Access Keys (`AKIA...`)
- AWS Secret Keys
- Google Cloud credentials
- Azure credentials

### Development Platforms
- GitHub tokens (`ghp_...`, `gho_...`)
- GitLab tokens
- Slack tokens (`xox...`)

### Generic Patterns
- API keys (`api_key`, `apikey`, etc.)
- Private keys (`-----BEGIN RSA PRIVATE KEY-----`)
- JWTs (`eyJ...`)
- Connection strings with passwords

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `blockOnDetection` | boolean | true | Block action when secret detected |
| `patterns` | array | [] | Additional regex patterns to detect |
| `allowedFiles` | array | [".env.example", "*.example"] | Files exempt from scanning |

## Example Configuration

```yaml
skills:
  secret-scanner:
    enabled: true
    blockOnDetection: true
    allowedFiles:
      - ".env.example"
      - "*.example"
      - "docs/examples/*"
    patterns:
      - "my-custom-key-[a-z0-9]{32}"
```

## When Secrets Are Detected

```
⚠️ Secret Scanner Alert

Potential secret detected in src/config.ts:
  Line 15: api_key = "sk_live_abc123..."

Action blocked. Please:
1. Remove the secret from the file
2. Use environment variables instead
3. Add to .gitignore if needed

[Show Location] [Allow This Once] [Add to Allowlist]
```

## Best Practices

### Use Environment Variables
```typescript
// Bad
const apiKey = "sk_live_abc123...";

// Good
const apiKey = process.env.API_KEY;
```

### Use .env Files
```bash
# .env (gitignored)
API_KEY=sk_live_abc123...
```

### Provide Examples
```bash
# .env.example (committed)
API_KEY=your-api-key-here
```

## Recovering From Leaks

If a secret is accidentally committed:

1. **Revoke the secret immediately** - Generate a new one
2. **Remove from history** - Use `git filter-branch` or BFG Repo-Cleaner
3. **Force push** - Update all branches
4. **Notify team** - Ensure everyone pulls the new history
