const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, loginUsuario, revalidaToken } = require("../controllers/usuarioController");
const { validarCampos } = require("../middlewares/validar.campos");
const { validarJWT } = require("../middlewares/validar.JWT");

const router = Router();

// Crear usuario
router.post("/new",[
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorio").isLength({ min:8 }),
    validarCampos

], crearUsuario);

// Login usuario
router.post("/", [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorio").isLength({ min:8 }),
    validarCampos
], loginUsuario);

// Validar y revalidar token
router.get("/renew", validarJWT ,revalidaToken);

module.exports = router;