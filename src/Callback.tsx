import { useEffect } from "react";
import { useAuth } from "react-oidc-context"
import { useNavigate } from "react-router-dom";


export default function Callback() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate("/");
        }
    }, [auth.isAuthenticated, navigate]);

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }
    else if (auth.error) {
        return <div>Error: {auth.error.message}</div>;
    }

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
      );
    }