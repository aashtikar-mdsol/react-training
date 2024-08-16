import {CORE_CONCEPTS} from './data.js'
import Header from './components/Header.jsx'
import CourseGoal from './components/CourseGoal.jsx'

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts"> 
          <h2>Core Concepts</h2>
        <ul>
          <CourseGoal 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CourseGoal 
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
          />
          <CourseGoal 
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
          />
          <CourseGoal 
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
