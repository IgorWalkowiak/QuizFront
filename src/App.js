import logo from './logo.svg';
import './App.css';
import QuizPanel from './QuizPanel';
import SettingPanel from './SettingPanel'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Boska aplikacja z pytaniami
      </header>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled"
      className="mb-3"
      fill
      justify
    >
      <Tab eventKey="Pytanie" title="Pytanie">
          <QuizPanel></QuizPanel>
      </Tab>
      <Tab eventKey="Ustawienia" title="Ustawienia">
          <SettingPanel></SettingPanel>
      </Tab>
    </Tabs>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
    </div>
    
  );
}

export default App;
