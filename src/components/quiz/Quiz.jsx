import React, { useContext, useState } from "react";
import "../quiz/Quiz.css";
import Questions from "../../Helpers/Questions";
import { QuizContext } from "../../Helpers/Contexts";

const Quiz = () => {
  const { score, setScore } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const NextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    alert(score);

    setCurrQuestion(currQuestion + 1);
  };
  return (
    <div className="quiz">
      <div className="quizSubSection">
        <h1>Quiz Started </h1>
        <h2>{Questions[currQuestion].prompt}</h2>
        <button
          onClick={() => {
            setOptionChosen("A");
            NextQuestion();
          }}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setOptionChosen("B");
            NextQuestion();
          }}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setOptionChosen("C");
            NextQuestion();
          }}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setOptionChosen("D");
            NextQuestion();
          }}
        >
          {Questions[currQuestion].OptionD}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
