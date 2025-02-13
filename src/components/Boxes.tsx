import React, { useEffect, ReactNode } from "react";
import { Button } from "react-bootstrap";
// import { ReactNode } from "react";
import classes from "./Boxes.module.css";

const Boxes: React.FC<{
  children?: ReactNode;
  onClick: () => void;
}> = ({ onClick, children }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === children) {
        onClick();
      }
      if (event.key.toUpperCase() === "ENTER") {
        refreshPage();
      }
    };

    const refreshPage = () => {
      window.location.reload(); // Refresh the page
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClick, children]);

  return (
    <Button onClick={onClick} variant="primary" className={classes.box}>
      {children}
    </Button>
  );
};

export default Boxes;
