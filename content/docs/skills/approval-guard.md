---
title: Approval Guard
description: Prevent dangerous commands from running without explicit approval.
---

# Approval Guard

The Approval Guard skill prevents the AI from automatically running servers, installing packages, or executing potentially dangerous commands without your explicit approval.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `approval-guard` |
| **Category** | Safety |
| **Default** | Enabled |

## How It Works

1. **Command Detection** - Identifies commands that require approval
2. **Blocking** - Pauses execution and asks for permission
3. **Loop Detection** - Stops repeated failing commands
4. **Iteration Limits** - Prevents runaway agent execution

## Commands Requiring Approval

By default, these commands need approval:

### Package Managers
- `npm start`, `npm run dev`, `npm install`
- `yarn add`, `yarn dev`
- `pnpm install`, `pnpm dev`
- `pip install`, `pip3 install`
- `cargo install`

### Servers & Containers
- `docker run`, `docker-compose up`
- Any long-running server process

### System Commands
- Commands with `sudo`
- Scripts that modify system state

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `requireApproval` | array | (see above) | Commands that always require approval |
| `maxIterations` | number | 20 | Max agent iterations before forcing stop |
| `loopDetection` | boolean | true | Detect and stop command loops |

## Example Configuration

```yaml
skills:
  approval-guard:
    enabled: true
    maxIterations: 30
    loopDetection: true
    requireApproval:
      - npm start
      - npm run dev
      - docker run
      - pip install
```

## How Approval Works

When a protected command is detected:

```
The AI wants to run: npm run dev

This command requires your approval.
[Approve] [Deny] [Approve All Similar]
```

Clicking "Approve" allows that specific command.
Clicking "Approve All Similar" allows all similar commands for the session.

## Loop Detection

If the same command fails multiple times:

```
Loop detected: npm install has failed 3 times
Stopping to prevent infinite loop.
Please review the error and try a different approach.
```

## Why This Matters

Without Approval Guard:
- AI could start servers on random ports
- Package installations could add unwanted dependencies
- Long-running processes could consume resources
- Failed commands could repeat indefinitely
