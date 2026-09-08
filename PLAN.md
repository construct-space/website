# Construct Website Plan

## Overview
Full-featured marketing and user portal website for Construct app.

## Pages Structure

### Public Pages (No Auth)
```
/                    - Landing page (hero, features, spaces, themes, pricing, CTA)
/features            - Detailed features breakdown
/pricing             - Pricing comparison with FAQ
/download            - Platform-specific download links with auto-detection
/changelog           - Version history and updates
/docs                - Documentation hub
/docs/[...slug]      - Individual doc pages
/blog                - Blog listing
/blog/[slug]         - Blog post
/contact             - Contact form
/about               - About the company/team
/privacy             - Privacy policy
/terms               - Terms of service
```

### Auth Pages
```
/login               - Login form
/register            - Registration form
/forgot-password     - Password reset request
/reset-password      - Password reset form (with token)
```

### Dashboard Pages (Auth Required)
```
/dashboard           - User overview (subscription, usage, quick actions)
/dashboard/account   - Account settings (profile, email, password)
/dashboard/billing   - Subscription management, invoices
/dashboard/licenses  - License keys, device management
/dashboard/api-keys  - API key management
/dashboard/teams     - Team management (for Team plan)
```

## Layouts
```
/layouts/default.vue     - Main layout (header, footer)
/layouts/auth.vue        - Auth pages (minimal, centered)
/layouts/dashboard.vue   - Dashboard layout (sidebar, user menu)
/layouts/docs.vue        - Documentation layout (sidebar nav, TOC)
```

## Components

### Common
- AppLogo.vue           - Logo component ✓
- AppHeader.vue         - Site header with nav
- AppFooter.vue         - Site footer
- FeatureCard.vue       - Feature display card
- SpaceCard.vue         - Space showcase card
- PricingCard.vue       - Pricing tier card
- TestimonialCard.vue   - User testimonial

### Dashboard
- DashboardSidebar.vue  - Dashboard navigation
- DashboardHeader.vue   - User menu, notifications
- StatCard.vue          - Statistics display
- UsageChart.vue        - Usage visualization
- InvoiceTable.vue      - Invoice listing
- LicenseCard.vue       - License key display

### Auth
- LoginForm.vue         - Login form component
- RegisterForm.vue      - Registration form
- SocialLogin.vue       - OAuth buttons

## Composables

### API (sync-api integration)
```typescript
/composables/useAuth.ts
- login(email, password)
- register(data)
- logout()
- refreshToken()
- getCurrentUser()

/composables/useSubscription.ts
- getSubscription()
- getPlans()
- createCheckout(planId)
- cancelSubscription()
- getInvoices()

/composables/useLicenses.ts
- getLicenses()
- activateLicense(key)
- deactivateLicense(key)
- getDevices()

/composables/useApi.ts
- Base API helper with auth headers
```

## Middleware
```
/middleware/auth.ts        - Protect dashboard routes
/middleware/guest.ts       - Redirect logged-in users from auth pages
```

## API Endpoints (sync-api)
```
POST   /auth/login
POST   /auth/register
POST   /auth/logout
POST   /auth/refresh
GET    /auth/me

GET    /subscription
GET    /subscription/plans
POST   /subscription/checkout
DELETE /subscription
GET    /subscription/invoices

GET    /licenses
POST   /licenses/activate
DELETE /licenses/:id
GET    /licenses/devices
```

## Design System

### Colors (from Construct)
- --app-background
- --app-foreground
- --app-muted
- --app-accent
- --app-border
- --app-canvas-bg

### Typography
- Font: Rubik
- Headings: font-bold
- Labels: uppercase tracking-wider text-xs

### Spacing
- Section padding: py-24
- Container: max-w-7xl mx-auto px-6
- Grid gaps: gap-8, gap-12, gap-16

### Components Style
- Cards: rounded-xl bg-white/50 dark:bg-white/5 border border-app
- Buttons: rounded-lg, bg-app-accent for primary
- Inputs: rounded-lg with border-app

## Implementation Order

1. **Phase 1: Foundation**
   - [ ] Nuxt config with runtime config for API
   - [ ] Layouts (default, auth, dashboard)
   - [ ] Base composables (useApi, useAuth)
   - [ ] Middleware (auth, guest)

2. **Phase 2: Public Pages**
   - [ ] Landing page (complete) ✓
   - [ ] Features page
   - [ ] Pricing page
   - [ ] Download page
   - [ ] Contact page

3. **Phase 3: Auth Flow**
   - [ ] Login page
   - [ ] Register page
   - [ ] Forgot/Reset password
   - [ ] Email verification

4. **Phase 4: Dashboard**
   - [ ] Dashboard overview
   - [ ] Account settings
   - [ ] Billing/Subscription
   - [ ] Licenses management

5. **Phase 5: Content**
   - [ ] Documentation (Nuxt Content)
   - [ ] Blog
   - [ ] Changelog

## Notes
- Use Nuxt UI components throughout
- SSR for public pages, CSR for dashboard
- Implement proper SEO meta tags
- Add structured data for Google
- Mobile-first responsive design
