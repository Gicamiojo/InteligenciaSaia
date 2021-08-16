import React from 'react';
import Modal from '@material-ui/core/Modal'; 
import TextField from '@material-ui/core/TextField';
import './styles.css';   
import { makeStyles } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row'; 
import Container from 'react-bootstrap/Container';
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
        margin: theme.spacing(4),
        width: '50ch',
      },
    },
  }));
  const classes = useStyles();

  const body = (
 <div id="ModalCadastro"> 
    
  <Row > 

    <form className={classes.root} noValidate autoComplete="off">   
    <div id="TituloModal"> 
      <h2 id="CadastroTitulo">Cadastro</h2>

    </div>
    
    <Container>
      <Row lg="6"> 
      <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" /> 

      </Row> 
      <Row xl={6}>  

      
      
      
      </Row>
      <Button id="cadastrar"variant="success"><p id="BotaoCadastroTexto">Concluir</p></Button>
    </Container>
      
    


      </form> 
    </Row>

 </div>
   

  );

  return (
    <div>
      <button id="BotaoCadastro"  onClick={handleOpen}>  
     
    
     Junte-se a nós
          
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" 
       
      >
        {body}
      </Modal>
    </div>
  );
}