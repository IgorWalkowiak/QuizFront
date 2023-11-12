import Button from 'react-bootstrap/Button';
import './SettingsPanel.css'
import React, { useState, useEffect } from 'react';
import SectionSettingsPanel from './SectionSettingsPanel'
import ExamSettingsPanel from './ExamSettingsPanel'

function SettingsPanel(props) {
    const [sectionIds, setSectionIds] = useState([]);
    const [examIds, setExamIds] = useState([]);

    const handleSectionUpdateClick = (section_id, clicked) => {
        if (clicked) {
            setSectionIds(prevIds => [...prevIds, section_id]); // Dodawanie section_id do listy
        } else {
            setSectionIds(prevIds => prevIds.filter(id => id !== section_id)); // Usuwanie section_id z listy
        }
    }

    const handleExamUpdateClick = (exam_id, clicked) => {
        if (clicked) {
            setExamIds(prevIds => [...prevIds, exam_id]); // Dodawanie exam_id do listy
        } else {
            setExamIds(prevIds => prevIds.filter(id => id !== exam_id)); // Usuwanie exam_id z listy
        }
    }

    const handleApplySettingsClick = () => {
        props.applySettingsClickHandler(sectionIds, examIds)
    }

    return (
    <div className='settings'>
        <br></br>
        <SectionSettingsPanel sectionApplySettingsClickHandler={handleSectionUpdateClick}></SectionSettingsPanel>


        <br></br>
        <ExamSettingsPanel examApplySettingsClickHandler={handleExamUpdateClick}></ExamSettingsPanel>

        <Button variant="secondary" onClick={handleApplySettingsClick}>Apply</Button>{' '}
    </div>
    );
  }

  export default SettingsPanel;
  