/** @jsx jsx */
import React, { FunctionComponent, useContext, useState } from "react";
import { jsx, css } from "@emotion/core";
import { AuthContext } from "../../AuthContext";
import LoginForm from "../../containers/LoginForm/LoginForm";
import UserBar from "../../containers/UserBar/UserBar";

/* Component Styles */
const LayoutStyle = css`
  position: relative;
`;

const InnerStyles = css`
  width: 100%;
  margin: 10px 0 10px 0;

  h3 {
    margin: 0 10px 0 0;
    border: solid 2px black;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
    user-select: none;
    padding: 0 10px 0 10px;
  }

  .toggledOff {
    color: #fff;
    background: #4eb980;
  }
`;

/*Component Layout */
const Layout: FunctionComponent = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [showBar, setShowBar] = useState(false); //Displays login form if not logged in. See ternary in the return block.
  let isAuth;

  isAuth = (
    <div css={InnerStyles} onClick={() => setShowBar(!showBar)}>
      <h3 className={showBar ? undefined : "toggledOff"}>Your Bar</h3>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3
            style={{
              padding: "14px 0 0 0",
              margin: "0 0 0 0",
            }}
          >
            "Entertainment Isn't Boring."
          </h3>
        </div>
        <div css={LayoutStyle}>
          {isAuth}
          {showBar ? !user.userName ? <LoginForm /> : <UserBar /> : null}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
