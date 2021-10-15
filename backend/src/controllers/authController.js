const express = require('express'); 
const bcrypt = require('bcryptjs')
const User = require('../models/users');  
const jwt = require('jsonwebtoken'); 
const authConfig = require('../config/auth.json');
const router = express.Router(); 

function generateToken(params = {}){ 
    return jwt.sign({id:User.id},authConfig.secret,{ 
        expiresIn:86400,
    });
}
//Função de registro do usuario
router.post('/register', async(req,res) =>{  
    const {email} = req.body;
   
    try{  
        if(await User.findOne({email})) 
            return res.status(400).send({error:"User already exists"})
        const user = await User.create(req.body);  

        user.password = undefined; 

     

        return res.send({
            user, 
            token:generateToken({id:User.id}),
        
        
        });
    }catch(err){ 
        return res.status(400).send({error: 'Registration failed'});
    }
});  

//Função de autenticação
router.post('/authenticate', async(req,res) => {
    const {email,password} = req.body; 

    const user = await User.findOne({email}).select('+password'); 

    if(!user)
        return res.status(400).send({error: 'Usuario não encontrado'}); 

    if(!await bcrypt.compare(password, user.password)) 
        return res.status(400).send({error:'Senha invalida'})  

    user.password=undefined;

    
    res.send({
        user,
        token:generateToken({id:user.id}),
    });
})

module.exports = app => app.use('/auth', router);