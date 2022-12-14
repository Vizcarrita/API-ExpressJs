const { response } = require("express");
const Producto = require("../models/Producto");

const crearProducto = async(req, res = response) => {

    const uid = req.uid;

    try {
        let producto;
        //Creamos el producto
        producto = new Producto({
            usuario: uid,
            ...req.body
        });
        await producto.save();
        res.send(producto)

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Comuniquese con el administrador",
          });
    }
}

const obtenerProducto = async(req, res = response) => {

    const desde = Number (req.query.desde) || 0;

    try {
        const [producto,total] = await Promise.all([
            Producto
            .find({},'name categoria precio img')
            .populate('usuario','name img')
            .skip( desde )
            .limit( 6 ),

            Producto.countDocuments()
        ]);

        res.json({
            ok:true,
            producto,
            total
        })

    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'Comuniquese con el administrador',
        });
    }
}

const actualizarProducto = async(req, res) => {
    try {

        const { name, categoria, precio } = req.body;
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(400).json({
                msg: "No existe el producto"
            });
        }

        producto.name = name;
        producto.categoria = categoria;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new:true})
        res.json(producto);

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Comuniquese con el administrador",
          });
    }
}

const obtenerProductoID = async(req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(400).json({
                msg: "No existe el producto"
            });
        }
        res.json(producto);

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Comuniquese con el administrador",
          });
    }
}

const eliminarProducto = async(req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(400).json({
                msg: "No existe el producto"
            });
        }
        await Producto.findOneAndRemove({ _id: req.params.id })

        res.json({
            msg: "Producto eliminado con exito!"
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Comuniquese con el administrador",
          });
    }
}

module.exports = {
    crearProducto,
    obtenerProducto,
    actualizarProducto,
    obtenerProductoID,
    eliminarProducto
}