import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function SectionSettingsPanel() {
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
                            return (<Button className="mx-1 my-1" id={data.section_id} variant="secondary">{data.section_name}</Button>);
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
  