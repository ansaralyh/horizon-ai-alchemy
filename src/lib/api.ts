/**
 * Centralized API configuration — single source of truth for all API calls.
 *
 * - Local: use relative paths (/api/...). Vite dev server proxies /api to backend (see vite.config.ts).
 * - Production: same relative paths work if backend is same-origin (e.g. Vercel rewrites).
 *   If backend is on another host (e.g. Railway), set VITE_API_URL in Vercel env and redeploy.
 *
 * No hardcoded localhost or production URLs; no manual URL changes between environments.
 */

const getBase = (): string => {
  const url = import.meta.env.VITE_API_URL;
  if (url == null || url === "") return "";
  return String(url).replace(/\/$/, "");
};

/**
 * Base URL for API requests. Empty string means same origin (relative paths).
 * Only set VITE_API_URL in production when the backend is on a different host.
 */
export const getApiBaseUrl = getBase;

/**
 * Full URL for an API path. Path must start with / (e.g. "/api/auth/login").
 */
export const apiUrl = (path: string): string => {
  const base = getBase();
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
};

/** Options for apiFetch; body can be a plain object (will be JSON stringified). */
export interface ApiFetchOptions extends Omit<RequestInit, "body"> {
  body?: Record<string, unknown>;
}

/**
 * Fetch wrapper that uses the centralized API base. Use for all API calls.
 *
 * @example
 *   const res = await apiFetch("/api/auth/login", { method: "POST", body: { email, password } });
 */
export async function apiFetch(
  path: string,
  options: ApiFetchOptions = {}
): Promise<Response> {
  const url = apiUrl(path);
  const { body, ...rest } = options;
  const init: RequestInit = {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(rest.headers as HeadersInit),
    },
  };
  if (body != null && typeof body === "object") {
    init.body = JSON.stringify(body);
  }
  return fetch(url, init);
}
