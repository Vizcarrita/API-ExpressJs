const { Schema, default: mongoose } = require("mongoose");

const ProductoSchema = Schema({
    name:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }
});

module.exports = mongoose.model("Producto", ProductoSchema);