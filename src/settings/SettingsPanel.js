import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './SettingsPanel.css'
function SettingsPanel() {
    return (
    <div className='settings'>
        <br></br>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                    <Accordion.Header>Wybierz dział</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="secondary">Stomatologia zachowawcza</Button>{' '}
                        <Button variant="secondary">Endodoncja</Button>{' '}
                        <Button variant="secondary">Stomatologia dziecięca</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>


        <br></br>
        <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Wybierz egzamin</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="secondary">LDEK-J-2005</Button>{' '}
                        <Button variant="secondary">LDEK-J-2006</Button>{' '}
                        <Button variant="secondary">LDEK-J-2007</Button>{' '}
                        <Button variant="secondary">LDEK-W-2005</Button>{' '}
                        <Button variant="secondary">LDEK-W-2006</Button>{' '}
                        <Button variant="secondary">LDEK-W-2007</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
    </div>
    );
  }

  export default SettingsPanel;
  