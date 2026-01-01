
import type { AuthProviderProps } from "react-oidc-context";

export const AUTH_SERVER_URL = "http://localhost:9000/auth";
export const FRONTEND_URL = "http://localhost:5173";
export const FRONTEND_CALLBACK_URL = `${FRONTEND_URL}/callback`;

export const oidcConfig: AuthProviderProps = {
  authority: AUTH_SERVER_URL,
  client_id: "frontend-app",
  redirect_uri: FRONTEND_CALLBACK_URL,
  post_logout_redirect_uri: `${FRONTEND_URL}/`,
  response_type: "code",
  scope: "openid profile email api.read",
  automaticSilentRenew: false, 
  loadUserInfo: true,
}
