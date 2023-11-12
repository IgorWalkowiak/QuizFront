import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Question from './Question';
import './QuizPanel'
import './QuizPanel.css'
import Accordion from 'react-bootstrap/Accordion';
import QuestionNavPanel from './QuestionsNavPanel';

function QuizPanel(props) {
    var [currentQuestionNo, setCurrentQuestionNo] = useState(0);
    var [currentQuestion, setCurrentQuestion] = useState(0);
    
    const handleNextQuestionClick = () => {
      setCurrentQuestion(props.questionHandler(currentQuestionNo + 1))
      setCurrentQuestionNo(currentQuestionNo + 1)
    }

    const handlePreviousQuestionClick = () => {
      const nextQuestionNo = currentQuestionNo - 1
      if(nextQuestionNo >= 0){
        setCurrentQuestion(props.questionHandler(nextQuestionNo))
        setCurrentQuestionNo(nextQuestionNo)
      }
    }

    const refreshQuestion = () => {
      window.alert("TEST")
    }

    return (
        <div className='quizPanel'>
            <Question questionText={currentQuestion ? currentQuestion.question_text : "Brak pytania"}></Question>
            <Accordion defaultActiveKey="0">
            {
              currentQuestion ? currentQuestion.answers.map((question, index) => {
                return (
                  <Answer answerText={question.ans} explanation={question.hint} correct={question.correct ? "true":"false"} index={index}/>
                );
              }) : "Brak odpowiedzi"
            }
          </Accordion>
          <QuestionNavPanel 
            nextQuestionClickHandler={handleNextQuestionClick}
            previousQuestionClickHandler={handlePreviousQuestionClick}>
          </QuestionNavPanel>

        </div>
    );
  }

  export default QuizPanel;
  