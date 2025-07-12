# Propa AI Systems - Enterprise Finance AI Platform

## Overview

This is a full-stack web application for Propa AI Systems, a company that provides enterprise-grade AI solutions for finance operations. The application is built as a marketing landing page showcasing three main AI systems designed to help Fortune 500 CFOs automate financial processes, reduce compliance costs, and improve operational efficiency.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript throughout the stack
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple

### Design System
- **Color Scheme**: Dark theme with gold accent colors
- **Typography**: Inter font family
- **Component Library**: Custom components built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Landing Page Sections
1. **Navigation**: Fixed header with branding and CTA button
2. **Hero Section**: Main value proposition with dual CTAs
3. **Problem Section**: Identifies pain points in manual finance operations
4. **Case Studies**: Real-world success stories (Unilever, HSBC, etc.)
5. **AI Systems**: Three main product offerings with features and metrics
6. **FAQ Section**: Common concerns about AI implementation
7. **Trust Indicators**: Security and compliance certifications
8. **Final CTA**: Conversion-focused call-to-action section

### Core AI Systems
1. **AI Financial Intelligence System**: Predictive insights and automated forecasting
2. **AI Compliance & Risk Shield**: Automated compliance monitoring and fraud detection
3. **AI Operations Automation Suite**: RPA and workflow automation

### Interactive Elements
- **Calendly Modal**: Integration for booking strategy calls
- **Smooth Scrolling**: Enhanced navigation between sections
- **Responsive Design**: Optimized for all device sizes

## Data Flow

### Client-Side Data Flow
1. Static content rendering through React components
2. Modal state management for Calendly integration
3. Smooth scrolling navigation between page sections
4. Responsive image loading and optimization

### Server-Side Data Flow
1. Express.js serves the React application
2. API routes prefixed with `/api` for future backend functionality
3. Database schema defined with Drizzle ORM (users table as example)
4. Session management ready for user authentication

### Database Schema
- **Users Table**: Basic user structure with username/password (foundation for future features)
- **Migrations**: Drizzle-kit for database schema management
- **Type Safety**: Zod schemas for validation and TypeScript inference

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Extensive Radix UI component collection
- **State Management**: TanStack React Query
- **Utilities**: date-fns, clsx, class-variance-authority
- **Icons**: Lucide React
- **Carousel**: Embla Carousel

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **Linting**: ESLint configuration
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Neon serverless PostgreSQL for development
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite production build to `dist/public`
- **Backend**: esbuild bundle to `dist/index.js`
- **Database**: Drizzle migrations for schema deployment
- **Deployment**: Node.js production server

### Environment Configuration
- **Development**: NODE_ENV=development with tsx
- **Production**: NODE_ENV=production with compiled JavaScript
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

The application is designed as a high-converting landing page with a scalable architecture that can easily accommodate future features like user authentication, CRM integration, and advanced analytics tracking.