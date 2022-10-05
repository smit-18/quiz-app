import React, { useState } from "react";
import Question from "./components/Question";
import questions from "./data/questions.json";

const App = () => {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <h1 className="heading">React Quiz App</h1>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <Question
            setScore={setScore}
            setShowScore={setShowScore}
            questions={questions}
          />
        )}
      </div>
    </>
  );
};

export default App;