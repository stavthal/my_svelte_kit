# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server
- `npm run dev -- --open` - Start dev server and open in browser
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- `npm run format` - Format code with Prettier
- `npm run lint` - Run linting (Prettier check + ESLint)
- `npm run check` - Type checking with svelte-check
- `npm run check:watch` - Type checking in watch mode

### Testing
- `npm run test` - Run all tests once
- `npm run test:unit` - Run tests in watch mode
- `vitest run src/demo.spec.ts` - Run single test file
- `vitest run --grep "sum test"` - Run specific test by name

## Architecture Overview

### Tech Stack
- **Framework**: SvelteKit with Svelte 5 (using new runes syntax)
- **Styling**: TailwindCSS 4.0 with @tailwindcss/vite plugin
- **TypeScript**: Full TypeScript setup with strict mode
- **Testing**: Vitest with dual configuration (client/server)
- **Internationalization**: Paraglide-JS with Inlang project
- **Build**: Vite with SvelteKit adapter-auto

### Project Structure
```
src/
├── app.css              # Global styles with Tailwind imports
├── app.d.ts             # Global type declarations
├── app.html             # HTML template with %paraglide.lang% placeholder
├── hooks.server.ts      # Server-side hooks (Paraglide middleware)
├── lib/
│   ├── components/      # Reusable Svelte components
│   └── paraglide/       # Generated i18n files (auto-generated)
└── routes/              # File-based routing
    ├── +layout.svelte   # Root layout with navigation and loading state
    ├── +page.svelte     # Homepage
    └── */+page.svelte   # Route pages
```

### Key Architectural Patterns

#### Testing Configuration
- **Dual Test Environment**: Vitest configured with separate client/server test projects
- **Client Tests**: Run in browser environment using Playwright with vitest-browser-svelte
- **Server Tests**: Run in Node.js environment
- **Test File Patterns**:
  - `*.svelte.{test,spec}.{js,ts}` → Client environment
  - `*.{test,spec}.{js,ts}` → Server environment

#### Internationalization Setup
- **Paraglide Integration**: Configured with Vite plugin generating to `src/lib/paraglide/`
- **Message Files**: Located in `messages/` directory (en.json, el.json)
- **Server Middleware**: Handles locale detection and HTML transformation
- **Supported Locales**: English (en) as base, Greek (el)

#### State Management
- **Svelte 5 Runes**: Using `$state`, `$props`, `$effect` syntax
- **Stores**: Traditional Svelte stores for cross-component state (e.g., loading state)
- **Navigation**: SvelteKit's `goto`, `beforeNavigate`, `afterNavigate` for routing

#### Styling Architecture
- **TailwindCSS 4.0**: New Vite plugin integration
- **Utility-First**: Components styled with Tailwind utilities
- **Plugins**: Forms and Typography plugins enabled
- **Configuration**: Prettier plugin for class sorting

### Development Guidelines

#### Component Development
- Use Svelte 5 runes syntax (`$state`, `$props`) instead of legacy syntax
- Server-side logic goes in `+page.server.ts` files with proper Actions types
- Form actions use SvelteKit's `fail()` helper for validation errors

#### Testing Strategy
- Place component tests alongside components using `.svelte.spec.ts` extension
- Use `vitest-browser-svelte` render function for component testing
- Server-side tests use standard Vitest in Node environment
- Browser tests have access to `page` context from `@vitest/browser/context`

#### Internationalization
- Message keys defined in `messages/{locale}.json` files
- Paraglide generates typed functions in `src/lib/paraglide/`
- Server middleware handles locale resolution and HTML lang attribute injection

## Environment Setup

### Prerequisites
- Node.js (project uses ES modules)
- Package manager: npm (lockfile present: `package-lock.json` not shown, but npm scripts configured)

### Development Workflow
1. `npm install` - Install dependencies
2. `npm run dev` - Start development
3. `npm run check` - Verify TypeScript types
4. `npm run test` - Run test suite
5. `npm run lint` - Check code quality
