import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Exam from './Exam'

function ExamSettingsPanel(props) {

    var [apiExams, setApiExams] = useState(null);
    async function fetchData() {
      fetch('http://localhost:5000/exams')
          .then(response => response.json())
          .then(data => setApiExams(data))
    }
    useEffect(() => {
      fetchData()
    }, []);

    return (
    <div className='ExamSettings'>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                    <Accordion.Header>Wybierz egzaminy</Accordion.Header>
                    <Accordion.Body>

                        {apiExams ? apiExams.map((data, index) => {
                            return (<Exam id={data.exam_id} name={data.exam_name} examApplySettingsClickHandler={props.examApplySettingsClickHandler}></Exam>);
                        }) 
                        :<Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                         </Spinner>
                        }

                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
    </div>
    );
  }

  export default ExamSettingsPanel;
  