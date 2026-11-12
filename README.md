# Gate Pass System – Frontend

React 19 + Vite 7 + Tailwind CSS 4 interface for employee gate-pass requests and role-based pages.

## Current scope

- Login and registration screens
- Employee, executive and admin pages
- Gate-pass request form with client-side field checks
- React Router page navigation

> **Work in progress:** The gate-pass form currently does not send an API request. In the current `main` branch it may show a misleading success message; a fix is being reviewed separately. UI routes are not a substitute for server-side authorization. Do not treat this as a production-ready approval workflow.

## Getting started

```bash
npm install
npm run dev
```

Vite prints the local development URL, normally `http://localhost:5173`.

## Scripts

- `npm run dev` — start Vite development server
- `npm run build` — build the site
- `npm run lint` — run ESLint
- `npm run preview` — preview the built application

## Pages

- `/` — Home
- `/login` — Login
- `/register` — Registration
- `/employee` — Employee
- `/executive/*` — Executive
- `/admin/*` — Admin
- `/gatepass` — Gate-pass request
- `/test` — Test page

## Backend

Backend repository: [gatepass-system-backend](https://github.com/Kelumsameera/gatepass-system-backend).

The login screen currently targets `http://localhost:3000/api/users/login` directly. It stores the returned token in browser localStorage; this needs a security review, and the redirect checks `res.data.role` even though the backend responds with `res.data.user.role`. The request form has not yet been wired to `POST /api/gatepass`.

Before production use, implement a consistent API configuration, protected routes, secure authentication/session handling, actual request submission, error states and end-to-end role testing.

## Project structure

```text
src/
  App.jsx             # Route definitions
  pages/              # Role pages, login/register, request form
  components/         # Shared UI components
  assets/             # Frontend assets
```

## Security and deployment

The backend must validate authentication and permissions independently of this UI. Restrict the backend's CORS policy to approved frontend origins, do not expose credentials in client code, and test employee/executive/manager approval flows before deployment.
