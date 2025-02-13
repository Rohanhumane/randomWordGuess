import React, { useEffect, useContext } from "react";
import Display from "./Display";
import { Container } from "react-bootstrap";
import classes from "./Display.module.css";
import { ContextCart } from "../context-api/context-words";
const RandomWord = () => {
  const ctx = useContext(ContextCart);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/randomword",
          {
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "I8Mc5hxdXwPs/YURT6lofg==b3Hf5BnDSL1YHHmU",
            },
          }
        );
        const data = await response.json();
        ctx.onFinalWord(data.word[0].toUpperCase());
        console.log(data.word[0].toUpperCase());
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container id={"eeee"} className={classes.display}>
        <Display />
      </Container>
    </>
  );
};

export default RandomWord;
