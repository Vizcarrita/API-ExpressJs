const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../utilidades/jwt");

const crearUsuario = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    //Verificar que el email no exita
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe con ese email",
      });
    }

    //Generar usuario con el modelo
    const dbUser = new Usuario(req.body);

    //Incriptar la contraseña
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    //Generar el JWT

    const token = await generarJWT(dbUser.id, name);

    //Crear usuario en la db
    await dbUser.save();

    //Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name,
      email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Por favor comuniquese con el administrador",
    });
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    const dbUser = await Usuario.findOne({ email });
    if (!dbUser) {
      return res.status(400).json({
        ok: false,
        msg: "Correo o contraseña es incorrecto",
      });
    }

    //Confirmar que la contraseña haga match
    const validPass = bcrypt.compareSync(password, dbUser.password);
    if (!validPass) {
      return res.status(400).json({
        ok: false,
        msg: "Correo o contraseña es incorrecto",
      });
    }

    //Generar JWT
    const token = await generarJWT(dbUser.id, dbUser.name);

    //Respuesta del servicio
    res.json({
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Comuniquese con el administrador",
    });
  }
};

const revalidaToken = async(req, res) => {
  const { uid } = req;

  //Leer la base de datos
  const dbUser = await Usuario.findById(uid);



  //Generar el JWT
  const token = await generarJWT(uid, dbUser.name);

  return res.json({
    ok: true,
    uid,
    name: dbUser.name,
    email: dbUser.email,
    token
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidaToken,
};
