import React from "react";
export interface contextType {
  onClickLetter: (item: string) => void;
  onFinalWord: (item: string) => void
  wordsString: string;
  finalWord: string;
}
export const ContextCart = React.createContext({
  onClickLetter: (item: string) => {},
  onFinalWord: (item: string) => {},
  wordsString: "",
  finalWord: "",
});
