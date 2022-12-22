const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, getUsuarios, loginUsuario, actualizarUsuario, revalidaToken } = require("../controllers/usuarioController");
const { validarCampos } = require("../middlewares/validar.campos");
const { validarJWT } = require("../middlewares/validar.JWT");
const router = Router();

// Crear usuario
router.post("/register",[
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorio").isLength({ min:6 }),
    validarCampos

], crearUsuario);

router.get( '/', getUsuarios )

// Login usuario
router.post("/login", [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatorio").isLength({ min:6 }),
    validarCampos
], loginUsuario);

//Actualizar Usuario
router.put("/:id",
[
    validarJWT,
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("role","El rol es obligatorio").not().isEmpty(),
    validarCampos,
], actualizarUsuario);

// Validar y revalidar token
router.get("/renew", validarJWT ,revalidaToken);

module.exports = router;