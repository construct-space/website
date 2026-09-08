---
title: AI Agents
description: Specialized AI assistants that help with different tasks in Construct.
---

# AI Agents

Agents are specialized AI assistants that help with different tasks in Construct. Each agent has a specific focus, set of tools, and guidelines tailored to its domain.

## How Agents Work

When you interact with the AI in Construct, your request is analyzed and routed to the most appropriate agent. Each agent has:

- **Specific focus**: Optimized for a particular domain (code, design, tasks, etc.)
- **Allowed tools**: Access to only the tools relevant to its purpose
- **Guidelines**: Best practices and constraints for quality output
- **Max iterations**: Limits to prevent runaway operations

## Built-in Agents

Construct includes 10 specialized agents:

| Agent | Purpose | Key Capability |
|-------|---------|----------------|
| [Conductor](/docs/agents/conductor) | Orchestrates requests | Routes to all agents |
| [Code](/docs/agents/code) | Development | Full file/command access |
| [Design](/docs/agents/design) | UI/UX creation | Design element management |
| [Kanban](/docs/agents/kanban) | Project management | Task CRUD operations |
| [Git](/docs/agents/git) | Version control | Git operations & PRs |
| [Planner](/docs/agents/planner) | Architecture | Read-only analysis |
| [Explorer](/docs/agents/explorer) | Codebase understanding | Read-only exploration |
| [Chat](/docs/agents/chat) | General assistance | Web search & delegation |
| [Calendar](/docs/agents/calendar) | Scheduling | Event management |
| [Media](/docs/agents/media) | Image handling | Generation & manipulation |

## Agent Routing

The **Conductor** agent acts as the intelligent orchestrator. When you send a message, it:

1. Analyzes your intent
2. Gathers relevant context (tasks, designs, files)
3. Asks clarifying questions if needed
4. Routes to the appropriate specialized agent

You can also directly invoke specific agents using the `@agent` syntax:

```
@code Fix the authentication bug in login.ts
@design Create a dark mode toggle component
@kanban Create a task for implementing user profiles
```

## Custom Agents

You can create your own agents by adding Markdown files to your project's `context/agents/custom/` directory. See the [Creating Custom Agents](/docs/agents/custom) guide for details.
