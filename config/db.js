const mongoose = require('mongoose')

const conectarDB = async() => {

    try {
        
        await mongoose.connect( process.env.DB_MONGO );
        console.log("DB Conectada!");
    } catch (error) {
        console.log(error);
        throw new  Error("Error a la hora de inicializar DB");
    }

}

module.exports = {
    conectarDB
}