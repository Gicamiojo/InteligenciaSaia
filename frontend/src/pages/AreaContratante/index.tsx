import React from 'react'; 
import { Card} from 'react-bootstrap';

import './styles.css'; 

const AreaContratante = () =>{  
    return(   
        <div id="page-home"> 
          <header>
            <img src="./assets/Logo_IS_Circular.png" alt="Logo da Inteligência com Saia" /> 
        
        </header>  
         
         
            <div className="container col-md-10"> 
            </div> 
     
      

        <div className="propostas container">  
        <h2>Propostas</h2>
       
        <Card id="CardPropostas">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        
        </div>
    

     <div className="container"> 
     <h2>Depoimentos</h2>
   
        <Card id="CardPropostas">
 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        
     </div> 

      
       
   
     <div className="container"> 
     <h2>Trabalhos realizados pelos nossos freelancer</h2>
   
        <Card id="CardPropostas">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        
     </div>  

     <div className="rodape container"> 
        
     </div> 
</div>



    );

}

export default AreaContratante;