import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Exam(props) {
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        props.examApplySettingsClickHandler(props.id, !clicked)
        setClicked(!clicked);
    }

    return (
            <Button 
                className= {`mx-1 my-1 btn ${clicked ? 'btn-primary' : 'btn-secondary'}`} 
                onClick={handleClick}>
                    {props.name}
            </Button>
    );
}

export default Exam;
  