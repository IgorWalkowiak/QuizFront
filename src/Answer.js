import React from "react";
import "./Answer.css"
import Accordion from 'react-bootstrap/Accordion';

const GREEN = 'rgba(34, 139, 34, 0.6)';
const RED = 'rgba(220, 20, 60, 0.6)';

export default class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        render: false,
    }
  }

  render() {
    return (
      <Accordion.Item eventKey={this.props.index}>
        <Accordion.Header>{this.props.answerText}</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: this.props.correct=="true" ? GREEN : RED }}>
          {this.props.explanation}
        </Accordion.Body>
    </Accordion.Item>
    );
  }
}