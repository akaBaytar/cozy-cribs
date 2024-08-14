# CozyCribs

> A web application to help you discover perfect home away from home. Explore a wide variety of unique, comfortable, and affordable accommodations around the world.

## Live Demo

- You can access the live demo via [Vercel](https://cozycribs-burakbilgili.vercel.app).

## Screens

<img src="/public/screen1.jpg" />
<img src="/public/screen2.jpg" />

## Features

**Here are some of the current features that CozyCribs has:**

- [x] User authentication with Next Auth
- [x] User authorization
- [x] Admin functionality
- [x] Route protection
- [x] User profile
- [x] Property listing CRUD
- [x] Property image upload
- [x] Property search
- [x] Leaflet map
- [x] Toast notifications
- [x] Property bookmarking - favorite properties
- [x] Property sharing to social media
- [x] Loading skeletons
- [x] Responsive design (Tailwind - Shadcn/ui)
- [x] Custom 404 page
- [x] Next.js Actions

**CozyCribs uses the following technologies:**

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.com/)
- [Leaflet](https://leafletjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Share](https://www.npmjs.com/package/react-share)

## Getting Started

#### Prerequisites

- Node.js version 18 or higher
- Sign up and create a new project at [Supabase](https://supabase.com/dashboard/sign-up)
- Sign up and create a new application at [Clerk](https://dashboard.clerk.com/sign-up)

#### `.env` File

Create `.env` file and fill in the following environment variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[YOUR PUBLISHABLE KEY]
CLERK_SECRET_KEY=[YOUR SECRET KEY]
DATABASE_URL=[YOUR DATABASE URL]
DIRECT_URL=[YOUR DATABASE DIRECT URL]
SUPABASE_URL=[YOUR SUPABASE URL]
SUPABASE_KEY=[YOUR SUPABASE KEY]
NEXT_PUBLIC_WEBSITE_URL=[PRODUCTION URL FOR SHARES]
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/profile/create
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/profile/create
```

#### Install Dependencies

```bash
npm install
```

#### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details
