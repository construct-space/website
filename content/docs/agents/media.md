---
title: Media Agent
description: Media assistant for image generation and manipulation.
---

# Media Agent

The Media agent handles image generation, manipulation, and optimization. Create images from text descriptions or process existing media files.

## Overview

| Property | Value |
|----------|-------|
| **ID** | `media` |
| **Category** | Specialized |
| **Icon** | Image |
| **Max Iterations** | 10 |

## Capabilities

The Media agent can:

- Generate images from text descriptions
- Resize and crop images
- Convert between formats
- Optimize images for web
- List media files in project

## Available Tools

### Generation
- `generate_image` - Create image from text

### Manipulation
- `resize_image` - Change dimensions
- `convert_image` - Change format
- `optimize_image` - Reduce file size

### Management
- `list_media_files` - View project media
- `get_media_info` - Get file details
- `read_file` - Read metadata
- `list_directory` - Browse media folders

## Image Formats

The Media agent works with common formats:

| Format | Best For |
|--------|----------|
| PNG | Transparency, screenshots |
| JPEG | Photos, complex images |
| WebP | Web optimization |
| SVG | Vector graphics, icons |
| GIF | Animations |

## Example Interactions

**Generate an image**:
```
@media Generate a hero image for a tech startup landing page with abstract blue gradients
```

**Resize images**:
```
@media Resize all images in /assets/photos to 800px width while maintaining aspect ratio
```

**Convert format**:
```
@media Convert the PNG screenshots to WebP for better web performance
```

**Optimize for web**:
```
@media Optimize all images in the public folder for web, targeting under 100KB each
```

## Guidelines

The Media agent follows these principles:

- **Match descriptions** - Generated images align with prompts
- **Optimize for web** - Reasonable file sizes
- **Preserve aspect ratios** - Unless specified otherwise
- **Appropriate formats** - PNG for transparency, JPEG for photos, WebP for web

## Working with Media

For best results:

1. **Be descriptive** - Detail what you want in generated images
2. **Specify dimensions** - Exact sizes when needed
3. **Mention purpose** - "for web" helps with optimization
4. **Batch operations** - Process multiple files at once
