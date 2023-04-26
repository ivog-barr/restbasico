const {response, request} = require('express');


const userGet = (req = request,res = response)=>{
    const {q, nombre = "pene", page=10} = req.query;
    const {id} = req.params
    res.json({
        ok:true,
        msg:'Hola',
        q,
        nombre
    });
    
};

const userPost = (req = request,res = response)=>{
    const {nickname, level} = req.body;
    res.json({
        nickname,
        level
    });
    
};


const userPut = (req = request,res = response)=>{
    const {id} = req.params
    res.json({
        ok:true,
        msg:'Hola2',
        id
    });
    
};


const userDelete = (req = request,res = response)=>{
    const {id} = req.params
    res.json({
        ok:true,
        msg:'Hola3'
    });
    
};

const userPatch = (req = request,res = response)=>{
    res.json({
        ok:true,
        msg:'Hola4'
    });
    
};





module.exports = {

    userGet,
    userDelete,
    userPatch,
    userPost,
    userPut
}