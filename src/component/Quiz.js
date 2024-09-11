import { useState } from 'react'
import QuestionList from './QuestionList'


function Quiz() {
    const questions = [
        {
            question:"1) What is the correct command to create a new React project?",
            options:['npm create-react-app myReactApp', 'npx create-react-app','npm create-react-app','npx create-react-app myReactApp'],
            answer:"npx create-react-app myReactApp"
        },
        {
            question:"2) What does myReactApp refer to in the following command :- npx create-react-app myReactApp",
            options:['The name you want to use for the new app  ', 'The directory to create the new app in','The type of app to create','A reference to an existing app'],
            answer:'The name you want to use for the new app  '
        },
        {
            question:"3) What command is used to start the React local development server?",
            options:['npm start', 'npm run dev','npm build','npm serve'],
            answer:'npm start'
        },
        {
            question:"4) What is the default local host port that a React development server uses?",
            options:['3000', '5000','8080','3500'],
            answer:'3000'
        },
        {
            question:"5) What is the children prop?",
            options:['A property that adds child values to state ', 'A property that lets you nest components in other components  ','A property that lets you pass data to child components','A property that lets you set an object as a property'],
            answer:'A property that lets you nest components in other components '
        },
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(1);
    const handleClick= (option) => {
       setCurrentAnswer(option)
       if(option === questions[currentQuestionIndex].answer){
        setScore(score + 1)
       }

    }
    const handleNextQuestion = ()=>{
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }
  return (
    <div>
        {currentQuestionIndex < questions.length ? <div>
            <QuestionList  question={questions[currentQuestionIndex].question}
             options={questions[currentQuestionIndex].options} handleClick=
             {handleClick} currentAnswer={currentAnswer}/>
             <button disabled={currentAnswer === null} className={currentAnswer === 
             null ?  'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
        </div> : <div>Your Score is {score}</div>}
        
    </div>
  )
}

export default Quiz