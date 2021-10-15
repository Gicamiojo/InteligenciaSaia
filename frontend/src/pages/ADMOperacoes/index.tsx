import React from 'react'; 
import { Card } from 'react-bootstrap';
import MenuPrincipal from '../../components/MenuPrincipal/menu';
import './styles.css'; 
import CarousselNoticias from '../../components/CarousselNoticias';

const PaginaUsuario = () =>{  
    return(   
        <div id="page-home"> 
          <header>
           
           
        </header>   
        
        <MenuPrincipal></MenuPrincipal>
         
            <div className="container col-md-10">   
            <CarousselNoticias></CarousselNoticias>
          
            </div> 
       

        <div className="propostas container">  
        <h2>Nossas propostas</h2>
       
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
     <h2>Elas por elas</h2>
   
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
       <div id="TextoEmpresas">
         <h2>Junte se a empresas parceiras</h2> 
         <aside>Clita lorem erat takimata clita rebum clita eos dolor dolor dolor, kasd et et duo stet est lorem ut duo. </aside> 
       </div> 
       <div id="LogoEmpresas">
            <img src="data:image/png;base64,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" alt="Northern Lights" width="600" height="400"/> 
               

       </div> 
       <div id="LogoEmpresas">
            <img src="data:image/png;base64,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" alt="Northern Lights" width="600" height="400"/> 
               

       </div> 
       <div id="LogoEmpresas">
            <img src="data:image/png;base64,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" alt="Northern Lights" width="600" height="400"/> 
               

       </div> 
       <div id="LogoEmpresas">
            <img src="data:image/png;base64,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" alt="Northern Lights" width="600" height="400"/> 
               

       </div>
     </div> 
     <div className="container"> 
     <h2>Nossas Vantagens</h2>
   
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

export default PaginaUsuario;