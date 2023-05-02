import React, { useState } from "react";
import "./quizCard.css";
import questions from "../data";

export default function QuizCard(props) {
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function clickNext() {
    props.changeQuestion((prevValue) => {
      if (prevValue >= 9) {
        return prevValue;
      } else {
        return prevValue + 1;
      }
    });

    props.setSelectedOption(props.selectedQuestions[props.questionNumber + 1]);
  }

  function clickPrev() {
    props.changeQuestion((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      } else {
        return prevValue;
      }
    });
    props.setSelectedOption(props.selectedQuestions[props.questionNumber - 1]);
  }

  function finishTest() {
    const result = questions.reduce((prevValue, item, index) => {
      if (item.answer === props.selectedQuestions[index]) {
        return prevValue + 1;
      } else {
        return prevValue;
      }
    }, 0);
    setResult(result);
    setShowResult(true);
  }

  function onChangeOption(e) {
    props.setSelectedQuestions((prevValue) => {
      prevValue[props.questionNumber] = e.target.value;
      return prevValue;
    });

    props.setSelectedOption(e.target.value);
  }

  function startTestAgain() {
    setShowResult(false);
    props.changeQuestion(0);
    props.setSelectedQuestions({});
    props.setSelectedOption("");
  }

  return (
    <div>
      {showResult ? (
        <div className="result-block">
          <h2>
            Вы ответили на {result} из {questions.length}
          </h2>
          <button onClick={startTestAgain} className="again">
            Пройти тест заново
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <h2>{props.question}</h2>
          <div className="options">
            {props.options?.map((item, index) => {
              return (
                <label>
                  <input
                    type="radio"
                    name={props.question}
                    onChange={onChangeOption}
                    value={item}
                    checked={props.selectedOption === item}
                  />
                  {item}
                </label>
              );
            })}
          </div>
          <div className="buttons">
            <button
              style={
                props.questionNumber === 0 ? { visibility: "hidden" } : null
              }
              onClick={clickPrev}
            >
              Предыдущий
            </button>
            <button
              style={
                props.questionNumber === questions.length - 1
                  ? { visibility: "hidden" }
                  : null
              }
              onClick={clickNext}
            >
              Следующий
            </button>
            <button onClick={finishTest}>Завершить тест</button>
          </div>
        </div>
      )}
    </div>
  );
}
