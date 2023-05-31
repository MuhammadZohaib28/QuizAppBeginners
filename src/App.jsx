import React, { useState, useContext } from "react";
import Start from "./components/front/Start";
import Quiz from "./components/quiz/Quiz";
import End from "./components/end/End";

import { QuizContext } from "./Helpers/Contexts";

const App = () => {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)
  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Quiz App
      </h1>
      {/* <Start /> */}

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <Start />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>
    </div>
  );
};

export default App;
