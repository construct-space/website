---
title: Planner Agent
description: Technical architect for planning and analysis.
---

# Planner Agent

The Planner agent is your technical architect. It explores codebases, analyzes patterns, and creates detailed implementation plans—without modifying any files.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `planner` |
| **Category** | Specialized |
| **Icon** | Clipboard List |
| **Max Iterations** | 25 |

## Capabilities

The Planner agent can:

- Analyze code structure and patterns
- Create detailed implementation plans
- Identify potential issues and risks
- Suggest architectural improvements
- Document findings clearly
- Consider scalability and maintainability

## Available Tools

### Read Operations
- `read_file` - Read file contents
- `file_search` - Find files by name
- `grep_search` - Search code patterns
- `list_directory` - List folder contents
- `get_file_tree` - View project structure

### Context
- `list_project_tasks` - View existing tasks
- `get_task` - Get task details
- `list_project_designs` - View designs

## Read-Only Access

The Planner agent is intentionally read-only. It cannot:

- Create, modify, or delete files
- Execute commands
- Create tasks, events, or designs
- Push code changes

This restriction ensures planning is separate from execution, reducing the risk of unintended changes.

## Planning Format

The Planner provides structured plans:

### 1. Overview
Brief summary of the problem and proposed solution.

### 2. Analysis
- Current state of the codebase
- Requirements and constraints
- Dependencies and integrations

### 3. Approach
- Recommended implementation strategy
- Technology choices and rationale
- Alternative approaches considered

### 4. Steps
Detailed implementation steps with:
- Specific files to create/modify
- Code patterns to follow
- Order of operations

### 5. Risks
- Potential issues and edge cases
- Mitigation strategies
- Testing requirements

### 6. Dependencies
- External packages needed
- API integrations
- Team dependencies

## Example Interactions

**Plan a feature**:
```
@planner Plan the implementation of user authentication with OAuth2
```

**Analyze architecture**:
```
@planner Review the current API structure and suggest improvements for scalability
```

**Investigate issues**:
```
@planner Analyze why the application is slow and propose optimization strategies
```

**Plan refactoring**:
```
@planner Create a plan to migrate from JavaScript to TypeScript
```

## Working with the Planner

For best results:

1. **Provide context** - What problem are you solving?
2. **Mention constraints** - Timeline, technology limits
3. **Ask specific questions** - "How should we structure X?"
4. **Review plans carefully** - Plans inform implementation

## Handoff to Code Agent

Once you approve a plan, hand off to the Code agent:

```
@code Implement the authentication plan from the Planner
```

The Code agent can reference the plan and execute the steps.
