import React, { useState } from "react";

const Question = ({setScore, setShowScore, questions}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  };

  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption, idx) => (
          <button key={idx}
            onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
