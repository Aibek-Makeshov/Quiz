import React from "react";
import "./questionCount.css";

export default function QuestionCount(props) {
  const questions = new Array(props.questionLength).fill(null);

  function handleClick(order) {
    props.setQuestionOrder(order);
  }

  return (
    <div>
      <h4>
        Вопрос {props.currentQuestion}/{props.questionLength}
      </h4>
      <div className="count-block">
        {questions.map((item, index) => {
          let isCurrentQuestion = false;

          if (index + 1 === props.currentQuestion) {
            isCurrentQuestion = true;
          }

          return (
            <div
              className="circle"
              onClick={() => {
                handleClick(index);
              }}
              style={isCurrentQuestion ? { background: "orange" } : null}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
