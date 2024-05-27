
import React, { useState, useEffect } from 'react';
import data from '../components/data';
import { NavLink } from 'react-router-dom';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState({}); // Store user's answers here
  const [correctAnswers, setCorrectAnswers] = useState({}); // Store the correctness of each answer

  const question = data[index];

  useEffect(() => {
    // Load selected answer for current question, if any
    setSelectedAnswer(answers[index] !== undefined ? answers[index] : null);
  }, [index]);

  // To get the index of the selected option
  const handleAnswerSelection = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setAnswers(prevAnswers => ({ ...prevAnswers, [index]: answerIndex })); // Save selected answer for current question
     console.log(answers);

    // Update correctAnswers state
    if (answerIndex === question.ans - 1) {
      setCorrectAnswers(prevCorrectAnswers => ({ ...prevCorrectAnswers, [index]: true }));
    } else {
      setCorrectAnswers(prevCorrectAnswers => ({ ...prevCorrectAnswers, [index]: false }));
    }
    console.log(correctAnswers);
  };

  // Calculate the score based on correct answers
  const calculateScore = () => {
    return Object.values(correctAnswers).filter(Boolean).length;
  };

  // Next button functionality
  const changeHandler = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setShowScore(true);
    }
  };

  // Exit the quiz
  const ExitHandler = () => {
    setShowScore(true);
  };

  // Go to previous question
  const PreviousHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // Feedback based on score
  const getFeedback = (score) => {
    if (score < 5) {
      return "Don't worry, you can always improve! Keep practicing and you'll get better.";
    } else if (score < 10 && score >= 5) {
      return "Good effort! You're on the right track. Keep practicing!";
    } else if (score < 15 && score >= 10) {
      return "Well done! Keep up the good work!";
    } else if (score < 19 && score >= 15) {
      return "Great job! You've got a good grasp on the material.";
    } else {
      return "Excellent! You nailed every question. Well done!";
    }
  };

  // Calculate percentage
  const getPercentage = (score) => {
    return (score / data.length) * 100;
  };

  return (
    <div className='bg-[#2B0F4E] w-12/12 h-full min-h-[100vh] flex justify-center items-center'>
      <div className='bg-white w-[500px] h-[550px]'>
        {/* structure of my quiz game */}
        <p className='text-black p-5 text-2xl font-bold'>Quiz App</p>
        <div className='bg-[#2B0F4E] w-[450px] h-[2px] mx-auto'></div>

        {showScore ? (
          <div className='text-center p-5'>
            <h2 className='text-black text-2xl'>Your Score {calculateScore()} out of {data.length}</h2>
            <p className='text-black font-normal mt-5'>{getFeedback(calculateScore())}</p>
            <p className='text-black font-normal mt-5'>{`${getPercentage(calculateScore())} %`}</p>

            <div className='text-center bg-[#2B0F4E] p-2 w-[150px] rounded text-white mx-auto mt-[50px]'>
              <NavLink to='/'>
                <button>Restart</button>
              </NavLink>
            </div>
          </div>
        ) : (
          <div>
            <h2 className='ml-5 mt-2 text-black'>{index + 1}.{question.question}</h2>
            <ul className='mt-5 space-y-4 mx-[50px]'>
              {[question.option1, question.option2, question.option3, question.option4].map((option, idx) => (
                <li
                  key={idx}
                  className={`border p-2 rounded cursor-pointer ${selectedAnswer === idx ? 'bg-violet-500 text-white' : 'border-black'}`}
                  onClick={() => handleAnswerSelection(idx)}
                >
                  {option}
                </li>
              ))}
            </ul>

            <div className=' sm:flex  '>
             { index>0 && <div className={`text-center bg-[#059862] p-2 w-[100px] rounded text-white mt-5 mx-auto cursor-pointer ${index === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <button onClick={PreviousHandler} >
                  Previous
                </button>
              </div>}
              <div className='text-center bg-[#2B0F4E] p-2 w-[100px] rounded text-white mt-5 mx-auto'>
                <button onClick={changeHandler}>
                  Next
                </button>
              </div>
              <div className='text-center bg-[#059862] p-2 w-[100px] rounded text-white mt-5 mx-auto'>
                <button onClick={ExitHandler}>
                  Submit
                </button>
              </div>
            </div>

            <p className='p-2'>{index + 1} of {data.length} question</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz;


