# AGENTS.md - AI Agent Guide for ProJor Templates

## Overview

This repository uses ProJor - a model-based code generator. ProJor generates source code from templates and data models.

**Critical**: Most files are generated and must NOT be edited directly. Modify source templates and data in `.projor/`, then regenerate.

## Agent Workflow

When handling user requests, follow this algorithm:

1. **Gather Context**
   - Read relevant files from `.projor/` directory
   - Understand the current model state
   - Identify which templates/data need modification

2. **Plan TODOs**
   - Break down the request into specific tasks
   - Use manage_todo_list tool to track work
   - Identify dependencies between tasks

3. **Execute TODOs**
   - Modify templates in `.projor/template/`
   - Modify data in `.projor/data/` or `.projor/.pages`
   - Modify configuration in `.projor/*.pglobal.yaml`
   - Run `projor generate` after changes

4. **Quality Checks**
   - Build the application (`pnpm run build`)
   - Fix any build errors
   - Verify generated files are correct

## ProJor Architecture

ProJor uses a model-template-generation workflow:

1. Define data model (schemas, data collections, globals, DSLs)
2. Write Mustache templates describing code generation
3. Run `projor generate` to produce output files

## Directory Structure

### `.projor/` Configuration Directory

All ProJor configuration lives here. This is where you make changes.

```
.projor/
├── .pages                      # DSL file defining pages
├── README.md                   # User documentation
├── project.pglobal.yaml        # Global project settings
├── header.pglobal.yaml         # Header configuration
├── sidebar.pglobal.yaml        # Sidebar configuration
├── footer.pglobal.yaml         # Footer configuration
├── actions.pglobal.yaml        # Action buttons configuration
├── data/                       # Data collections (*.pdata.yaml)
├── schema/                     # Data schemas (*.pschema.yaml)
├── template/                   # Mustache templates (*.ptemplate.mustache)
├── partials/                   # Mustache partials (*.partial.mustache)
└── language/                   # Custom DSL parsers (*.plang.js)
```

### Generated Files

Do NOT edit these files directly. They will be overwritten:

- `package.json`
- `src/pages/*.page.tsx`
- `src/components/*.component.tsx`
- `src/layout/AppLayout.component.tsx`
- `src/index.tsx`
- `src/tailwind.css`
- `tailwind.config.js`
- `Dockerfile`
- `docker-compose.yaml`
- `README.md`
- `PAGES.md`

## Modification Guide

### Adding/Modifying Pages

Edit `.projor/.pages` using the custom DSL:

```
dashboard Dashboard[ic:baseline-dashboard] {
    title Admin dashboard
    message This is the admin dashboard.
    stat widget 24H Revenue[$1,000,000] { }
}

list_page Products[ic:baseline-shopping-cart] {
    title Products
    message List of all products
    column id: number example 123
    column name: string example Product Name
    item action Edit[ic:baseline-edit] goes to EditProduct
}
```

Run `projor generate` after editing.

### Changing Project Metadata

Edit `.projor/project.pglobal.yaml`:

```yaml
scope: my-org
name: admin-site
description: My admin site
version: 0.0.1
initialPage: dashboard
```

Run `projor generate` after editing.

### Updating Dependencies

Edit `.projor/template/package-json.ptemplate.mustache`, then:
1. Run `projor generate`
2. Run `pnpm install`

### Modifying Component Templates

Edit `.projor/template/*.ptemplate.mustache`. Templates use Mustache syntax with ProJor extensions:

```mustache
{
    "forEach": "pages",
    "filename": "src/pages/{{kebabCase name}}.page.tsx",
    "formatUsing": "typescript"
}
---
import { AppLayout } from "../layout/AppLayout.component";

export function {{pascalCase name}}Page(opts: { navigate: (path: string) => void }) {
    return <AppLayout content={() => (
        <div>{{title}}</div>
    )} />;
}
```

Run `projor generate` after editing.

### Changing Available Page/Widget Types

Edit `.projor/data/*.pdata.yaml`:

```yaml
id: pagetype
name: Page Types
description: The supported types of pages
schema: PageType
objects:
  - name: Dashboard
    description: A dashboard page
  - name: ListPage
    description: A page that lists items
```

Run `projor generate` after editing.

### Modifying UI Configuration

Edit `.projor/header.pglobal.yaml`, `.projor/sidebar.pglobal.yaml`, `.projor/footer.pglobal.yaml`.

Run `projor generate` after editing.

### Extending the DSL

Edit `.projor/language/pages.plang.js` to add new syntax features.

Run `projor generate` after editing.

### Adding New Schemas

Create `.projor/schema/YourSchema.pschema.yaml`:

```yaml
id: YourSchema
name: Your Schema
description: Description of your schema
fields:
  - name: fieldName
    description: Field description
    type: string
    required: true
```

Run `projor generate` after creating.

## Key ProJor Concepts

### Schemas (.pschema.yaml)
Define structure of data objects with typed fields.

### Data Collections (.pdata.yaml)
Collections of data objects that conform to a schema.

### Globals (.pglobal.yaml)
Project-wide configuration values accessible in all templates.

### Templates (.ptemplate.mustache)
Mustache templates with metadata header:
- `forEach`: Generate one file per item in a collection
- `map`: Generate one file with conditional logic
- `filename`: Output path (can use template expressions)
- `formatUsing`: Auto-format output (typescript, json, css, etc.)

### Partials (.partial.mustache)
Reusable template fragments included via `{{> partial-name}}`

### Languages (.plang.js)
Custom parsers for domain-specific languages (DSLs).

## Common Workflows

### Add a New Page
1. Edit `.projor/.pages`
2. Run `projor generate`
3. Run `pnpm run build` to verify

### Update Dependencies
1. Edit `.projor/template/package-json.ptemplate.mustache`
2. For breaking changes, update related templates
3. Run `projor generate`
4. Run `pnpm install`
5. Run `pnpm run build` to verify

### Customize Layout/Styling
1. Edit `.projor/template/app-layout-tsx.ptemplate.mustache`
2. Run `projor generate`
3. Run `pnpm run build` to verify

### Add a New Component Type
1. Create `.projor/schema/YourComponent.pschema.yaml`
2. Create `.projor/template/your-component-tsx.ptemplate.mustache`
3. Update `.projor/language/pages.plang.js` if needed
4. Update related templates
5. Run `projor generate`
6. Run `pnpm run build` to verify

## Critical Rules

Things to avoid:
- Editing generated files directly (always edit sources in `.projor/`)
- Forgetting to run `projor generate` after changes
- Modifying templates without understanding their dependencies
- Skipping the build verification step
- Violating schema constraints in data objects

## ProJor Resources

- Documentation: docs.projor.io
- License: license.projor.io
- Download: download.projor.io

## Useful Commands

- `projor generate` - Regenerate all files from templates
- `projor query` - Inspect the model structure
- Check `.projor/.pstate.json` for current model state
- `pnpm run build` - Build the application
- `pnpm run serve` - Run development server

## Notes

- Templates support helpers: `{{pascalCase name}}`, `{{kebabCase name}}`, etc.
- The `forEach` directive generates multiple files from collections
- Templates can query the model using ProJor's query syntax
- Keep templates DRY using partials for repeated patterns
- The `.projor/` directory is the source of truth
- All other files are generated artifacts
