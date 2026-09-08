---
title: UI Designer
description: A powerful vector design editor for creating interfaces and graphics.
---

# UI Designer

The UI Designer is Construct's vector design editor, powered by Fabric.js. It provides a familiar design experience similar to Figma, with the added power of code export.

## Canvas Basics

### Navigation

- **Pan**: Hold `Space` and drag, or use two-finger scroll
- **Zoom**: `Cmd/Ctrl + Scroll` or pinch gesture
- **Zoom to Fit**: `Cmd/Ctrl + 0`
- **Zoom to 100%**: `Cmd/Ctrl + 1`

### Grid and Guides

Enable visual aids from the View menu:

- **Grid**: Helps align objects to a consistent spacing
- **Rulers**: Show measurements along the canvas edges
- **Guides**: Drag from rulers to create alignment guides
- **Snap to Objects**: Automatically align to other objects

## Drawing Tools

### Rectangle Tool (R)

Create rectangles and squares:

- Click and drag to draw
- Hold `Shift` for perfect squares
- Adjust corner radius in Properties panel (per-corner control available)

### Ellipse Tool (O)

Create ellipses and circles:

- Click and drag to draw
- Hold `Shift` for perfect circles

### Text Tool (T)

Add text to your design:

- Click to create a text box
- Type your content
- Access Google Fonts integration in Properties

### Line Tool (L)

Draw straight lines:

- Click and drag to draw
- Hold `Shift` for perfectly horizontal, vertical, or 45-degree lines

### Arrow Tool

Create arrows for annotations:

- Similar to Line tool with arrowhead options
- Customize head style and size

### Pen Tool (P)

Create custom vector paths:

- Click to create points
- Click and drag to create curves
- Close paths by clicking the first point
- Edit paths by selecting and moving anchor points

### Polygon & Star

Create multi-sided shapes:

- Polygons: Set number of sides in Properties
- Stars: Set points and inner radius

### Screen Tool

Create device frames and artboards:

- Preset sizes for common devices
- Custom dimensions available

## Selection and Transform

### Selecting Objects

- **Single select**: Click an object
- **Multi-select**: Hold `Shift` and click, or drag a selection box
- **Select All**: `Cmd/Ctrl + A`

### Transforming

- **Move**: Drag selected objects
- **Resize**: Drag corner or edge handles
- **Rotate**: Drag rotation handle (appears on hover)
- **Constrain proportions**: Hold `Shift` while resizing

### Alignment

Access alignment tools from the toolbar or right-click menu:

- Align left, center, right
- Align top, middle, bottom
- Distribute horizontally or vertically

## Styling

### Fill

Apply solid colors or gradients:

**Solid Color**:
- Click the color picker
- Enter hex, RGB, or HSL values
- Adjust opacity

**Gradients**:
- Choose Linear or Radial
- Add color stops
- Adjust angle and position

### Stroke

Add borders to shapes:

- **Color**: Same options as fill
- **Width**: Set stroke thickness
- **Style**: Solid, dashed, dotted
- **Position**: Inside, center, or outside

### Effects

**Drop Shadow**:
- Multiple shadows per object
- Control offset, blur, spread, and color
- Adjust opacity

**Blur**: (Coming soon)
- Gaussian blur effect

### Typography

When text is selected:

- **Font Family**: Access Google Fonts library
- **Font Size**: Set in pixels
- **Font Weight**: Light to bold
- **Line Height**: Control spacing between lines
- **Letter Spacing**: Adjust character spacing
- **Alignment**: Left, center, right, justify

## Layers

### Layer Panel

View your document structure:

- Objects listed from front to back
- Drag to reorder layers
- Groups shown as collapsible items

### Layer Operations

- **Lock**: Prevent selection and editing
- **Hide**: Toggle visibility
- **Rename**: Double-click the layer name

### Groups

Organize related objects:

- **Group**: Select objects and press `Cmd/Ctrl + G`
- **Ungroup**: Select group and press `Cmd/Ctrl + Shift + G`
- **Enter Group**: Double-click to edit contents
- **Exit Group**: Click outside or press `Escape`

## History

### Undo/Redo

- **Undo**: `Cmd/Ctrl + Z`
- **Redo**: `Cmd/Ctrl + Shift + Z`

Full history is preserved during your session.

## Export

### Quick Export

Select objects and use `Cmd/Ctrl + E` to export:

### Export Formats

**Images**:
- SVG (vector, scalable)
- PNG (1x, 2x, 3x resolution options)

**Code**:
- CSS (style properties)
- HTML (semantic markup)
- Vue SFC (Single File Component)
- React JSX (React component)
- Tailwind (utility classes)
- JSON (raw data)

### Export Options

- **Selection Only**: Export selected objects
- **With Background**: Include canvas background
- **Quality**: For PNG exports

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Rectangle | `R` |
| Ellipse | `O` |
| Text | `T` |
| Line | `L` |
| Pen | `P` |
| Select/Move | `V` |
| Group | `Cmd/Ctrl + G` |
| Ungroup | `Cmd/Ctrl + Shift + G` |
| Duplicate | `Cmd/Ctrl + D` |
| Delete | `Backspace` / `Delete` |
| Bring Forward | `Cmd/Ctrl + ]` |
| Send Backward | `Cmd/Ctrl + [` |
| Bring to Front | `Cmd/Ctrl + Shift + ]` |
| Send to Back | `Cmd/Ctrl + Shift + [` |
| Zoom In | `Cmd/Ctrl + +` |
| Zoom Out | `Cmd/Ctrl + -` |
| Zoom to Fit | `Cmd/Ctrl + 0` |
| Export | `Cmd/Ctrl + E` |

## Tips

1. **Use Groups**: Organize complex designs with groups
2. **Name Layers**: Double-click to rename for better organization
3. **Snap to Objects**: Enable for precise alignment
4. **Export Often**: Test your exports in real projects
5. **Keyboard Shortcuts**: Learn them to work faster
