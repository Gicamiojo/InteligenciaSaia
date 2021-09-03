import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';  

import Home from './pages/Home';  
import PaginaUsuario from './pages/PáginaUsuario';
import AreaFreelancer from './pages/AreaFreelancer/';
import AreaContratante from './pages/AreaContratante/index'; 
import ADM from './pages/ADM/index'; 
import ADMProjetos from './pages/ADMProjetos/index'; 
import ADMOperacoes from './pages/ADMOperacoes/index';
import Chat from './pages/Chat/index';

const Routes = () => { 
    return( 
        <BrowserRouter>
            <Route component = {Home} path="/" exact/>  
            <Route component = {PaginaUsuario} path="/usuario"/>
            <Route component = {AreaFreelancer} path="/AreaFreelancer"/>
            <Route component = {AreaContratante} path="/AreaContratante"/>
            <Route component = {ADM} path="/adm"/>
            <Route component = {ADMProjetos} path="/admprojetos"/>
            <Route component = {ADMOperacoes} path="/admoperacoes"/> 
            <Route component = {Chat} path ="/chat"/>
        </BrowserRouter> 

        
        
    );
} 

export default Routes;