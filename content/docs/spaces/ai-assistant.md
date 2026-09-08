---
title: AI Assistant
description: AI-powered assistant for code help, design decisions, and project guidance.
---

# AI Assistant

The AI Assistant space provides intelligent help for your development workflow, offering code assistance, design feedback, and project guidance.

## Overview

The AI Assistant offers:

- Natural language chat interface
- Multiple conversation sessions
- Context-aware responses
- Code generation and explanation
- Model selection options

## Getting Started

### Opening AI Assistant

Access the AI space from:

- The Spaces menu
- Keyboard shortcut: `Cmd/Ctrl + Shift + A`
- Quick access: `Ctrl+Ctrl` (double tap)

### Starting a Conversation

1. Type your question or request
2. Press `Enter` or click Send
3. Wait for the AI response
4. Continue the conversation as needed

## Chat Interface

### Message Types

The chat supports various content:

- **Text**: Plain language questions and answers
- **Code**: Syntax-highlighted code blocks
- **Markdown**: Formatted text with links and lists
- **Images**: (Coming soon)

### Code in Messages

When sharing code:

- Wrap code in triple backticks
- Specify the language for highlighting
- AI will format responses with proper syntax

**Example:**
```javascript
// What does this code do?
const result = data.filter(x => x.active).map(x => x.name);
```

## Conversation Sessions

### Creating Sessions

Start new conversations:

- Click **New Chat** in the sidebar
- Each session has its own history
- Name sessions for organization

### Managing Sessions

Organize your conversations:

- **Rename**: Double-click session name
- **Delete**: Right-click and select Delete
- **Search**: Find past conversations

### Session Context

Each session maintains:

- Full conversation history
- Context from previous messages
- Project awareness (optional)

## Capabilities

### Code Assistance

Get help with coding tasks:

- **Explain Code**: Understand complex logic
- **Debug Issues**: Find and fix bugs
- **Refactor**: Improve code structure
- **Generate Code**: Create new implementations

**Example prompts:**

```
"Explain what this function does"
"Why am I getting this error?"
"How can I make this more efficient?"
"Write a function that validates email addresses"
```

### Design Guidance

Get feedback on design decisions:

- Color scheme suggestions
- Layout improvements
- Accessibility recommendations
- Component patterns

### Project Planning

Help with project architecture:

- Technology recommendations
- File structure suggestions
- API design patterns
- Best practices

## Model Selection

### Available Models

Choose the AI model that fits your needs:

| Model | Best For |
|-------|----------|
| Default | General assistance |
| Fast | Quick questions |
| Advanced | Complex problems |

### Switching Models

Change models from the chat header dropdown.

## Context Options

### Project Context

Enable project awareness:

1. Toggle **Include Project Context**
2. AI can reference your project files
3. Get more relevant suggestions

### File Context

Share specific files:

- Drag files into the chat
- Reference files by path
- AI considers file content

## Tips for Better Results

### Be Specific

Clear questions get better answers:

```
# Less effective
"Fix my code"

# More effective
"My React component re-renders too often. Here's the code.
How can I optimize it with useMemo or useCallback?"
```

### Provide Context

Include relevant information:

- Error messages (complete text)
- Expected vs actual behavior
- Technology stack
- Constraints or requirements

### Iterate

Refine through conversation:

1. Start with your question
2. Review the response
3. Ask follow-up questions
4. Request clarification

## Code Actions

### Copy Code

Copy AI-generated code:

- Click the copy button on code blocks
- Code is ready to paste

### Insert to Editor

Send code directly to the editor:

- Click **Insert** on code blocks
- Code appears at cursor position

### Apply Suggestions

For file modifications:

- Review the suggested changes
- Click **Apply** to implement
- Changes are made to your files

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open AI Assistant | `Cmd/Ctrl + Shift + A` |
| Quick Access | `Ctrl + Ctrl` |
| New Chat | `Cmd/Ctrl + N` |
| Send Message | `Enter` |
| New Line | `Shift + Enter` |
| Copy Code Block | `Cmd/Ctrl + C` (when selected) |
| Clear Chat | `Cmd/Ctrl + K` |

## Best Practices

1. **Start Fresh**: Use new sessions for unrelated topics
2. **Be Patient**: Complex questions may take longer
3. **Verify Code**: Always review AI-generated code
4. **Provide Feedback**: Clarify when responses miss the mark
5. **Learn Patterns**: Note effective prompts for reuse
