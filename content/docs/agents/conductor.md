---
title: Conductor Agent
description: The intelligent orchestrator that routes requests to specialized agents.
---

# Conductor Agent

The Conductor is the primary orchestrator in Construct. It analyzes user requests, gathers context, and routes to the most appropriate specialized agent.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `conductor` |
| **Category** | Primary |
| **Icon** | Brain |
| **Max Iterations** | 10 |

## Capabilities

The Conductor agent can:

- Analyze user intent from natural language
- Gather context from tasks, designs, and code
- Ask clarifying questions when needed
- Route to appropriate specialized agents
- Dispatch with full context

## How It Works

When you send a message, the Conductor follows this decision process:

1. **Identify the domain** - Is this about code, design, tasks, scheduling, etc.?
2. **Check for context** - Are there related tasks, designs, or files?
3. **Determine clarity** - Is clarification needed?
4. **Dispatch** - Route to the appropriate agent with full context

## Available Routes

The Conductor can delegate to any specialized agent:

| Route | Use Case |
|-------|----------|
| `code` | Programming tasks, file modifications |
| `design` | UI/UX work, visual design |
| `kanban` | Project management, task tracking |
| `calendar` | Scheduling, time management |
| `git` | Version control, commits, PRs |
| `explorer` | Understanding code, finding files |
| `planner` | Architecture planning, analysis |
| `media` | Image generation, manipulation |
| `chat` | General questions, web search |

## Clarifying Questions

When the Conductor needs more information, it presents structured questions:

```json
{
  "question": "What type of authentication would you like?",
  "options": [
    { "id": "oauth", "label": "OAuth 2.0" },
    { "id": "jwt", "label": "JWT Tokens" },
    { "id": "session", "label": "Session-based" }
  ]
}
```

These appear as clickable buttons in the interface for quick selection.

## Example Interactions

**User**: "Add a login page"

**Conductor thinking**:
- Domain: Could be design (create UI) or code (implement logic)
- Context: Checks for existing auth files and design pages
- Decision: Asks for clarification

**Conductor**: "Would you like me to design the login page UI, or implement the authentication logic?"

---

**User**: "What files handle authentication?"

**Conductor thinking**:
- Domain: Code exploration (read-only)
- Context: No specific files mentioned
- Decision: Route to Explorer

**Action**: Dispatches to Explorer agent with context about auth-related files.

## Best Practices

The Conductor is most effective when you:

- Provide clear context about what you're trying to achieve
- Mention specific files, tasks, or designs when relevant
- Answer clarifying questions to help narrow the scope
- Use `@agent` syntax for direct routing when you know exactly which agent you need
