const { Router } = require("express");
const { check } = require("express-validator");
const { crearProducto, obtenerProducto, actualizarProducto, obtenerProductoID, eliminarProducto } = require("../controllers/productoController");
const { validarCampos } = require("../middlewares/validar.campos");
const { validarJWT } = require("../middlewares/validar.JWT");

const router = Router();

// api/productos
router.post('/',
[
    validarJWT,
    check('name','El nombre del producto es necesario').not().isEmpty(),
    check('precio','El precio es necesario').not().isEmpty(),
    validarCampos
], crearProducto);
router.get('/', obtenerProducto);
router.put('/:id', validarJWT, actualizarProducto);
router.get('/:id', obtenerProductoID);
router.delete('/:id', validarJWT, eliminarProducto);

module.exports = router;