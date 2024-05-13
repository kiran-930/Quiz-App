import { useState } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(true);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
            setIsNextDisabled(true); 
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setClickedOption(0);
        setShowResult(false);
        setIsNextDisabled(true);
    };

    const handleOptionClick = (optionIndex) => {
        setClickedOption(optionIndex + 1);
        setIsNextDisabled(false); 
    };

    return (
        <div>
            <p className="heading-txt"> </p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetQuiz} />
                ) : (
                    <>
                       
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => (
                                <button
                                    className={`option-btn ${clickedOption === i + 1 ? 'checked' : ''}`}
                                    key={i}
                                    onClick={() => handleOptionClick(i)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div>
                            <input
                                type="button"
                                value="Next"
                                id="next-button"
                                onClick={changeQuestion}
                                className={isNextDisabled ? 'disable-pointer' : ''}
                                disabled={isNextDisabled}
                            />
                            <input
                                className='reset-button'
                                type="button"
                                value="Clear"
                                id="reset-button"
                                onClick={resetQuiz}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
