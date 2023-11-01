import React from "react";
import "./Answer.css"


export default class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        render: false,
    }
    this.alertHi = this.alertHi.bind(this);
  }

  alertHi() {
   this.setState({render: !this.state.render});
  }

  render() {
    return (
      <div onClick={this.alertHi} className={this.getAnswerClasses()}>
        {this.props.answerText}
        <br></br>
        {this.state.render && this.props.explanation}
      </div>
    );
  }

  getAnswerClasses(){
    const className = [
      "answer",
      this.props.correct=="true" ? "correct" : "wrong",
      this.state.render ? "clicked" : ""
    ];
    return className.join(" ").trim();
  };

}