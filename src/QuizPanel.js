import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Question from './Question';
import './QuizPanel'
import Accordion from 'react-bootstrap/Accordion';
import './QuizPanel.css'

function QuizPanel() {
    var [apiQuestion, setApiQuestion] = useState(null);
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
            <Accordion defaultActiveKey="0">
            
            {
              apiQuestion ? apiQuestion.answers.map((data, index) => {
                return (
                  <Answer answerText={data.answer} explanation={data.explanation} correct={data.correct ? "true":"false"} index={index}/>
            
                );
              }) : "pobieram"
            }
            
          </Accordion>
        </div>
    );
  }

  export default QuizPanel;
  