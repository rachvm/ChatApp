import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="bg-amber-400 hover:opacity-50 p-1 rounded-md font-medium text-bold mt-2 ml-2" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;