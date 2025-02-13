import Boxes from "./Boxes";
import classes from "./Boxes.module.css";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { ContextCart } from "../context-api/context-words";

const ContainerBox = () => {

  const ctx = useContext(ContextCart);
  const letters = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  const boxesPerRow = 7;

  const rows: Array<string[]> = [];
  for (let i = 0; i < letters.length; i += boxesPerRow) {
    rows.push(letters.slice(i, i + boxesPerRow));
  }

  const clickHandler = (letter: string) => {
    ctx.onClickLetter(letter);
  };

  return (
    <>
      <Container className={classes.container}>
        <div>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="d-flex">
              {row.map((letter, boxIndex) => (
                <Boxes key={boxIndex} onClick={clickHandler.bind(null, letter)}>
                  {letter}
                </Boxes>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default ContainerBox;
