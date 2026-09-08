---
title: Design Agent
description: UI/UX design assistant specializing in visual design and component creation.
---

# Design Agent

The Design agent is your UI/UX assistant, specializing in creating beautiful, accessible, and functional interfaces within the UI Designer space.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `design` |
| **Category** | Specialized |
| **Icon** | Palette |
| **Max Iterations** | 20 |

## Capabilities

The Design agent can:

- Create and modify UI screens
- Add and arrange design elements
- Update styles and properties
- Read component files for reference
- List existing designs

## Available Tools

### Design Operations
- `create_ui_screen` - Create a new UI screen/page
- `create_design_element` - Add buttons, inputs, cards, etc.
- `update_design_element` - Modify existing elements
- `delete_design_element` - Remove elements

### Read Operations
- `list_project_designs` - View all designs in project
- `get_design` - Get design details
- `read_file` - Read component files for reference
- `file_search` - Find relevant components

## Blocked Tools

The Design agent cannot:
- Write or delete files
- Execute commands
- Perform Git operations
- Manage tasks or calendar events

## Design Principles

The Design agent follows established design principles:

### Spacing & Layout
- **8px grid system** for consistent spacing
- Proper padding and margins
- Responsive layouts that adapt to screen sizes

### Accessibility
- **4.5:1 contrast ratio** for text (WCAG AA)
- **44px minimum touch targets** for interactive elements
- Clear focus states for keyboard navigation
- Semantic structure

### Typography
- Consistent type scale
- Proper hierarchy (headings, body, captions)
- Readable line lengths (45-75 characters)

### Components
- Consistent component patterns
- Appropriate use of buttons, forms, cards
- Clear visual hierarchy

## Example Interactions

**Create a screen**:
```
@design Create a user profile page with avatar, name, email, and edit button
```

**Add elements**:
```
@design Add a notification banner at the top of the dashboard
```

**Update styles**:
```
@design Make the primary buttons use a blue gradient instead of solid color
```

**Create a form**:
```
@design Create a contact form with name, email, message, and submit button
```

## Design Element Types

The Design agent can create various elements:

### Basic Elements
- Text, headings, paragraphs
- Buttons (primary, secondary, ghost)
- Images and icons
- Dividers and spacers

### Form Elements
- Text inputs
- Textareas
- Checkboxes and radio buttons
- Select dropdowns
- Toggle switches

### Container Elements
- Cards
- Modals
- Sidebars
- Navigation bars
- Footers

### Data Display
- Tables
- Lists
- Badges
- Progress bars
- Avatars

## Working with the Design Agent

For best results:

1. **Describe the purpose** - Explain what the UI should accomplish
2. **Mention style preferences** - Colors, spacing, visual style
3. **Reference existing designs** - "Similar to the login page"
4. **Iterate on details** - Refine colors, spacing, and layout
