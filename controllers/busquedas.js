const { response } = require('express');
const Producto = require('../models/Producto');
const Usuario = require('../models/Usuario');

const getTodo = async ( req, res = response ) => {
    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );

    const [ producto,usuario ] = await Promise.all([
        Producto.find({ name:regex }),
        Usuario.find({ name:regex }),
    ])

    res.json({
        ok:true,
        producto,
        usuario,
    })
}

const getDocumentosColeccion = async ( req, res = response ) => {
    const tabla = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );
    
    let data = [];

    switch ( tabla ) {
        case 'productos':
            data = await Producto.find({ name:regex });
            break;

        case 'usuarios':
            data = await Usuario.find({ name:regex });
            break;    
    
        default:
            return res.status(400).json({
                ok:false,
                msg:'La tabla tiene que ser productos/usuarios'
            });

        }
        res.json({
            ok:true,
            resultados: data
        })
}

module.exports = {
    getTodo,
    getDocumentosColeccion
}