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
    img:{
        type: String,
    },
    role:{
        type: String,
        require: true,
        default: "USER_ROLE"
    },
    
});

UsuarioSchema.method('toJSON',function(){
    const { __v, password, ...object } = this.toObject();
    return object;
})

module.exports = model( "Usuario", UsuarioSchema );