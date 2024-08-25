import { useCallback, useRef, useState } from "react"
import QUESTIONS from '../questions.js'
import quizCompletedImg from '../assets/quiz-complete.png'
import QuestionProgress from "./QuestionProgress.jsx";
import Answers from "./Answers.jsx";

export default function Quiz() {
    const [answersSelected, updateSelectedAnswers] = useState([]);
    const [answered, updateAnswered] = useState('');
    const activeQuestion = answered === '' ? answersSelected.length : answersSelected.length - 1;
    const quizCompleted = answersSelected.length === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        updateAnswered('answered');
        updateSelectedAnswers(currentAnswers => [...currentAnswers, selectedAnswer]);
        setTimeout(() => {
            let lastAnswer = answersSelected[answersSelected.length - 1];
            if (QUESTIONS[activeQuestion].answers[0] === lastAnswer) {
                updateAnswered('correct');
            } else {
                updateAnswered('wrong');
            }

            setTimeout(() => {
                updateAnswered('');
            }, 2000)
        }, 1000);
    }, [activeQuestion]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizCompleted) {
        return <div id="summary">
            <img src={quizCompletedImg} />
            <h2>Quiz Completed!</h2>
        </div>
    }



    return (
        <div id="quiz">
            <QuestionProgress key={activeQuestion} timeout={5000} onTimeout={handleSkipAnswer} />
            <div id="question">
                <h2>{QUESTIONS[activeQuestion].text}</h2>
                <Answers
                    key={activeQuestion}
                    answered={answered}
                    answersSelected={answersSelected}
                    answers={QUESTIONS[activeQuestion].answers}
                    handleSelectAnswer={handleSelectAnswer}
                />
            </div>
        </div>
    );
}