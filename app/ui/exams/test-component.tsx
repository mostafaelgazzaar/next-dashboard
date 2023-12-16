import { useEffect, useState } from "react";
import { updateExamResult } from "@/app/lib/actions/module-actions";
import { useFormState } from "react-dom";
import { Button } from "@/app/ui/button";

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const TestComponent = ({ questions, moduleId, userId }) => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(updateExamResult, initialState);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [iscomplete, setIsComplete] = useState(false);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    showQuestion(0);
  };

  const showQuestion = (index) => {
    resetState();
    let currentQuestion = questions[index];
    let questionNumber = index + 1;
    setQuestionText(`${questionNumber}. ${currentQuestion.question}`);
    const shuffledChoices = shuffle(currentQuestion.choices);
    setChoices(shuffledChoices);
    setCorrectAnswer(
      currentQuestion.choices.findIndex((choice) => choice.answer === true)
    );
  };

  const resetState = () => {
    setChoices([]);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
  };

  const selectChoice = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswer(index);
    setShowNextButton(true);
  };

  const handleNextButton = () => {
    setShowNextButton(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      // If it's the last question, show the score
      showScore();
    }
  };

  const showScore = () => {
    resetState();
    setIsComplete(true);
    setQuestionText(`You scored ${score} out of ${questions.length}!`);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <div className="app">
      <h1>Quiz</h1>
      <div className="quiz">
        <h2 id="question">{questionText}</h2>
        <div id="answer-buttons">
          {choices.map((choice, index) => (
            <button
              key={index}
              className={`btn ${
                selectedAnswer === index
                  ? choice.answer
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => selectChoice(choice.answer, index)}
              aria-label={choice.text}
              disabled={selectedAnswer !== null}
            >
              {choice.text}
            </button>
          ))}
        </div>
        {showNextButton && (
          <button id="next-button" onClick={handleNextButton}>
            Next
          </button>
        )}
        {iscomplete && (
          <form action={dispatch}>
            <input type="hidden" name="score" value={score} />
            <input type="hidden" name="moduleId" value={moduleId} />
            <input type="hidden" name="userId" value={userId} />
            <Button type="submit">Submit</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TestComponent;
