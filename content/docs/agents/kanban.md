---
title: Kanban Agent
description: Project management assistant for task organization and tracking.
---

# Kanban Agent

The Kanban agent helps you manage your project's tasks, track progress, and organize work effectively through the Tasks space.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `kanban` |
| **Category** | Specialized |
| **Icon** | Kanban |
| **Max Iterations** | 15 |

## Capabilities

The Kanban agent can:

- Create, update, and delete tasks
- Move tasks between states
- List and filter tasks
- Assign tasks to team members
- Set priorities and labels
- Track dependencies between tasks

## Available Tools

- `list_project_tasks` - List all tasks with filters
- `get_task` - Get task details
- `create_task` - Create new task
- `update_task` - Update task properties
- `delete_task` - Remove a task
- `move_task` - Change task state
- `assign_task` - Assign to team member

## Task States

Tasks flow through these states:

| State | Description |
|-------|-------------|
| `backlog` | Tasks waiting to be prioritized |
| `todo` | Ready to start |
| `in_progress` | Currently being worked on |
| `review` | Waiting for review |
| `done` | Completed |

## Priority Levels

- **Low** - Nice to have, no urgency
- **Medium** - Standard priority
- **High** - Important, should be done soon
- **Urgent** - Critical, needs immediate attention

## Example Interactions

**Create a task**:
```
@kanban Create a high priority task: "Implement user authentication" with description "Add JWT-based auth flow"
```

**List tasks**:
```
@kanban Show all in-progress tasks assigned to me
```

**Update a task**:
```
@kanban Move task #123 to review and add a comment about the implementation
```

**Organize tasks**:
```
@kanban Move all completed tasks from last week to done and clear the review column
```

## Task Properties

When creating or updating tasks, you can set:

- **Title** - Brief description of the work
- **Description** - Detailed explanation
- **Status** - Current state (backlog, todo, etc.)
- **Priority** - Urgency level
- **Assignee** - Team member responsible
- **Labels** - Tags for categorization
- **Due date** - Deadline for completion
- **Dependencies** - Tasks that must be done first

## Working with the Kanban Agent

For best results:

1. **Be specific about tasks** - Clear titles and descriptions
2. **Use priorities wisely** - Not everything is urgent
3. **Keep tasks small** - Break large work into subtasks
4. **Update status** - Keep the board current
