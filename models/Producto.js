const { Schema, model } = require("mongoose");

const ProductoSchema = Schema({
    name:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    descripcion:{
      type: String,
      require: true  
    },
    precio:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        require: true
    },
    img:{
        type: String,
    }
});

ProductoSchema.method('toJSON',function(){
    const { __v, ...object } = this.toObject();
    return object;
})

module.exports = model("Producto", ProductoSchema);