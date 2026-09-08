---
title: Chat Agent
description: General conversation and assistance.
---

# Chat Agent

The Chat agent is the default conversational assistant. It handles general questions, searches the web, and delegates to specialized agents when appropriate.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `chat` |
| **Category** | Specialized |
| **Icon** | Message Circle |
| **Max Iterations** | 10 |

## Capabilities

The Chat agent can:

- Answer general questions
- Search the web for information
- Read URLs for context
- Delegate to specialized agents
- Suggest appropriate agents for tasks

## Available Tools

- `web_search` - Search the web
- `read_url` - Read webpage content
- `dispatch_to_agent` - Delegate to specialists

## Agent Delegation

When your request is better handled by a specialist, Chat suggests or delegates:

| Need | Suggested Agent |
|------|-----------------|
| Coding, file modifications | Code |
| UI/UX design work | Design |
| Task management | Kanban |
| Scheduling | Calendar |
| Version control | Git |
| Image generation | Media |
| Understanding code | Explorer |

## Example Interactions

**General questions**:
```
What's the best practice for handling authentication in Vue 3?
```

**Web search**:
```
Search for the latest Nuxt 4 release notes
```

**Delegation**:
```
I need to add a new API endpoint
```
*Chat: "This sounds like a coding task. Would you like me to hand off to the Code agent?"*

## When to Use Chat

Chat is ideal for:

- Quick questions
- Research and information gathering
- General guidance and recommendations
- When you're not sure which agent to use
- Conversational interactions

## When to Use Specialists

Use specialized agents directly when you:

- Know exactly what you need (coding, design, etc.)
- Want to avoid the routing step
- Need specific tool access
- Are working on a focused task
