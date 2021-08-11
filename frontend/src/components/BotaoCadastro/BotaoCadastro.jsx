import React from 'react';
import Modal from '@material-ui/core/Modal'; 
import TextField from '@material-ui/core/TextField';
import './styles.css';   
import { makeStyles } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row';

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
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();

  const body = (
 <div id="ModalCadastro"> 
  <h2 id="CadastroTitulo">Cadastro</h2>  
  <Row >
    <form className={classes.root} noValidate autoComplete="off" md={6}>
        <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" />  
        <TextField id="standard-basic" label="Standard" /> 
    


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