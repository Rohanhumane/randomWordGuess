import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerBox from "./components/Container";
import RandomWord from "./components/RandomWord";
import ContextProvider from "./context-api/ContexProvider";

const App = () => {
  return (
    <ContextProvider>
      <h1>Random Word Guess</h1>
      <ContainerBox />
      <RandomWord />
    </ContextProvider>
  );
};

export default App;
