---
title: Git Agent
description: Version control assistant for Git operations.
---

# Git Agent

The Git agent helps you manage version control, create commits, work with branches, and handle pull requests.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `git` |
| **Category** | Specialized |
| **Icon** | Git Branch |
| **Max Iterations** | 15 |

## Capabilities

The Git agent can:

- View status, diff, and history
- Create commits with messages
- Push and pull changes
- Create and switch branches
- Create pull requests
- Read files and search code

## Available Tools

### Status & History
- `git_status` - View working tree status
- `git_diff` - Show file changes
- `git_log` - View commit history

### Commits
- `git_commit` - Create a commit
- `git_push` - Push to remote

### Branches
- `git_branch` - List/create branches
- `git_checkout` - Switch branches
- `git_merge` - Merge branches

### Pull Requests
- `create_pr` - Create pull request
- `list_prs` - List pull requests

### Read Operations
- `read_file` - Read file contents
- `grep_search` - Search code

## Commit Message Format

The Git agent follows conventional commit format:

```
type(scope): description
```

### Types

| Type | Use Case |
|------|----------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting, no code change |
| `refactor` | Code restructuring |
| `test` | Adding tests |
| `chore` | Maintenance tasks |

### Examples

```
feat(auth): add OAuth2 support
fix(api): handle null response in user endpoint
docs(readme): update installation instructions
refactor(utils): extract date formatting functions
```

## Example Interactions

**Check status**:
```
@git What files have been modified since the last commit?
```

**Create a commit**:
```
@git Commit the changes in auth/ with a message about adding login validation
```

**Work with branches**:
```
@git Create a new branch called feature/user-profiles and switch to it
```

**Create a PR**:
```
@git Create a pull request for this branch to main with a summary of changes
```

**View history**:
```
@git Show the last 10 commits with their messages
```

## Safety Guidelines

The Git agent follows these safety principles:

- **Explain before executing** - Always describes what will happen
- **Descriptive messages** - Writes clear, meaningful commit messages
- **Warn about destructive operations** - Force push, reset, etc.
- **Preserve history** - Avoids rewriting shared history

## Blocked Operations

The Git agent cannot:
- Write or create files (use Code agent)
- Execute arbitrary commands
- Create tasks or events
- Modify designs
