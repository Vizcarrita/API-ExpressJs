const { response } = require("express");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../utilidades/jwt");


const getUsuarios = async(req, res) => {
  const desde = Number(req.query.desde) || 0;
  const [ usuarios, total ] = await Promise.all([
    Usuario
    .find({}, 'name email role img')
    .skip( desde )
    .limit( 5 ),
    Usuario.countDocuments()
  ]);
  res.json({
    ok: true,
    usuarios,
    total
  });
}


const crearUsuario = async (req, res = response) => {
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

const loginUsuario = async (req, res = response) => {
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

const actualizarUsuario = async(req, res = response) => {
  const uid = req.params.id;
  

  try {
    const usuarioDB = Usuario.findById( uid );
    if(!usuarioDB){
      return res.status(400).json({
        ok:false,
        msg:"No existe un usuario por ese id"
      });
    }
    
    const { password, email, ...campos} = req.body;

    if(usuarioDB.email !== email){
      const existeEmail = await Usuario.findOne({ email });
      if( existeEmail ){
        return res.status(400).json({
          ok:false,
          msg:"Ya existe un usuario con ese email"
        });
      }
    }

    campos.email = email;

    // Actualizacion

    const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, {new: true} );

    res.json({
      ok: true,
      usuario: usuarioActualizado
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado"
    })
  }
}

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
  getUsuarios,
  loginUsuario,
  actualizarUsuario,
  revalidaToken,
};
