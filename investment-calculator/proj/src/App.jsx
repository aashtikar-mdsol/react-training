import { useState } from "react";
import Header from "./components/Header"
import InvestmentForm from "./components/InvestmentForm"
import { calculateInvestmentResults } from "./util/investment"
import Report from "./components/Report";

function App() {
  const [inputs, updateInputs] = useState({
    'initialInvestment': 0,
    'annualInvestment': 0,
    'expectedReturn': 0,
    'duration': 0
  });
  const results = calculateInvestmentResults(inputs);

  function updateUserInput(type, value) {
    updateInputs(currentInputs => {
      let copy = { ...currentInputs };
      copy[type] = value;
      return copy;
    });
  }
  return (
    <>
      <Header />
      <InvestmentForm emitUpdatedInputs={updateUserInput} inputs={inputs} />
      <Report results={results} />
    </>
  )
}

export default App
