import { useEffect, useState } from "react";
import { updateExamResult } from "@/app/lib/actions/module-actions";
import { useFormState } from "react-dom";
import { Button } from "@/app/ui/button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

// @ts-ignore
function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
// @ts-ignore
const TestComponent = ({ questions, moduleId, userId }) => {
  const initialState = { message: "", errors: {} };
  // @ts-ignore
  const [state, dispatch] = useFormState(updateExamResult, initialState);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    showQuestion(0);
  };

  const showQuestion = (index: number) => {
    resetState();
    let currentQuestion = questions[index];
    let questionNumber = index + 1;
    setQuestionText(`${questionNumber}. ${currentQuestion.question}`);
    const shuffledChoices = shuffle(currentQuestion.choices);
    // @ts-ignore
    setChoices(shuffledChoices);
    // @ts-ignore
    setCorrectAnswer(
      currentQuestion.choices.findIndex((choice: Choice) => choice.answer),
    );
  };

  const resetState = () => {
    setChoices([]);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
  };

  const selectChoice = ({
    isCorrect,
    index,
  }: {
    isCorrect: boolean;
    index: any;
  }) => {
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
    setQuestionText(`لقد حصلت علي ${score} من ${questions.length}`);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-2xl p-8 mx-auto my-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.4C10.5 3.4 3.4 10.5 3.4 20S10.5 36.6 20 36.6 36.6 29.5 36.6 20 29.5 3.4 20 3.4zm0 31.6c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z" />
              <path d="M20 10.4c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18.2c-4.3 0-7.8-3.5-7.8-7.8S15.7 13 20 13s7.8 3.5 7.8 7.8-3.5 7.8-7.8 7.8z" />
              <path d="M20 15.4c-.6 0-1 .4-1 1v8.2c0 .6.4 1 1 1s1-.4 1-1v-8.2c0-.6-.4-1-1-1z" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-200">
            اختبار الموديول
          </h2>
          <div className="app">
            <h2 className="text-center text-right text-2xl ">
              اختر الاجابة الصحيحة من التالي :
            </h2>
            <div className="quiz">
              <h3 className="text-center text-blue-900 text-xl" id="question">
                {questionText}
              </h3>
              <div id="answer-buttons" dir="">
                {choices.map((choice, index) => (
                  <button
                    key={index}
                    className={`btn text-right ${
                      selectedAnswer === index
                        ? choice["answer"]
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                    onClick={() =>
                      selectChoice({
                        isCorrect: choice["answer"],
                        index: index,
                      })
                    }
                    aria-label={choice["text"]}
                    disabled={selectedAnswer !== null}
                  >
                    <span>
                      {index + 1} - {choice["text"]}
                    </span>
                  </button>
                ))}
              </div>
              {showNextButton && (
                <button id="next-button" onClick={handleNextButton}>
                  التالي
                </button>
              )}
              {isComplete && (
                <form action={dispatch} className="flex justify-center mt-3">
                  <input type="hidden" name="score" value={score} />
                  <input type="hidden" name="moduleId" value={moduleId} />
                  <input type="hidden" name="userId" value={userId} />
                  <Button type="submit"> تاكيد</Button>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 ml-2 text-green-400 bg-gray-100 rounded-full hover:text-green-500 hover:bg-gray-200 mr-3"
                    onClick={() => {
                      setIsComplete(false);
                      startQuiz();
                      showQuestion(0);
                    }}
                  >
                    <ArrowPathIcon className="w-6 h-6" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;

export type Choice = {
  id: string;
  text: string;
  answer: boolean;
};
