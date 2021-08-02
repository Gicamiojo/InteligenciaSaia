import React from 'react';
import Avatar from '@material-ui/core/Avatar';


import './style.css';

function menu() {
  return (
    <div className={menu.root}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </div>
  );
}

export default menu;