---
title: Delete Guard
description: Prevent accidental file and data deletion.
---

# Delete Guard

The Delete Guard skill prevents accidental file and data deletion by requiring explicit confirmation with the keyword "DELETE".

## Overview

| Property | Value |
|----------|-------|
| **ID** | `delete-guard` |
| **Category** | Safety |
| **Default** | Enabled |

## How It Works

1. **Detects deletions** - Identifies `delete_file`, `rm`, `unlink` commands
2. **Checks for keyword** - Looks for "DELETE" in your message
3. **Blocks if missing** - Prevents deletion without explicit intent
4. **Allows exceptions** - Temp files and caches don't need confirmation

## Protected Operations

### File Deletions
- `delete_file` tool
- `rm` commands
- `unlink` operations

### Git Operations
- `git reset --hard`
- `git clean`
- `git push --force`

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `requireExplicitDelete` | boolean | true | Require "DELETE" keyword |
| `protectedPaths` | array | ["src/", "app/", "lib/", "packages/"] | Always require confirmation |
| `allowedPatterns` | array | ["*.tmp", "*.log", "node_modules/", ".cache/"] | Skip confirmation |

## Example Configuration

```yaml
skills:
  delete-guard:
    enabled: true
    requireExplicitDelete: true
    protectedPaths:
      - src/
      - app/
      - lib/
      - config/
    allowedPatterns:
      - "*.tmp"
      - "*.log"
      - "node_modules/"
      - ".cache/"
      - "dist/"
```

## How To Delete Files

### Without "DELETE" keyword:
```
Remove the old config file
```
**Result**: Blocked - "To delete files, include 'DELETE' in your message"

### With "DELETE" keyword:
```
DELETE the old config file at src/config.old.ts
```
**Result**: Allowed - File is deleted

## Always-Protected Paths

Some paths always require confirmation, regardless of patterns:

- `src/` - Source code
- `app/` - Application code
- `lib/` - Libraries
- `packages/` - Monorepo packages

## Auto-Allowed Patterns

These can be deleted without the keyword:

- `*.tmp` - Temporary files
- `*.log` - Log files
- `node_modules/` - Dependencies
- `.cache/` - Cache directories
- `dist/` - Build output

## Why This Matters

Without Delete Guard:
- A misunderstood request could delete source files
- "Clean up" could mean different things
- Typos in file paths could cause data loss
- Recovery requires Git history or backups
