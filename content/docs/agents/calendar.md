---
title: Calendar Agent
description: Calendar assistant for scheduling and time management.
---

# Calendar Agent

The Calendar agent helps you manage your schedule, create events, check availability, and organize your time effectively.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `calendar` |
| **Category** | Specialized |
| **Icon** | Calendar |
| **Max Iterations** | 10 |

## Capabilities

The Calendar agent can:

- Create, update, and delete events
- List events for a date range
- Check availability
- Get today's schedule
- Find free time slots

## Available Tools

- `list_events` - View events in a range
- `create_event` - Schedule new event
- `update_event` - Modify existing event
- `delete_event` - Remove an event
- `check_availability` - Find free times
- `get_today_schedule` - View today's events

## Event Properties

When creating events, you can specify:

- **Title** - Event name
- **Start time** - When it begins
- **End time** - When it ends
- **Description** - Additional details
- **Location** - Physical or virtual location
- **Attendees** - People invited

## Example Interactions

**Create an event**:
```
@calendar Schedule a team standup for tomorrow at 9am for 30 minutes
```

**Check schedule**:
```
@calendar What do I have scheduled for this week?
```

**Find availability**:
```
@calendar When am I free for a 1-hour meeting on Friday?
```

**Update an event**:
```
@calendar Move my 2pm meeting to 3pm
```

## Guidelines

The Calendar agent follows these principles:

- **Time zone awareness** - Respects your configured timezone
- **Conflict avoidance** - Warns about overlapping events
- **Buffer time** - Considers travel time between meetings
- **Working hours** - Respects your work schedule preferences
- **Clear details** - Includes title, time, and relevant info

## Working with Calendar

For best results:

1. **Be specific about times** - "Tomorrow at 2pm" vs "sometime tomorrow"
2. **Include duration** - "30 minutes" or "1 hour"
3. **Mention attendees** - If others need to be invited
4. **Provide context** - What the meeting is about
