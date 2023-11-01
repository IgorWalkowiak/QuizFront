import React from "react";
import PropTypes from "prop-types";
import "./Question.css"
export default class Answer extends React.Component {
  static propTypes = {
    questionText: PropTypes.string,
  };

  constructor(props) {
    super(props)
    this.state = {
        render: false,
    }
  }

  render() {
    const className = [
      "question"
    ];

    return (
      <div className={className.join(" ").trim()}>
        {this.props.questionText}
        <br></br>
      </div>
    );
  }
}