import React, { useContext } from "react";
import "./Start.css";
import { QuizContext } from "../../Helpers/Contexts";

const Start = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="start">
      <div className="startSubSection">
        <p className="startNameLine">Enter Your Name</p>
        <input placeholder="Enter Your Name" />
        <button
          onClick={() => {
            setGameState("quiz");
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Start;
