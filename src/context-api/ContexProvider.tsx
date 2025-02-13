import { ContextCart } from "./context-words";
import React, { useReducer } from "react";

const INITIAL_STATE = {
  wordsString: "",
  finalWord: "",
};

type actionType =
  | { type: "ADD_WORD"; payload: string }
  | { type: "FINAL_WORD"; payload: string };

const reducerFunc = (state: { wordsString: string ;finalWord:string}, action: actionType) => {
  switch (action.type) {
    case "ADD_WORD":
      return {
        ...state,
        wordsString: action.payload,
      };
      case "FINAL_WORD":
        return {
          ...state,
          finalWord: action.payload,
        };
    default:
      return state;
  }
};

const ContextProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
  const [wordState, dispatcher] = useReducer(reducerFunc, INITIAL_STATE);

  const addHandler = (item: string) => {
    dispatcher({
      type: "ADD_WORD",
      payload: item,
    });
  };

  const finalAddHandler = (item: string) => {
    dispatcher({
      type: "FINAL_WORD",
      payload: item,
    });
  };
  

  const contextValue = {
    onClickLetter: addHandler,
    onFinalWord: finalAddHandler,
    wordsString: wordState.wordsString,
    finalWord: wordState.finalWord,
  };

  return (
    <ContextCart.Provider value={contextValue}>
      {props.children}
    </ContextCart.Provider>
  );
};

export default ContextProvider;
