# Deployment & API configuration

## API URL behavior (no manual changes)

- **Local:** No env needed. The app uses relative paths (`/api/...`). Vite’s dev server proxies `/api` to `http://localhost:5000` (see `vite.config.ts`). Run the backend with `cd backend && npm run dev` and the frontend with `npm run dev`.
- **Production (e.g. Vercel):**  
  - If the backend is on **another host** (Railway, Render, etc.): set **one** env in Vercel → **Settings → Environment Variables**:  
    - Name: `VITE_API_URL`  
    - Value: backend root URL with no trailing slash (e.g. `https://your-app.railway.app`).  
    Redeploy so the build picks it up. No code changes.  
  - If the backend is served from the **same origin** (e.g. Vercel serverless under `/api`): leave `VITE_API_URL` unset.

All API calls go through `src/lib/api.ts`; there are no hardcoded localhost or production URLs in the app.

## Vercel (frontend)

- Build and output are detected from the Vite project.
- `vercel.json` sends all routes to the SPA (`index.html`) so client-side routing works.
- For production login/admin to work, the backend must be reachable: either set `VITE_API_URL` to your deployed backend URL or serve the API from the same Vercel project (e.g. serverless).

## Folder structure (relevant parts)

```
├── src/
│   ├── lib/
│   │   └── api.ts          # Central API base URL + apiFetch()
│   ├── context/
│   │   └── AuthContext.tsx # Uses apiFetch(); no raw URLs
│   └── ...
├── backend/                 # Node/Express; run separately or deploy as serverless
├── vite.config.ts          # Dev proxy: /api → localhost:5000
├── vercel.json             # SPA rewrites
└── .env.example             # Documents VITE_API_URL only
```

## Adding new API calls

Use the shared helper so base URL and behavior stay consistent:

```ts
import { apiFetch } from "@/lib/api";

const res = await apiFetch("/api/some/route", {
  method: "POST",
  body: { key: "value" },
});
const data = await res.json();
```

Do not use raw `fetch(...)` with a hardcoded host; use `apiFetch` (or `apiUrl(path)` if you need the URL only).
