import React from "react";
import {useAuth} from "@auth0/auth0-react";

export const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();

    return <button onClick={() => loginWithRedirect}>Login</button>;
};