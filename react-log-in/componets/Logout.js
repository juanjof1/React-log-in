import React from 'react';
import {useAuht0} from "@auth0/auth0-react";

export const LogoutButton = () => {
    const {logout} = useAuht0();

    return(
        <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
    );
};