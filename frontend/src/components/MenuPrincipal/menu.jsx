import React from 'react';
import Nav from 'react-bootstrap/Nav'; 
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import './styles.css';

export default function MenuPrincipal() {  
  
    
    return (   
      <Container id="Menu">
        <Row> 
        <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item  className="BotaoMenu">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item className="BotaoMenu">
        <Nav.Link  eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item  className="BotaoMenu">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item  className="BotaoMenu">
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

        </Row>
      </Container>
    

      
          
    
    ); 
  
    }

