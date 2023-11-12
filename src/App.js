import './App.css';
import QuizPanel from './QuizPanel';
import SettingsPanel from './settings/SettingsPanel'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.quizPanel = React.createRef();
  }
  state = {
    tabKey: "Ustawienia",
    questions: "test"
  }

  questionRefreshRequest = () => {
    window.alert("ahoj")
    window.alert(JSON.stringify(this.quizPanel.current))
    this.quizPanel.current.refreshQuestion()
  }

  handleApplySettingsClick = async (sectionIds, examIds) => {
    try {
        const params = new URLSearchParams();
        sectionIds.forEach((sectionId) => {
            params.append('section_id', sectionId);
        });

        const response = await fetch(`http://127.0.0.1:5000/questions?${params.toString()}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const questions = await response.json();
        const tabKey    = "Pytanie"
        this.setState({ tabKey });
        this.setState({ questions });
        this.questionRefreshRequest()

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


handleGetQuestion = (question_no) => {
  return this.state.questions[question_no]
}

    render(){
      return (
          <div className="App">
            <header className="App-header">
              Boska aplikacja z pytaniami
            </header>

            <Tabs 
              defaultActiveKey="Ustawienia" 
              id="uncontrolled" 
              className="mb-11" fill justify
              activeKey={this.state.tabKey}
              onSelect={(k) => this.setState({tabKey: k})}>

            <Tab eventKey="Pytanie" title="Pytanie">
                <QuizPanel 
                  questionHandler={this.handleGetQuestion} 
                  questionRefreshRequest={this.questionRefreshRequest}>
                  ref={this.quizPanel}
                </QuizPanel>
            </Tab>
            <Tab eventKey="Ustawienia" title="Ustawienia">
                <SettingsPanel applySettingsClickHandler={this.handleApplySettingsClick}></SettingsPanel>
            </Tab>
          </Tabs>

          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
        </div>
        
      );
    }
}

