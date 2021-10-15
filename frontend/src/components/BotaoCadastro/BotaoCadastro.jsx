import React from 'react';
import Modal from '@material-ui/core/Modal'; 
import TextField from '@material-ui/core/TextField';
import './styles.css';   
import { makeStyles } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row'; 


import Button from 'react-bootstrap/Button'; 

export default function BotaoCadastro() {
 
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
     
        width: '40ch',  

      },   
   
    },
  }));
  const classes = useStyles();

  const body = (

    
 
<div className="form"> 

<form className={classes.root} noValidate autoComplete="off">   
    <div id="TituloModal"> 
      <h2 id="CadastroTitulo">Cadastro</h2>

    </div>
 
    <Row md={10}> 
        
        <TextField id="standard-basic" label="Nome Completo" />  
        <TextField  id="standard-basic" label="Email" />  
        <TextField id="standard-basic" label="CPF" />   
        <TextField id="standard-basic" label="Senha" />  
        <TextField id="standard-basic" label="Repetir senha" />  
               

      </Row> 
    
      <Button type="submit" id="cadastrar" variant="success"><p id="BotaoConcluirTexto">Concluir</p></Button>

 
   
      
 
      
    


      </form> 

</div>
    
    


   

  );

  return (
    <div> 
           
      <button id="BotaoCadastro"  onClick={handleOpen}>   
      <p id="BotaoCadastroTexto">Junte-se</p>

     
    
          
      </button>
      <Modal open={open} onClose={handleClose}  aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </div>
  );
}