import type { User } from "oidc-client-ts";
import { AUTH_SERVER_URL } from "./config/oidc";

export const USER_INFO_URL = `${AUTH_SERVER_URL}/userinfo`;

export default async function userinfo(user: User) {
  const token = user.access_token;

  const res = await fetch(USER_INFO_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}