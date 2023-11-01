import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Question from './Question';
import './QuizPanel'

function QuizPanel() {
    var [apiQuestion, setApiQuestion] = useState(null);
    var [currentQuestionId, setCurrentQuestionId] = useState(null);
    var [isAnswered, setIsAnswered] = useState(null);
    var [isAnsweredCorrect, setIsAnsweredCorrect] = useState(null);
    async function fetchData() {
      fetch('http://localhost:5000/questions/1')
          .then(response => response.json())
          .then(data => setApiQuestion(data))
    }
    useEffect(() => {
      fetchData()
    }, []);
  
    return (
        <div className='quizPanel'>
            <Question questionText={apiQuestion ? apiQuestion.question : "POBIERAM"}></Question>
            {apiQuestion ? apiQuestion.answers.map((data, index) => {
                return (
                  <Answer answerText={data.answer} explanation={data.explanation} correct={data.correct ? "true":"false"}/>
                );
              }) : "pobieram"
              
            }
        </div>
    );
  }

  export default QuizPanel;
  