import { createContext } from "react";
import { Context } from "./types/types";

export const AuthContext = createContext<Context>({
  user: {
    userName: "", //User Information
    userId: "",
    token: "",
  },
  sendRequest: () => {}, //Submit Login Request
  isLoading: false, //Loading State
  error: null, //Error
  clearError: () => {}, //Clear Error
});
