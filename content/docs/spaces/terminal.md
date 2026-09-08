---
title: Terminal
description: Integrated terminal emulator for command-line access within Construct.
---

# Terminal

The Terminal space provides a full-featured terminal emulator integrated directly into Construct, giving you command-line access without switching applications.

## Overview

The integrated terminal offers:

- Full terminal emulation
- Multiple terminal sessions
- Split terminal views
- Project-aware working directory
- Copy/paste support
- Scrollback history

## Getting Started

### Opening the Terminal

Access the terminal from:

- The Spaces menu
- Keyboard shortcut: `` Cmd/Ctrl + ` ``
- Bottom panel toggle

### Default Directory

The terminal automatically opens in your project's root directory, making it easy to run project-related commands.

## Terminal Sessions

### Creating Sessions

Create new terminal sessions:

- Click the **+** button in the terminal header
- Use `Cmd/Ctrl + Shift + T`
- Right-click and select **New Terminal**

### Switching Sessions

Navigate between sessions:

- Click on session tabs
- Use `Cmd/Ctrl + Tab` to cycle
- Use `Cmd/Ctrl + 1-9` for direct access

### Closing Sessions

Close terminal sessions:

- Click the **x** on the session tab
- Type `exit` in the terminal
- Use `Cmd/Ctrl + W`

## Split Views

### Creating Splits

Split the terminal for side-by-side views:

- **Horizontal Split**: `Cmd/Ctrl + \`
- **Vertical Split**: `Cmd/Ctrl + Shift + \`
- Right-click and select split option

### Navigating Splits

Move between split panes:

- Click on the desired pane
- Use `Cmd/Ctrl + Arrow` keys
- Use `Alt/Option + Arrow` keys

### Resizing Splits

Adjust pane sizes:

- Drag the divider between panes
- Double-click to reset to equal sizes

## Features

### Scrollback History

Scroll through previous output:

- Mouse wheel or trackpad scroll
- `Shift + Page Up/Down`
- Scrollback buffer preserves significant history

### Search

Find text in terminal output:

- `Cmd/Ctrl + F` to open search
- Type search term
- Use arrows to navigate matches
- Press `Escape` to close

### Copy and Paste

Transfer text to/from terminal:

- **Copy**: Select text (auto-copies on selection) or `Cmd/Ctrl + C`
- **Paste**: `Cmd/Ctrl + V` or right-click menu

### Clear Terminal

Clear the terminal screen:

- Type `clear` or `cls` (Windows)
- `Cmd/Ctrl + K` to clear scrollback
- `Cmd/Ctrl + L` to clear screen only

## Integration

### Running Project Commands

Common tasks from the terminal:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Git Commands

When you need command-line Git:

```bash
# Check status
git status

# Add and commit
git add . && git commit -m "message"

# Push changes
git push origin main
```

### Code Space Integration

The terminal integrates with the Code space:

- Run files directly from editor
- Output appears in terminal
- Errors link back to source

## Shell Configuration

### Default Shell

The terminal uses your system's default shell:

- **macOS/Linux**: Usually `bash` or `zsh`
- **Windows**: Usually `PowerShell` or `cmd`

### Shell Selection

Change shells from settings:

1. Open Construct preferences
2. Navigate to Terminal settings
3. Select preferred shell

### Environment Variables

The terminal inherits your shell's environment:

- PATH and other variables
- Shell aliases and functions
- Custom configurations

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| New Terminal | `Cmd/Ctrl + Shift + T` |
| Close Terminal | `Cmd/Ctrl + W` |
| Split Horizontal | `Cmd/Ctrl + \` |
| Split Vertical | `Cmd/Ctrl + Shift + \` |
| Navigate Panes | `Cmd/Ctrl + Arrow` |
| Clear Screen | `Cmd/Ctrl + K` |
| Search | `Cmd/Ctrl + F` |
| Scroll Up | `Shift + Page Up` |
| Scroll Down | `Shift + Page Down` |
| Toggle Terminal | `` Cmd/Ctrl + ` `` |

## Tips

1. **Use Aliases**: Set up shell aliases for common commands
2. **Multiple Sessions**: Keep separate terminals for different tasks
3. **Split Views**: Monitor logs while running commands
4. **Project Directory**: Terminal starts in project root for convenience
5. **History**: Use up/down arrows to recall previous commands
