import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-amber-400 hover:opacity-50 p-1 ml-2 mt-2 rounded-md font-medium text-bold" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;