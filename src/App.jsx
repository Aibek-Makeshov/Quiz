import "./App.css";
import QuizCard from "./components/QuizCard";
import { useState } from "react";
import QuestionCount from "./components/questionCount/QuestionCount";
import questions from "./data";

function App() {
  const [questionOrder, setQuestionOrder] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState({});

  console.log(selectedQuestions);

  return (
    <div className="container">
      <div className="main-block">
        <QuizCard
          questionNumber={questionOrder}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedQuestions={selectedQuestions}
          setSelectedQuestions={setSelectedQuestions}
          changeQuestion={setQuestionOrder}
          question={questions[questionOrder].question}
          options={questions[questionOrder].options}
        />
        <QuestionCount
          currentQuestion={questionOrder + 1}
          questionLength={questions.length}
          setQuestionOrder={setQuestionOrder}
        />
      </div>
    </div>
  );
}

export default App;
