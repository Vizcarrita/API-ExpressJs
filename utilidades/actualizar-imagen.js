const fs = require('fs');

const Producto = require('../models/Producto');
const Usuario = require('../models/Usuario');

const borrarImagen = ( path ) =>{
    if( fs.existsSync(path) ){
        //borrar la imagen anterior
        fs.unlinkSync( path );
    }
}

const actualizarImagen = async( tipo, id, nombreArchivo ) => {
    
    let pathViejo = '';

    switch ( tipo ) {
        case 'productos':
            const producto = await Producto.findById(id);
            if( !producto ){
                return false;
            }

            pathViejo = `./uploads/productos/${ producto.img }`;
            borrarImagen( pathViejo )
            producto.img = nombreArchivo;
            await producto.save();
            return true;

        break;

        case 'usuarios':
            const usuario = await Usuario.findById(id);
            if( !usuario ){
                return false;
            }
            pathViejo = `./uploads/usuarios/${ usuario.img }`;
            borrarImagen( pathViejo );

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

        break;
    
    }
}

module.exports = {
    actualizarImagen,
}