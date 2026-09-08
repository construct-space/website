---
title: Git
description: Built-in version control for managing your project's source code.
---

# Git

The Git space provides a visual interface for version control, allowing you to manage branches, commits, and collaboration without leaving Construct.

## Overview

Git integration in Construct gives you:

- Visual diff viewer for changed files
- Branch management and switching
- Commit history with graph view
- Push and pull operations
- Staging area for selective commits

## Getting Started

### Initializing a Repository

If your project isn't already a Git repository:

1. Open the Git space
2. Click **Initialize Repository**
3. Your project is now tracked by Git

### Cloning a Repository

To start from an existing repository:

1. Use **File > Clone Repository**
2. Enter the repository URL
3. Choose a local directory
4. Click **Clone**

## File Status

### Status Indicators

Files in your project show their Git status:

| Status | Color | Meaning |
|--------|-------|---------|
| Modified | Orange | Changed since last commit |
| Staged | Green | Ready to be committed |
| Untracked | Gray | Not yet tracked by Git |
| Deleted | Red | Removed from project |
| Renamed | Blue | File was renamed |

### Staging Changes

To prepare files for commit:

- **Stage All**: Click the + button in the header
- **Stage File**: Click the + button next to a file
- **Stage Lines**: Select specific lines in the diff view

### Unstaging Changes

To remove files from staging:

- **Unstage All**: Click the - button in the header
- **Unstage File**: Click the - button next to a staged file

## Committing

### Creating a Commit

1. Stage the changes you want to include
2. Enter a commit message
3. Click **Commit**

### Writing Good Commit Messages

Follow these guidelines:

- Start with a brief summary (50 chars or less)
- Use imperative mood ("Add feature" not "Added feature")
- Include context in the body if needed
- Reference issue numbers when applicable

**Example:**
```
Add user authentication

- Implement JWT token handling
- Add login/logout endpoints
- Create auth middleware

Fixes #123
```

## Branches

### Viewing Branches

The branch list shows:

- Current branch (highlighted)
- Local branches
- Remote tracking branches
- Last commit on each branch

### Creating a Branch

1. Click the **+** button in the branch section
2. Enter a branch name
3. Choose the base branch
4. Click **Create**

### Switching Branches

1. Click on any branch in the list
2. Confirm if you have uncommitted changes
3. Your workspace updates to the new branch

### Merging Branches

1. Switch to the target branch
2. Click **Merge** on the source branch
3. Resolve any conflicts if they occur
4. Commit the merge

## Diff Viewer

### Viewing Changes

The diff viewer shows:

- Side-by-side comparison
- Line-by-line additions (green)
- Line-by-line deletions (red)
- Changed sections highlighted

### Navigation

- Use arrow keys to move between changes
- Click line numbers to stage specific lines
- Expand/collapse unchanged sections

## Commit History

### History View

The commit history shows:

- Commit messages
- Author and date
- Commit hash
- Branch structure as a graph

### Viewing a Commit

Click any commit to see:

- Full commit message
- Files changed
- Diff for each file
- Parent commit(s)

## Remote Operations

### Pushing Changes

To push commits to the remote:

1. Ensure you have commits to push
2. Click **Push**
3. Enter credentials if prompted

### Pulling Changes

To get changes from the remote:

1. Click **Pull**
2. Choose merge or rebase strategy
3. Resolve any conflicts

### Fetch

To update remote tracking branches without merging:

1. Click **Fetch**
2. Review incoming changes
3. Decide whether to merge

## Conflict Resolution

### When Conflicts Occur

Conflicts happen when:

- Same lines changed in both branches
- File deleted in one branch, modified in another
- File moved in conflicting ways

### Resolving Conflicts

1. Open the conflicted file
2. Choose which version to keep:
   - Accept Current (your changes)
   - Accept Incoming (their changes)
   - Accept Both (combine changes)
3. Edit the result as needed
4. Mark as resolved
5. Commit the resolution

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Stage File | `Cmd/Ctrl + S` |
| Unstage File | `Cmd/Ctrl + U` |
| Commit | `Cmd/Ctrl + Enter` |
| Push | `Cmd/Ctrl + Shift + P` |
| Pull | `Cmd/Ctrl + Shift + L` |
| Switch Branch | `Cmd/Ctrl + B` |
| View History | `Cmd/Ctrl + H` |

## Tips

1. **Commit Often**: Small, frequent commits are easier to understand
2. **Use Branches**: Keep features isolated until ready
3. **Write Descriptive Messages**: Future you will thank present you
4. **Pull Before Push**: Always sync with remote first
5. **Review Before Commit**: Use the diff viewer to verify changes
