---
title: Explorer Agent
description: Read-only codebase exploration and documentation.
---

# Explorer Agent

The Explorer agent helps you understand code. It navigates projects, finds relevant files, and explains functionality—all without making any changes.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `explorer` |
| **Category** | Specialized |
| **Icon** | Compass |
| **Max Iterations** | 20 |

## Capabilities

The Explorer agent can:

- Read and analyze files
- Search for patterns and keywords
- List directory contents
- Get file tree structure
- Explain code functionality
- Create mental maps of codebase structure

## Available Tools

- `read_file` - Read file contents
- `file_search` - Find files by name
- `grep_search` - Search code patterns
- `list_directory` - List folder contents
- `get_file_tree` - View project structure

## Read-Only Focus

The Explorer is intentionally read-only. It focuses on understanding and explaining, not implementing. This makes it safe to use when you just want to learn about the codebase.

## Example Interactions

**Find files**:
```
@explorer Where are the authentication-related files in this project?
```

**Understand code**:
```
@explorer Explain how the useAuth composable works
```

**Trace functionality**:
```
@explorer How does data flow from the login form to the API?
```

**Map structure**:
```
@explorer Give me an overview of the project structure and key directories
```

**Find patterns**:
```
@explorer Show me all files that import the useApi composable
```

## What Explorer Is Good For

### Onboarding
When joining a new project, use Explorer to understand:
- Project structure and organization
- Key files and their purposes
- Patterns and conventions used
- Dependencies and integrations

### Debugging
Before fixing a bug, use Explorer to:
- Find where functionality is implemented
- Trace data flow through the system
- Understand related code
- Identify potential side effects

### Code Review
When reviewing code, use Explorer to:
- Understand the context of changes
- Find related files that might need updates
- Check for consistent patterns
- Identify potential issues

## Working with the Explorer

For best results:

1. **Ask specific questions** - "How does X work?" vs "Tell me about the code"
2. **Provide file hints** - Mention directories or file patterns if known
3. **Follow up** - Drill down into specific files or functions
4. **Take notes** - Explorer's explanations can guide your implementation
