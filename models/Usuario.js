const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    name:{
        type: String,
        requiere: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        requiere: true
    },
    role:{
        type: String,
        require: true,
        default: "USER_ROLE"
    }
    
});

module.exports = model( "Usuario", UsuarioSchema );