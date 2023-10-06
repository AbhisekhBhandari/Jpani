import React from "react";

export const AuthContext = React.createContext<{
  authentication_status: boolean;
  changeAuthenticationStatus: (navigateTo: string, active: number) => void;
}>({
  authentication_status: false,
  changeAuthenticationStatus: (navigateTo: string, active: number) => {},
});
