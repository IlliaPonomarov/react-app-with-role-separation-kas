import { Link } from "react-router-dom";
import userinfo from "./api";
import { useAuth } from "react-oidc-context";

export default function Home() {
  const auth = useAuth();

  const login = () => auth.signinRedirect();
  const logout = () => auth.signoutRedirect();

  const testCall = async () => {
    if (!auth.user) return;
    const data = await userinfo(auth.user);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h2>SPA + Spring Authorization Server</h2>

      {auth.isLoading && <p>Loading auth...</p>}
      {auth.error && <p style={{ color: "crimson" }}>Error: {auth.error.message}</p>}

      {!auth.isAuthenticated ? (
        <button onClick={login}>Login</button>
      ) : (
        <>
          <p>
            Logged in as: <b>{auth.user?.profile?.preferred_username ?? auth.user?.profile?.sub}</b>
          </p>
          <button onClick={testCall}>Call /userinfo with access_token</button>{" "}
          <button onClick={logout}>Logout</button>
        </>
      )}

      <hr />
      <p>
        <Link to="/">Home</Link> | <Link to="/callback">Callback</Link>
      </p>
    </div>
  );
}