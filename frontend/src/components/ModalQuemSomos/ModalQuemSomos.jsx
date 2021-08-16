import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'; 
import './styles.css'; 
import { Card } from 'react-bootstrap';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1200, 
    height:600,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2,2),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Quem Somos</h2>
     <hr/>
      <Card id="CardQuemSomosEquipe">
  <Card.Img id="FotoUsuario" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTjc-qDw9DHMg5fPaTV_C7nFzTnpPATSTcA&usqp=CAU" />
  <Card.Body> 
    <hr/>
    <Card.Title>Pessoa 1</Card.Title> 
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button id="BotaoEntreContato">Entre em contato</Button>
  </Card.Body>
</Card> 


    </div>
  );

  return (
    <div>
     
      <Button  variant="contained" type="button" onClick={handleOpen} id="BotaoConhecaTime">Conheça o time</Button> 
     
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
