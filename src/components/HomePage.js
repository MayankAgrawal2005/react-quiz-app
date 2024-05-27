import React from 'react'
import { NavLink } from 'react-router-dom';

 const HomePage = () => {
  return (
    <div className='ml-5'>
        <div className='mt-5  '> 
        <h1 className='text-3xl '>  FrontEnd Explorer Quiz </h1>
         </div>

         <div className='mt-9 space-y-3'>
            <h1 className='text-3xl'>The Test</h1>
            <p className='sm:text-base '>The test contains 20 questions and there is no time limit.</p>
            <p>The test is not official, it's just a nice way to see how much you know, or don't know, about FrontEnd </p>
         </div>

         <div className='mt-8 space-y-3'>
            <h2 className='text-3xl'>Count Your Score</h2>
            <p>    You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 20 points.     </p>
            </div>
             <div className='mt-6 space-y-5 bg-[#E7E9EB] p-4'>
                <h2 className='text-3xl'>
                    Start the Quiz
                </h2>
                 <p>Good luck!</p>
                 <NavLink to="/quiz">
                 <button className='text-white bg-[#0D8BF2] font-normal p-2 w-[150px] rounded-md'> Start the Quiz</button>
                 </NavLink>
                 
             </div>
        

    </div>
  )
}

export default HomePage;