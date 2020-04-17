import { useState } from "react";
import { Context } from "../types/types";

export const useLogin = () => {
  const [user, setUser] = useState({
    userName: "",
    userId: "",
    token: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [error, clearError] = useState(null);

  const sendRequest = (
    userName: string,
    password: string,
    isSignup: boolean
  ) => {
    let url = isSignup
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[I've made this misttake before!!]"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[This is here temporarily while I establish the server side]";

    setLoading(true);

    const data = JSON.stringify({
      email: userName,
      password,
      returnSecureToken: true,
    });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.error) {
          setUser({
            userName: "",
            userId: "",
            token: "",
          });
          clearError(res.error.message);
          console.log(res.error.message);
        } else {
          setUser({
            userName: res.email,
            userId: res.localId,
            token: res.idToken,
          });
        }
        setLoading(false);
      });
  };

  return { user, sendRequest, isLoading, error, clearError } as Context;
};

export default useLogin;
