import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "../react-log-in/componets/Login";
import { LogoutButton } from "../react-log-in/componets/Logout";
import { Profile } from "./Profile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;