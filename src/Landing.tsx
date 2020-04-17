import React, { FormEvent, useContext, useRef } from "react";
import Drink from "./components/UI/SVG/WhiskeyIcon";
import { RouteComponentProps } from "@reach/router";
import { AuthContext } from "./AuthContext";

const Landing = (props: RouteComponentProps) => {
  const { user, sendRequest } = useContext(AuthContext);
  const searchInput = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchInput.current!.value);
  };
  return (
    <div>
      <div id="header">
        <span className="logo">
          <Drink />
        </span>
        <h1>The Bored Bartender</h1>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <input placeholder="What'll it be?" name="search" ref={searchInput} />
          <button type="submit">
            <span className="btnText">Bottoms Up!</span>
          </button>
        </form>
        <p style={{ paddingBottom: "0", marginBottom: "0" }}>
          Search for sexy, damn good drinks that{" "}
        </p>
        <p style={{ paddingTop: "0", marginTop: "0" }}>
          ...you can make at home right now!
        </p>
      </div>
      <div id="joinSocial">
        <h1>{`You're over 21 years old right? :)`}</h1>
        <div className="pContainer">
          <h3 className="pLink">Join the social now!</h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
