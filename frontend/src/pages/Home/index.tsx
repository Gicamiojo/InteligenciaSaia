import React from 'react'; 
import { Card} from 'react-bootstrap';
import BotaoCadastro from '../../components/BotaoCadastro/BotaoCadastro';
import BotaoQuemSomos from '../../components/CardQuemSomos/QuemSomos';
import SimpleModal from '../../components/ModalQuemSomos/ModalQuemSomos';
import WidgetLogin from '../../components/WidgetLogin/WidgetLogin'; 
import Logo from '../../assets/LogoIS.png';
import './styles.css';  

const Home = () =>{  
    return(   
        <div id="page-home" > 
          <header>   
          <WidgetLogin></WidgetLogin>   
          <img id ='Logo'src={Logo} alt="Logo da inteligência de saia"/>      
             
          
          <h1 id="title">Inteligência de Saia</h1>   
                  
              
          
                 
            
             
         
        
        </header>  
         
         
            <div className="container col-md-10"> 
            </div>  
        <BotaoQuemSomos></BotaoQuemSomos>

         <SimpleModal></SimpleModal> 
     
        <BotaoCadastro></BotaoCadastro>
      

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
           

       </div> 
      
    
    
     </div> 
     <div className="container vantagens"> 
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

export default Home;