import img from '../assets/react-core-concepts.png'

function getRandomInt(){
    return Math.random()
  }
  
export default function Header(){
    return (
      <header>
          <img src={img} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {getRandomInt()} Fundamental React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
}