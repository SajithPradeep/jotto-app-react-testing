import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";

function App() {
  //TODO: get props from shared state
  const success = false;
  const secretWord = "party";
  const guessedWords = [];
  return (
    <div className="container alignVertical" data-test="component-app">
      <h1>Jotto App</h1>
      <div className="divider"></div>
      <Congrats
        success={success}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
      <Input success={success} secretWord={secretWord} />
      <h2>Guessed Words</h2>
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
