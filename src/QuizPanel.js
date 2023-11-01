import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Question from './Question';
import './QuizPanel'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './QuizPanel.css'

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
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            
            {apiQuestion ? apiQuestion.answers.map((data, index) => {
                return (
                  <Answer answerText={data.answer} explanation={data.explanation} correct={data.correct ? "true":"false"}/>
            
                );
              }) : "pobieram"
            }
            
          </Accordion>
        </div>
    );
  }

  export default QuizPanel;
  