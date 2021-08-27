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
        <Nav.Link className="BotaoMenuText" href="/home">Projetos</Nav.Link>
      </Nav.Item>
      <Nav.Item className="BotaoMenu">
        <Nav.Link className="BotaoMenuText" eventKey="link-1">Empresas</Nav.Link>
      </Nav.Item>
      <Nav.Item  className="BotaoMenu">
        <Nav.Link className="BotaoMenuText" eventKey="link-2">Minha Area</Nav.Link>
      </Nav.Item>
      <Nav.Item  className="BotaoMenu">
        <Nav.Link className="BotaoMenuText" eventKey="link-2">Forum</Nav.Link>

      </Nav.Item> 
      <Nav.Item  className="BotaoMenu">
      <Nav.Link className="BotaoMenuText" eventKey="link-2">Portifólio</Nav.Link>

      </Nav.Item>
    </Nav>

        </Row>
      </Container>
    

      
          
    
    ); 
  
    }

