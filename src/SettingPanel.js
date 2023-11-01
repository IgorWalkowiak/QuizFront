import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function SettingPanel() {
    return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ustawienia</Accordion.Header>
        <Accordion.Body>          
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Wybierz dział</Accordion.Header>
                <Accordion.Body>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button>{' '}
                    <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button>{' '}
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Wybierz egzamin</Accordion.Header>
                <Accordion.Body>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button>{' '}
                    <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button>{' '}
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
  }

  export default SettingPanel;
  