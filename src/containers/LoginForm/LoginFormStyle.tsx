/** @jsx jsx */
import { css } from "@emotion/core";

/*Component Styles*/
export const FormStyle = css`
  background: rgb(255, 255, 255);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: absolute;
  z-index: 20;
  width: 200%;
  top: 78px;
  right: 10px;

  form {
    margin-bottom: 0px;
  }
  form label {
    display: block;
  }
  form input {
    display: block;
    border: 2px solid black;
    border-radius: 5px;
    width: 100%;
  }

  form button {
    border: none;
    background-color: #4eb980;
    border-radius: 5px;
    font-size: 16pt;
    color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    display: block;
    margin: 10px auto 0 auto;
    width: 60%;
    cursor: pointer;
    transition: background 0.3s;
  }

  form button:hover {
    background-color: #5ac28a;
  }
  form button:active {
    background-color: #389764;
  }

  form p {
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    margin: 0;
    user-select: none;
  }
`;
