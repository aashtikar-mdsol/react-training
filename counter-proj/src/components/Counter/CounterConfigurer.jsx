import { useState } from "react";

export default function CounterConfigurer({ handleSetClick }) {
    console.log('Configurer Rendered')
    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
    }

    function handleSet() {
        handleSetClick(enteredNumber);
        setEnteredNumber(0);
    }

    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={enteredNumber} />
            <button onClick={handleSet}>Set</button>
        </section>
    );
}