---
title: Architect
description: AI-powered project scaffolding and blueprint generation.
---

# Architect

The Architect space helps you start new projects with AI-powered scaffolding, generating project structures based on your requirements.

## Overview

The Architect space offers:

- Project creation wizard
- Blueprint templates
- AI-generated project structure
- Tech stack selection
- Export to filesystem
- Customizable configurations

## Getting Started

### Opening Architect

Access the Architect space from:

- The Spaces menu
- **File > New Project**
- Keyboard shortcut: `Cmd/Ctrl + Shift + P`

### First Project

Create your first project:

1. Open Architect
2. Choose a starting point
3. Customize settings
4. Generate project

## Project Wizard

### Step 1: Project Type

Select what you're building:

- **Web Application**: Full-stack web apps
- **Landing Page**: Marketing sites
- **API**: Backend services
- **Mobile App**: Native or cross-platform
- **Desktop App**: Electron-based apps
- **Library**: Reusable packages

### Step 2: Tech Stack

Choose your technologies:

**Frontend:**
- React
- Vue
- Svelte
- Angular
- Plain HTML/CSS

**Backend:**
- Node.js (Express, Fastify)
- Python (Django, FastAPI)
- Go
- Rust

**Database:**
- PostgreSQL
- MongoDB
- SQLite
- None

### Step 3: Features

Add common features:

- Authentication
- API integration
- Database ORM
- Testing setup
- CI/CD configuration
- Docker support
- Documentation

### Step 4: Customization

Fine-tune your project:

- Project name
- Package manager (npm, yarn, pnpm)
- Styling solution (CSS, Tailwind, etc.)
- Linting and formatting
- Git initialization

## Blueprint Templates

### Using Templates

Start from proven patterns:

1. Click **Browse Templates**
2. Filter by category
3. Preview structure
4. Select and customize

### Template Categories

Available templates:

- **Starter**: Minimal boilerplates
- **Full-Stack**: Complete applications
- **Component Library**: UI packages
- **API Server**: Backend services
- **Monorepo**: Multi-package projects

### Popular Templates

Community favorites:

- **React + Vite**: Modern React setup
- **Vue + Nuxt**: Full-featured Vue
- **Express API**: Node.js backend
- **Next.js**: React framework

## AI Generation

### Describe Your Project

Let AI create the structure:

1. Click **AI Generate**
2. Describe your project in natural language
3. Review the generated plan
4. Customize as needed

### Example Prompts

```
"Create an e-commerce site with user authentication,
product catalog, and shopping cart"

"Build a REST API for a blog with posts, comments,
and user management"

"Set up a component library with Storybook and
automated testing"
```

### AI Recommendations

AI suggests based on your description:

- Appropriate technologies
- File structure
- Dependencies
- Configuration files
- Sample code

## Project Structure

### Preview

View the planned structure:

```
my-project/
├── src/
│   ├── components/
│   ├── pages/
│   ├── lib/
│   └── styles/
├── tests/
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

### Customize Structure

Modify before generating:

- Add/remove folders
- Rename files
- Change nesting
- Add custom files

### Dependencies

Review packages:

- Core dependencies
- Development tools
- Versions and ranges
- Add/remove as needed

## Export

### To Filesystem

Create the actual project:

1. Click **Export**
2. Choose location
3. Confirm settings
4. Project is created

### Export Options

Configure the export:

- **Directory**: Where to create
- **Initialize Git**: Start repository
- **Install Dependencies**: Run npm install
- **Open in Construct**: Switch to project

### Post-Export

After exporting:

- Project opens in Construct
- Dependencies installing
- Ready to start coding

## Configuration Files

### Generated Configs

Standard configuration files:

- `package.json`: Dependencies and scripts
- `tsconfig.json`: TypeScript settings
- `.eslintrc`: Linting rules
- `.prettierrc`: Formatting
- `.gitignore`: Git ignores
- `README.md`: Documentation

### Customizing Configs

Edit before export:

1. Click on any config file
2. Modify the content
3. Changes reflect in export

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| New Project | `Cmd/Ctrl + Shift + P` |
| Browse Templates | `T` |
| AI Generate | `A` |
| Preview Structure | `P` |
| Export | `Cmd/Ctrl + E` |
| Back | `Escape` |

## Tips

1. **Start Simple**: Add complexity as needed
2. **Use Templates**: Don't reinvent the wheel
3. **Review Dependencies**: Remove unused packages
4. **Read Generated Code**: Understand the structure
5. **Customize Early**: Easier to modify before export
