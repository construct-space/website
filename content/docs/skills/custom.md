---
title: Creating Custom Skills
description: Build your own middleware hooks for Construct.
---

# Creating Custom Skills

You can create custom skills to extend AI behavior with your own hooks, validations, and tools.

## Quick Start

1. Navigate to `context/skills/custom/` in your project
2. Copy `_template.md` to `your-skill-name.md`
3. Configure the frontmatter and hooks
4. Restart Construct to load the skill

## Skill File Format

```markdown
---
id: my-skill
name: My Custom Skill
category: productivity
description: What this skill does
version: 1.0.0
author: Your Name
icon: lucide:star
enabled: true

dependencies:
  - cost-tracker  # Skills that must load first

settings:
  myOption:
    type: boolean
    description: Enable my option
    default: true
  threshold:
    type: number
    description: Some threshold value
    default: 10

hooks:
  - id: on-session-start
    name: Session Start Hook
    type: session.start
    priority: 100
    action: log
    config:
      message: "Session started: {{session.id}}"

tools:
  - name: my_custom_tool
    description: Does something custom
    parameters:
      input:
        type: string
        description: The input to process
    action: shell
    command: "echo Processing: {{input}}"
---

# My Custom Skill

Description of what this skill does and how to use it.
```

## Hook Types

| Type | Triggered When |
|------|----------------|
| `session.create` | Before session created |
| `session.start` | When session starts |
| `session.complete` | On successful completion |
| `session.error` | On failure |
| `session.stop` | Always at session end |
| `tool.call.start` | Before tool executes |
| `tool.call.end` | After tool succeeds |
| `tool.call.error` | After tool fails |
| `agent.dispatch` | When agent is dispatched |
| `agent.switch` | When switching agents |
| `context.change` | Context state changes |
| `mode.change` | Mode changes |
| `project.change` | Project changes |

## Hook Actions

### Log
Records information about events:
```yaml
hooks:
  - id: log-completions
    type: session.complete
    action: log
    config:
      message: "Session {{session.id}} completed"
      level: info  # debug, info, warn, error
```

### Validate
Inspects and optionally cancels operations:
```yaml
hooks:
  - id: validate-writes
    type: tool.call.start
    action: validate
    config:
      condition: "tool.name === 'write_file'"
      cancelIf: "tool.args.path.includes('config/')"
      cancelMessage: "Cannot write to config directory"
```

### Cancel
Always cancels the operation:
```yaml
hooks:
  - id: block-deletes
    type: tool.call.start
    action: cancel
    config:
      condition: "tool.name === 'delete_file'"
      message: "Deletions are disabled by policy"
```

## Custom Tools

Skills can provide custom tools:

### Shell Command
```yaml
tools:
  - name: run_linter
    description: Run project linter
    action: shell
    command: "npm run lint"
```

### HTTP Request
```yaml
tools:
  - name: notify_slack
    description: Send Slack notification
    action: http
    method: POST
    url: "{{settings.slackWebhook}}"
    body:
      text: "{{message}}"
```

### Script
```yaml
tools:
  - name: process_data
    description: Process data with custom logic
    action: script
    script: |
      const result = input.split(',').map(s => s.trim());
      return { processed: result };
```

## Template Variables

Use these in your hooks and tools:

### Session Context
- `{{session.id}}` - Session identifier
- `{{session.startTime}}` - When session started
- `{{session.agent}}` - Current agent

### Tool Context
- `{{tool.name}}` - Tool being called
- `{{tool.args}}` - Tool arguments

### Settings
- `{{settings.myOption}}` - Your skill settings

## Example: Notification Skill

```markdown
---
id: slack-notifier
name: Slack Notifier
description: Send notifications to Slack on key events
enabled: true

settings:
  webhookUrl:
    type: string
    description: Slack webhook URL
    default: ""
  notifyOnComplete:
    type: boolean
    default: true
  notifyOnError:
    type: boolean
    default: true

hooks:
  - id: notify-complete
    type: session.complete
    action: http
    config:
      method: POST
      url: "{{settings.webhookUrl}}"
      body:
        text: "✅ Session completed: {{session.summary}}"
      condition: "settings.notifyOnComplete"

  - id: notify-error
    type: session.error
    action: http
    config:
      method: POST
      url: "{{settings.webhookUrl}}"
      body:
        text: "❌ Session failed: {{error.message}}"
      condition: "settings.notifyOnError"
---

# Slack Notifier

Sends notifications to Slack when sessions complete or fail.

## Setup

1. Create a Slack webhook at https://api.slack.com/messaging/webhooks
2. Add the webhook URL to the skill settings
3. Enable the notifications you want
```

## Debugging Skills

Enable debug logging to troubleshoot:

```yaml
skills:
  my-skill:
    enabled: true
    _debug: true  # Logs all hook executions
```

Check the Construct console for skill execution logs.
