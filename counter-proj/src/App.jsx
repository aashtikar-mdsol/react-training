import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import CounterConfigurer from './components/Counter/CounterConfigurer.jsx';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetClick(enteredNumber) {
    console.log(enteredNumber);
    setChosenCount(enteredNumber);
  }

  return (
    <>
      <Header />
      <main>
        <CounterConfigurer handleSetClick={handleSetClick} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
