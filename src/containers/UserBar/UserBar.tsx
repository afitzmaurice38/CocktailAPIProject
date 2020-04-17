/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const barStyle = css`
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: absolute;
  z-index: 20;
  width: 200%;
  top: 78px;
  right: 10px;
`;

const UserBar = () => {
  return (
    <div css={barStyle}>
      <h3>Your Collections</h3>
    </div>
  );
};

export default UserBar;
