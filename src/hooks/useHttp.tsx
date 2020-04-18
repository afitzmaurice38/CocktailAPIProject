import { useReducer, useCallback } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
};
const httpReducer = (curHttpState = initialState, action: any) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
      };
    case "RESPONSE":
      return {
        ...curHttpState,
        loading: false,
        data: action.responseData,
      };
    case "ERROR":
      return { ...curHttpState, loading: false, error: action.errorMessage };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached");
  }
};

const useHttp = () => {
  const [httpState, dispatchHTTP] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => dispatchHTTP({ type: "CLEAR" }), []);

  const sendRequest = useCallback((url) => {
    console.log(url);
    dispatchHTTP({ type: "SEND" });
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        dispatchHTTP({
          type: "RESPONSE",
          responseData: responseData,
        });
      })
      .catch((error) => {
        dispatchHTTP({ type: "ERROR", errorMessage: error.message });
      });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    clear: clear,
  };
};

export default useHttp;
