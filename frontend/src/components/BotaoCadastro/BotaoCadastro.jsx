import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'; 
import {  InputGroup } from 'react-bootstrap';

import './styles.css';   
import { InputLabel,Input } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



export default function BotaoCadastro() {
 
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
 <div id="ModalCadastro"> 
  <h2 id="CadastroTitulo">Cadastro</h2>  
  <InputGroup>  
  
  <Input className="InputForm" placeholder="Nome"></Input> 

  <Input className="InputForm" placeholder="Email"></Input> 
  
  <Input className="InputForm" placeholder="CPF"></Input> 
  
  <Input className="InputForm" placeholder="Senha"></Input> 
  
  <Input className="InputForm" placeholder="Repetir Senha"></Input>
   
  </InputGroup>
    

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