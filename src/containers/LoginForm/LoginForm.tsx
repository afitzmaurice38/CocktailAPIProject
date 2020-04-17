/** @jsx jsx */
import React, { FormEvent, useContext, useEffect, useReducer } from "react";
import { jsx } from "@emotion/core";
import { reducer } from "../../types/types";
import { AuthContext } from "../../AuthContext";
import { FormStyle } from "./LoginFormStyle";
import ClipLoader from "react-spinners/ClipLoader";

const initalState = {
  email: "",
  password: "",
  isSignup: false,
  status: "",
};

// const CHANGE_EMAIL = "CHANGE_EMAIL";
// const CHANGE_PASSWORD = "CHANGE_PASSWORD";
// const CHANGE_ISSIGNUP = "CHANGE_ISSIGNUP";
// const CHANGE_STATUS = "CHANGE_STATUS";

const formReducer = (state = initalState, action: reducer) => {
  return { ...state, ...action.payload };
};

/*Component Layout & Logic */
const FormCard = () => {
  const { sendRequest, error, isLoading, clearError } = useContext(AuthContext);
  const [state, dispatch] = useReducer(formReducer, initalState);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    sendRequest(state.email, state.password, state.isSignup);
  };

  const clearStatus = () => {
    setTimeout(() => {
      dispatch({ payload: { status: "" } });
    }, 3000);
  };

  useEffect(() => {
    if (error) {
      dispatch({ payload: { status: error } });
      clearError(null);
      clearStatus();
    }
  }, [error]);

  return (
    <div css={FormStyle}>
      <span>{isLoading ? <ClipLoader /> : state.status}</span>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="email">
          Email
          <input
            name="email"
            placeholder="Please enter your email"
            onChange={(e) => dispatch({ payload: { email: e.target.value } })}
          />
        </label>

        <label htmlFor="email">
          Password
          <input
            name="password"
            type="password"
            placeholder="Please enter your password"
            onChange={(e) =>
              dispatch({ payload: { password: e.target.value } })
            }
          />
        </label>

        <button type="submit">
          {!state.isSignup ? "Login" : "Create Account"}
        </button>
        <p onClick={() => dispatch({ payload: { isSignup: !state.isSignup } })}>
          {!state.isSignup
            ? "No account? Create one."
            : "Have an account? Login here."}
        </p>
      </form>
    </div>
  );
};

export default FormCard;
