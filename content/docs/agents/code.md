---
title: Code Agent
description: Full codebase access for development, including file editing and command execution.
---

# Code Agent

The Code agent is your expert coding assistant with complete access to the codebase. It can read, write, and modify files, execute shell commands, and help you build features.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `code` |
| **Category** | Specialized |
| **Icon** | Code |
| **Max Iterations** | 30 |

## Capabilities

The Code agent can:

- Read, write, and modify files
- Execute shell commands safely
- Implement features and fix bugs
- Write clean, maintainable code
- Navigate project structure
- Search for code patterns
- Run tests and build commands

## Available Tools

### File Operations
- `read_file` - Read file contents
- `write_file` - Write to existing file
- `create_file` - Create new file
- `delete_file` - Delete file

### Search Operations
- `file_search` - Search for files by name
- `grep_search` - Search file contents
- `list_directory` - List directory contents
- `get_file_tree` - Get project file tree

### Execution
- `run_command` - Execute shell commands

### Path Utilities
- `path_resolve` - Resolve file paths
- `path_exists` - Check if path exists

## Blocked Tools

The Code agent cannot access:
- Calendar events
- Task management
- UI/design operations
- Image generation

## Guidelines

The Code agent follows these principles:

### Code Quality
- Write clean, readable code following existing patterns
- Use appropriate error handling
- Add comments for complex logic
- Follow the project's coding style

### Safety
- Test changes before committing
- Verify file paths before writing
- Explain significant changes
- Avoid destructive operations without confirmation

### Best Practices
- Use TypeScript types when available
- Follow framework conventions (Vue, React, etc.)
- Keep functions focused and small
- Write self-documenting code

## Example Interactions

**Create a new component**:
```
@code Create a UserAvatar component that displays the user's profile picture with a fallback to initials
```

**Fix a bug**:
```
@code The login form is not validating email addresses correctly. Fix the validation in auth/login.ts
```

**Refactor code**:
```
@code Refactor the API calls in useAuth.ts to use a shared error handler
```

**Run commands**:
```
@code Run the test suite and fix any failing tests
```

## Working with the Code Agent

For best results:

1. **Be specific** - Mention file paths, function names, or line numbers
2. **Provide context** - Explain what the code should do, not just how
3. **Review changes** - The agent shows diffs before applying changes
4. **Iterate** - Ask for adjustments if the first attempt isn't perfect

## Safe Operations

The Code agent is designed to be safe:

- Large file changes are shown as diffs for review
- Destructive operations require confirmation
- Command execution shows output for verification
- Changes can be reverted through Git
