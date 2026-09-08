---
title: Code Editor
description: A full-featured code editor powered by Monaco, the engine behind VS Code.
---

# Code Editor

The Code space provides a professional code editing experience powered by Monaco - the same editor engine that powers Visual Studio Code.

## Overview

The Code space combines:

- **Monaco Editor**: Full VS Code editing experience
- **File Browser**: Navigate and manage project files
- **LSP Support**: IntelliSense for multiple languages
- **Project Runner**: Run and debug your applications
- **Integrated Terminal**: Execute commands without leaving Construct

## File Browser

### Navigation

The file browser on the left shows your project structure:

- **Expand/Collapse**: Click folders to navigate
- **Quick Open**: `Cmd/Ctrl + P` to search files by name
- **Context Menu**: Right-click for file operations

### File Operations

Right-click in the file browser to:

- **New File**: Create a new file
- **New Folder**: Create a new directory
- **Rename**: Change file or folder name
- **Delete**: Remove files (moves to trash)
- **Copy Path**: Copy the file path to clipboard
- **Reveal in Finder/Explorer**: Open in system file manager

### File Icons

Files display icons based on their type:
- Language-specific icons for code files
- Document icons for text files
- Image previews for graphics

## Editor Features

### Syntax Highlighting

Monaco provides rich syntax highlighting for many languages:

- JavaScript / TypeScript
- Vue / React / Svelte
- HTML / CSS / SCSS
- Python / Go / Rust
- JSON / YAML / TOML
- Markdown
- And many more...

### IntelliSense

Get intelligent code completion powered by Language Server Protocol (LSP):

- **Auto-complete**: Suggestions as you type
- **Parameter Hints**: Function signature help
- **Quick Info**: Hover for type information
- **Go to Definition**: `Cmd/Ctrl + Click` or `F12`
- **Find References**: `Shift + F12`

### Code Actions

Quick fixes and refactoring:

- Light bulb icon indicates available actions
- Press `Cmd/Ctrl + .` to see options
- Auto-import missing dependencies
- Extract functions or variables
- Rename symbols across files

### Multiple Cursors

Edit multiple locations simultaneously:

- `Cmd/Ctrl + D`: Select next occurrence
- `Cmd/Ctrl + Shift + L`: Select all occurrences
- `Alt + Click`: Add cursor at click location
- `Cmd/Ctrl + Alt + Up/Down`: Add cursor above/below

### Code Folding

Collapse code sections:

- Click fold icons in the gutter
- `Cmd/Ctrl + Shift + [`: Fold region
- `Cmd/Ctrl + Shift + ]`: Unfold region
- `Cmd/Ctrl + K, Cmd/Ctrl + 0`: Fold all
- `Cmd/Ctrl + K, Cmd/Ctrl + J`: Unfold all

## Search and Replace

### Find in File

- `Cmd/Ctrl + F`: Open find dialog
- `Cmd/Ctrl + H`: Find and replace
- Use regex with the `.*` button
- Case sensitive toggle available

### Find in Project

- `Cmd/Ctrl + Shift + F`: Search across all files
- Filter by file type or path
- Replace across multiple files

## Tabs and Split View

### Working with Tabs

- Click to switch between open files
- Middle-click or `x` to close
- Drag tabs to reorder
- Right-click for tab options

### Split Editor

Work on multiple files side by side:

- Drag a tab to the edge to split
- `Cmd/Ctrl + \`: Split editor
- `Cmd/Ctrl + 1/2/3`: Focus editor groups

## Project Runner

### Running Your Project

If your project has a run configuration (like `npm start` or `python main.py`):

1. Click the **Play** button in the toolbar
2. View output in the integrated terminal
3. Click **Stop** to terminate the process

### Run Configurations

Construct detects common project types:

- **Node.js**: Runs `npm start` or `npm run dev`
- **Python**: Runs the main Python file
- **Custom**: Configure your own run command

### Debug Output

The terminal shows:
- Standard output (stdout)
- Standard error (stderr)
- Exit codes

## Terminal Access

Access the full terminal without leaving Code space:

- Toggle terminal panel at the bottom
- Run any command
- Multiple terminal instances supported
- Full shell access (bash, zsh, PowerShell)

## Settings

### Editor Settings

Customize your editing experience:

- **Font Size**: Adjust code font size
- **Tab Size**: Set indentation width
- **Word Wrap**: Toggle line wrapping
- **Theme**: Light or dark mode
- **Minimap**: Toggle the code overview

### Keybindings

Customize keyboard shortcuts to match your preferences.

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Quick Open | `Cmd/Ctrl + P` |
| Go to Line | `Cmd/Ctrl + G` |
| Find | `Cmd/Ctrl + F` |
| Replace | `Cmd/Ctrl + H` |
| Find in Files | `Cmd/Ctrl + Shift + F` |
| Go to Definition | `F12` |
| Peek Definition | `Alt + F12` |
| Find References | `Shift + F12` |
| Rename Symbol | `F2` |
| Format Document | `Shift + Alt + F` |
| Toggle Comment | `Cmd/Ctrl + /` |
| Move Line Up/Down | `Alt + Up/Down` |
| Copy Line Up/Down | `Shift + Alt + Up/Down` |
| Delete Line | `Cmd/Ctrl + Shift + K` |
| Split Editor | `Cmd/Ctrl + \` |
| Toggle Terminal | `Cmd/Ctrl + `` ` |

## Tips

1. **Use Quick Open**: `Cmd/Ctrl + P` is the fastest way to navigate
2. **Learn Multi-cursor**: Dramatically speeds up repetitive edits
3. **Use Code Actions**: The light bulb offers powerful refactoring
4. **Explore IntelliSense**: Hover over symbols for documentation
5. **Split View**: Compare files or work on related code side by side
