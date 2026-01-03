# Copilot Instructions for Portfolio V1

## Architecture Overview
Static Next.js 13 portfolio with TypeScript. No backend, API routes, or database—all content is TypeScript constants.

**Data Architecture (Critical)**:
- `data/portfolio.ts` - **ONLY** source for content (projects, bio, skills). Never hardcode content in pages.
  - Skills use categorized structure: `skills: { Core_Languages: [], Frontend_Development: [], ... }`
  - Projects include `featured`, `gradient`, `tags`, and `type` properties
- `config/site.ts` - Navigation structure, metadata, social links, contact email, resume URL.
- Pages import both: `import { portfolioData } from '../data/portfolio'; import { siteConfig } from '../config/site'`

**Navigation Pattern**:
- Home page (`/`): Hash anchors (`#hero`, `#about`, `#contact`) for smooth scrolling sections
- Other pages: Standard routes (`/projects`, `/skills`)
- `_app.tsx` manages scroll restoration via `useRef` + router events (beforeHistoryChange/routeChangeComplete)
- Hash URLs trigger `scrollIntoView({ behavior: 'smooth' })` with 100ms delay
- Navbar (`components/Navbar.tsx`) detects pathname and handles both hash and route navigation

## Hero Section Design Philosophy
**Cinematic, minimal composition** - The hero is an opening scene, not a marketing section:
- **Three elements only**: Greeting (subtle), Headline (dominant 3-6 words), 3D Model
- **No CTAs/buttons** in hero - moved to About section CTA block at bottom
- **Asymmetric layout**: Text left, model bleeds right on desktop; stacked on mobile
- **Typography**: Large display font (clamp 3-5.5rem), generous letter-spacing, editorial feel
- **3D Model**: No visible container, exists "in space" via absolute positioning (`.hero-model-space`)

## Theme System (Dual Implementation)
Theme managed via `data-theme` attribute (not CSS classes):
- `ThemeContext.tsx` provides React Context for theme state + localStorage persistence
- **Navbar has independent theme logic** (directly reads localStorage, doesn't use ThemeContext)
- CSS variables in `styles/base.css` switch via `[data-theme="dark"]` selector
- **Colors (Monochromatic)**: Light mode uses `--accent-primary: #1A1A1A`, dark mode uses `--accent-primary: #E8E8E8`
  - Background: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
  - Text: `--text-primary`, `--text-secondary`, `--text-muted`

## Styling System
**No CSS Modules**—global cascade in `_app.tsx`:
1. `globals.css` (reset + fonts: Space Grotesk headers, Inter body)
2. `base.css` (CSS variables: colors, spacing scale, shadows, radius)
3. `components.css` (buttons, navbar, cards)
4. `sections.css` (page layouts)
5. `animations.css`, `responsive.css` (breakpoints: sm 480px, md 768px, lg 1024px)
6. `utilities.css` (helper classes)

**Design System**: Monochromatic minimalism—Light mode: white bg, dark text; Dark mode: deep black (`#0A0A0A`) bg, light gray accents

## Development Workflows
```bash
npm run dev    # Port 3000 (dev server)
npm run build  # Production build (must pass TypeScript strict checks)
npm run start  # Production server on port 3000
npm run lint   # ESLint (Next.js config)
```

## Adding Content/Features
| Task | Action |
|------|--------|
| Add project | Add object to `portfolioData.projects` array in `data/portfolio.ts` |
| Add skill category | Add new key to `portfolioData.skills` object (use `Category_Name` format) |
| Update bio/about | Edit `portfolioData.personal` in `data/portfolio.ts` |
| Change contact email | Update `siteConfig.contact.email` in `config/site.ts` |
| Update resume | Replace PDF in `/public/` and update `siteConfig.resume.url` |
| New page | Create `pages/newpage.tsx` + import `Layout` + add to `config/site.ts` nav/metadata |
| Modify colors | Update CSS variables in `styles/base.css` `:root` / `[data-theme="dark"]` |
| Change hero headline | Edit text directly in `pages/index.tsx` hero section (keep it 3-6 words) |
| Adjust 3D model position | Update `.hero-model-space` positioning in `styles/sections.css` |
| Toggle cursor animation | Set `ENABLE_CURSOR_ANIMATION` flag in `pages/_app.tsx` |

## Key Patterns
- **3D Model**: 
  - Uses `<model-viewer>` web component loaded from CDN (Google)
  - Model file: `/public/robotic_eye.glb`
  - Component: `components/HeroModel.tsx` (client-side only, respects prefers-reduced-motion)
  - JSX extended with `'model-viewer': any` type declaration
- **Cursor Animation**: Optional feature controlled by `ENABLE_CURSOR_ANIMATION` flag in `_app.tsx`
  - Renders `<CursorAnimation />` component which uses `useCursorAnimation` hook
  - Can be disabled without affecting site functionality
- **Hero CTAs**: All buttons/links moved to About section CTA block at bottom
- **TypeScript strict**: All props typed, inline interfaces preferred (e.g., `ThemeContextType`)
- **Hydration safety**: Components check `mounted` state before rendering theme-dependent UI to prevent mismatches
- **Client-side only**: Theme, 3D model, cursor use `useEffect` + `useState(false)` pattern for SSR compatibility
