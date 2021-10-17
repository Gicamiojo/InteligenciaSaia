import React from 'react';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './styles.css'; 
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';  
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',  
   
  },
  paper: {
    marginRight: theme.spacing(3),
  }, 

}));


export default function WidgetLogin() {   
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [setName] = React.useState(''); 
  const [ setEmail] = React.useState(''); 

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const EmailChange = (event) => {
    setEmail(event.target.value);
  }; 
  return (  
      
   
  
  
 <div className={classes.root} id="widget">

 <div>
   <Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}> 

    <Avatar type="select" id="avatar" alt="Maria" src="/static/images/avatar/1.jpg" /> 
   <p id="TextButton">Login</p>
   </Button>
   <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
     {({ TransitionProps, placement }) => (
       <Grow
         {...TransitionProps}
         style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
       >
         <Paper>
           <form  noValidate autoComplete="off">
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input id="component-simple" value={api.email} onChange={handleChange} />
        <InputLabel htmlFor="component-simple">Senha</InputLabel>
        <Input type="password" id="component-simple" value={api.password} onChange={EmailChange} />
    
      
            </form> 
            <Button id="BotaoEntrar" variant="contained">Entrar</Button>
         </Paper>
       </Grow>
     )}
   </Popper>
 </div>
</div>
     


  ); 

  }