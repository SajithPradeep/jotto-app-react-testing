import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

function App() {
  return (
    <div className="container alignVertical" data-test="component-app">
      <h1>Jotto App</h1>
      <div className="divider"></div>
      <Congrats
        success={true}
        style={{ marginTop: "10px", marginBottom: "10px" }}
      />
      <h2>Guessed Words</h2>
      <GuessedWords
        guessedWords={[
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "click", letterMatchCount: 2 },
        ]}
      />
    </div>
  );
}

export default App;
