import { useRef } from "react";

export default function Answers({ answers, answered, answersSelected, handleSelectAnswer }) {
    const shuffledAnswers = useRef();
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers].sort((a, b) => Math.random() - 0.5);
    }
    return <ul id="answers">
        {answers.map(ans => {
            let cssClassButton = '';
            if (answered === 'answered' && ans === answersSelected[answersSelected.length - 1]) {
                cssClassButton = 'selected';
            }

            if ((answered === 'correct' || answered === 'wrong') && ans === answersSelected[answersSelected.length - 1]) {
                cssClassButton = answered;
            }
            return <li key={ans} className="answer">
                <button onClick={() => handleSelectAnswer(ans)} className={cssClassButton}>{ans}</button>
            </li>
        })}
    </ul>;
}