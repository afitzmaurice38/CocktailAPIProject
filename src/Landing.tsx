import React, { FormEvent, useEffect, useState, useRef } from "react";
import useHttp from "./hooks/useHttp";
import Drink from "./components/UI/SVG/WhiskeyIcon";
import { RouteComponentProps } from "@reach/router";
import SearchInputResult from "./components/searchInputResult/searchInputResult";

const Landing = (props: RouteComponentProps) => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const { sendRequest, data, isLoading, error, clear } = useHttp();
  const [displayData, setDisplayData] = useState([]);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(enteredSearch, displayData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredSearch !== "") {
        sendRequest(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURI(
            enteredSearch
          )}`
        );
      } else {
        clear();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredSearch]);

  useEffect(() => {
    const updateData =
      data && data.drinks !== null
        ? data.drinks.slice(0, 10) || [...data.drinks]
        : null;
    setDisplayData(updateData);
  }, [data]);

  let showResults;
  if (displayData && displayData.length) {
    showResults = displayData.map(function results(result: any) {
      return (
        <SearchInputResult
          key={result.strDrink}
          name={result.strDrink}
          type={result.strCategory}
          picLink={result.strDrinkThumb}
        />
      ); //<h1 key={result.strDrink}>{result.strDrink}</h1>
    });
  }

  return (
    <div>
      <div id="header">
        <span className="logo">
          <Drink />
        </span>
        <h1>The Bored Bartender</h1>
        <div className="formContainer">
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="inputWrapper">
              <input
                placeholder="What'll it be?"
                name="search"
                autoComplete="off"
                onChange={(e) => setEnteredSearch(e.target.value)}
              />
              <button type="submit">
                <span className="btnText">Bottoms Up!</span>
              </button>
              <div className="results">{showResults}</div>
            </div>
          </form>
        </div>
        <p style={{ paddingBottom: "0", marginBottom: "0" }}>
          Search for damn good drinks that{" "}
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

export default Landing; //<div className="results">{showResults}</div>
