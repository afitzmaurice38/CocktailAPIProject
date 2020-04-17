//For AuthContext
export interface Context {
  user: { userName: string; userId: string; token: string };
  sendRequest: (userName: string, password: string, isSignup: boolean) => void;
  isLoading: boolean;
  error: null | string;
  clearError: (nullifyError: null) => void;
}

//
export interface reducer {
  payload: {};
}
