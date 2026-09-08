# Construct Website Copy

Source of truth for website content based on actual product features.

## Brand

- **Name**: Construct
- **Origin**: The Matrix - "The Construct" is where programs are loaded
- **Tagline**: Your complete creative development environment
- **Tone**: Professional, developer-focused, Matrix-inspired

## Product Overview

Construct is a desktop application that combines design, development, and project management into unified workspaces called "spaces". Each project can use multiple spaces simultaneously.

## Spaces (Actual Features)

### 1. UI Designer
- **Icon**: component
- **Description**: Vector design editor powered by Fabric.js
- **Key Features**:
  - Canvas-based design similar to Figma
  - Drawing tools: Rectangle, Ellipse, Text, Screen, Pen, Line, Arrow, Polygon, Star
  - Selection and transform (move, scale, rotate)
  - Layers panel with drag-drop reordering
  - Properties panel for all shape properties
  - Gradients (linear and radial)
  - Per-corner border radius
  - Drop shadows (multiple)
  - Google Fonts integration
  - Groups and hierarchy (Cmd+G)
  - Undo/redo history
  - Grid, guides, rulers, snap-to-objects
  - Path editing with pen tool
- **Export Formats**: SVG, PNG (1x/2x/3x), CSS, HTML, Vue SFC, React JSX, Tailwind, JSON

### 2. Code
- **Icon**: code
- **Description**: Full-featured code editor with Monaco
- **Key Features**:
  - Monaco editor (same as VS Code)
  - LSP support for intellisense
  - File browser and management
  - Project runner with run controls
  - Integrated terminal access

### 3. Git
- **Icon**: git-branch
- **Description**: Built-in version control
- **Key Features**:
  - Repository management
  - Branch switching and management
  - Commit history viewing
  - Commit creation with staging
  - File status tracking (modified, staged, untracked)
  - Diff viewer
  - Push/pull operations

### 4. Terminal
- **Icon**: terminal
- **Description**: Integrated terminal emulator
- **Key Features**:
  - Full terminal emulation
  - Multiple terminals
  - Split terminal support
  - Project-aware working directory

### 5. Notes
- **Icon**: sticky-note
- **Description**: Quick notes and reminders
- **Key Features**:
  - Sticky notes on a board
  - Color customization
  - Share notes with team

### 6. AI Assistant
- **Icon**: sparkles
- **Description**: AI-powered project assistant
- **Key Features**:
  - Chat interface
  - Multiple chat sessions
  - Chat history
  - Model selection
  - Context-aware assistance

### 7. Tasks (Kanban)
- **Icon**: check-square
- **Description**: Project task management
- **Key Features**:
  - Kanban board view
  - Task creation and management
  - Filtering
  - Calendar view

### 8. Chat
- **Icon**: messages-square
- **Description**: Team communication
- **Key Features**:
  - Chat rooms
  - Member management
  - AI integration
  - Quick access (CTRL+CTRL)

### 9. Architect
- **Icon**: compass
- **Description**: AI-powered project scaffolding
- **Key Features**:
  - Project creation wizard
  - Blueprint templates
  - AI-generated project structure
  - Export to filesystem

## Technical Details

- **Platform**: Desktop (macOS, Windows, Linux)
- **Built With**: Tauri, Vue 3, Nuxt
- **Design Engine**: Fabric.js v7
- **Code Editor**: Monaco
- **Storage**: IndexedDB for local persistence

## Billing Model (from sync-api)

Based on the actual API billing system:

### Per-User Pricing
- Price per user per billing interval (monthly or yearly)
- Seat-based licensing (quantity)
- 14-day free trial by default
- AI credits per user (default 100/month)
- Credits can roll over (up to 2x multiplier)

### Subscription Statuses
- `trialing` - In trial period
- `active` - Active paid subscription
- `past_due` - Payment failed
- `canceled` - Subscription canceled
- `unpaid` - Subscription unpaid

### Features
- Stripe integration for payments
- Checkout sessions
- Customer billing portal
- Invoice history

## Page Copy

### Homepage Hero
- **Headline**: Design. Code. Ship.
- **Subheadline**: The complete creative development environment where design meets code.
- **CTA**: Download for Free / View Demo

### Features Page
- **Headline**: Everything you need in one place
- **Subheadline**: Nine integrated spaces that work together seamlessly

### Download Page
- **Headline**: Get Construct
- **Subheadline**: Available for macOS, Windows, and Linux

### Pricing Page
- **Headline**: Simple, transparent pricing
- **Subheadline**: Start free, upgrade when you're ready
