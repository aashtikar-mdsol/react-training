import imageLogo from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header className="header">
            <img src={imageLogo} />
            <h1>ReactQuiz</h1>
        </header>
    );
}