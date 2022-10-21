const { Router } = require("express");
const { crearProducto, obtenerProducto, actualizarProducto, obtenerProductoID, eliminarProducto } = require("../controllers/productoController");


const router = Router();

// api/productos
router.post('/', crearProducto);
router.get('/', obtenerProducto);
router.put('/:id', actualizarProducto);
router.get('/:id', obtenerProductoID);
router.delete('/:id', eliminarProducto);

module.exports = router;