import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';  

import Home from './pages/Home';  
import PaginaUsuario from './pages/PáginaUsuario';
import AreaFreelancer from './pages/AreaFreelancer/';
import AreaContratante from './pages/AreaContratante/index';


const Routes = () => { 
    return( 
        <BrowserRouter>
            <Route component = {Home} path="/" exact/>  
            <Route component = {PaginaUsuario} path="/usuario_logado"/>
            <Route component = {AreaFreelancer} path="/AreaFreelancer"/>
            <Route component = {AreaContratante} path="/AreaContratante"/>
           
        </BrowserRouter> 

        
        
    );
} 

export default Routes;