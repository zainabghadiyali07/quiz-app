import React from 'react'

function QuestionList({question, options, handleClick, currentAnswer}) {
  return (
    <div>
        <h2>{question}</h2>
        <ul>
        {options.map((options, index)=> (
    <li key={index} onClick={()=>handleClick(options)} className={currentAnswer === options ? 'selected' : ''}>
        {options}</li>
    ))}
            
        </ul>
    </div>
  )
}

export default QuestionList