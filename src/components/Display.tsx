import React, { useContext } from "react";
import classes from "./Display.module.css";
import { ContextCart } from "../context-api/context-words";

let arr: Number[] = [];

const Display = () => {
  const ctx = useContext(ContextCart);

  const dashes = Array.from({ length: ctx.finalWord.length }, (_, index) => {
    if (
      ctx.finalWord[index] === ctx.wordsString &&
      !arr.some((a) => a === index)
    ) {
      arr.push(index);
      return (
        <div key={index}>
          <div key={`${index}_word`} className={classes.word}>
            {ctx.finalWord[index]}
          </div>
          <div className={classes.dash}></div>
        </div>
      );
    }
    if (arr.some((a) => a === index)) {
      return (
        <div key={index}>
          <div key={`${index}_word`} className={classes.word}>
            {ctx.finalWord[index]}
          </div>
          <div className={classes.dash}></div>
        </div>
      );
    }

    return <div key={index} className={classes.dash}></div>;
  });

  return <>{dashes}</>;
};

export default Display;
