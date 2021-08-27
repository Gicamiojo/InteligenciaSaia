import React from 'react';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './styles.css'; 


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',  
   
  },
  paper: {
    marginRight: theme.spacing(3),
  }, 

}));


export default function WidgetUsuario() {   
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);


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

  
  return (  
      
   
  
  
 <div className={classes.root} id="widget">

 <div>
   <Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}> 

    <Avatar type="select" id="avatar" alt="Usuaria" src="/static/images/avatar/1.jpg" /> 
   <p id="TextButton">Usuaria</p>
   </Button>
   <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
     {({ TransitionProps, placement }) => (
       <Grow
         {...TransitionProps}
         style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
       >
         <Paper>
         
            <Button variant="contained">Seus Dados</Button> 
            
            <Button variant="contained">Bate Papo</Button> 
            
            <Button variant="contained">Sair</Button>
         </Paper>
       </Grow>
     )}
   </Popper>
 </div>
</div>
     


  ); 

  }