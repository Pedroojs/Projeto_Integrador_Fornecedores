# Controle de Estoque (Stock Control System)

## Overview

This is a full-stack inventory management system built with React frontend and Express backend. The application allows users to manage products, track stock movements, and maintain inventory records. It's a Portuguese-language application ("Sistema de Controle de Estoque") designed for product management and stock tracking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with Vite as the build tool
- **Styling**: Tailwind CSS with a comprehensive design system using CSS custom properties for theming (supports light/dark mode)
- **UI Components**: Radix UI primitives (dialogs, dropdowns, forms, navigation, etc.) providing accessible, unstyled components
- **State Management**: TanStack React Query for server state management and caching
- **Forms**: React Hook Form with Zod resolvers for validation
- **Path Aliasing**: Uses `@/*` alias pointing to `src/*` directory

### Backend Architecture
- **Runtime**: Node.js with TypeScript (tsx for development)
- **Framework**: Express.js (inferred from project name and session handling)
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Schema Validation**: Drizzle-Zod for type-safe schema definitions
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions

### Build System
- **Development**: `tsx server/index.ts` runs the TypeScript server directly
- **Production Build**: Custom build script (`script/build.ts`) outputs to `dist/`
- **Database Migrations**: Drizzle Kit for schema pushing (`db:push`)

### Authentication Pattern
- Session-based authentication with server-side session storage
- `useAuth` hook queries `/api/auth/user` endpoint for current user state
- Fallback localStorage service for offline/demo functionality

### Design Patterns
- **Component Library**: shadcn/ui-style component architecture with class-variance-authority for variant styling
- **API Communication**: Centralized `apiRequest` utility function with consistent error handling
- **Query Configuration**: Disabled automatic refetching and infinite stale time (manual cache invalidation expected)

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via Drizzle ORM and connect-pg-simple)
- **Drizzle Kit**: Database schema management and migrations

### UI Libraries
- **Radix UI**: Complete suite of accessible primitives (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **Embla Carousel**: For carousel/slider components
- **cmdk**: Command palette functionality
- **date-fns**: Date manipulation utilities

### Core Libraries
- **TanStack React Query**: Async state management
- **Zod**: Runtime type validation
- **class-variance-authority + clsx + tailwind-merge**: CSS class management utilities

### Fonts
- Google Fonts: DM Sans, Fira Code, Geist Mono, Architects Daughter