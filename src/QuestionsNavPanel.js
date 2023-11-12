import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

function QuestionNavPanel(props) {

    return (
    <div className='question_nav_panel'>
        <Button variant="info" onClick={props.previousQuestionClickHandler}>Poprzednie pytanie</Button>{' '}
        <Button variant="info" onClick={props.nextQuestionClickHandler}>Następne pytanie</Button>{' '}
    </div>
    );
  }

  export default QuestionNavPanel;
  