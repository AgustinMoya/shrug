// Puerto
process.env.PORT = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else urlDB = process.env.MONGO_URI

process.env.URLDB = urlDB;


//mongodb://elausAMG:asd123@ds127843.mlab.com:27843/cafe
//Vencimiento del Token
/*
    60 segundos
    60 minutos
    24 horas
    30 dias
*/
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

//Seed de autenticacion

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//Google client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '820179865788-qlhn1mcl654v9j7tolli9vvfuadnqhq0.apps.googleusercontent.com';