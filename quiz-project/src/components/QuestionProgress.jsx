import { useEffect, useState } from "react"

export default function QuestionProgress({ timeout, onTimeout }) {

    const [timeLeft, updateTimeLeft] = useState(timeout);

    useEffect(() => {
        const timeOutHandle = setTimeout(() => onTimeout(null), timeout);
        return () => clearTimeout(timeOutHandle);
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            updateTimeLeft(currentTimeLeft => currentTimeLeft - 100);
        }, 100)

        return () => clearInterval(interval);
    })

    return <progress value={timeLeft / timeout} />
}