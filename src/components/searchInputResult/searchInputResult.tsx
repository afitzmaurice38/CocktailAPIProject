/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

interface SearchResult {
  name: string;
  type: string;
  picLink?: string;
}

const SearchInputResult: FunctionComponent<SearchResult> = ({
  name,
  type,
  picLink,
}) => {
  const resultStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 10px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5ac28bc4;
    }
  `;

  const picStyle = css`
    max-width: 100px;
    max-height: 100px;
    border-radius: 5px;
  `;
  return (
    <div css={resultStyle}>
      <div>
        <div>
          <h4>{name}</h4>
        </div>
      </div>
      <div>
        <div>
          <h4>{type}</h4>
        </div>
      </div>
      <div>
        <div>
          <img css={picStyle} src={picLink} alt="a drink"></img>
        </div>
      </div>
    </div>
  );
};

export default SearchInputResult;
