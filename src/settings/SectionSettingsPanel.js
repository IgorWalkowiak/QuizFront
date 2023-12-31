import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Section from './Section'

function SectionSettingsPanel(props) {

    var [apiSections, setApiSections] = useState(null);
    async function fetchData() {
      fetch('http://localhost:5000/sections')
          .then(response => response.json())
          .then(data => setApiSections(data))
    }
    useEffect(() => {
      fetchData()
    }, []);

    return (
    <div className='SectionSettings'>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                    <Accordion.Header>Wybierz dział</Accordion.Header>
                    <Accordion.Body>

                        {apiSections ? apiSections.map((data, index) => {
                            return (<Section id={data.id} name={data.name} sectionApplySettingsClickHandler={props.sectionApplySettingsClickHandler}></Section>);
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

  export default SectionSettingsPanel;
  