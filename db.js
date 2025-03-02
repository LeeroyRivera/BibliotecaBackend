require('dotenv').config();
const { Sequelize } = require('sequelize');
const PostgresDialect = 'postgres';

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: PostgresDialect,
    host: process.env.DB_HOST,
    port: 5432,
    logging: false // Desactiva los logs de las consultas SQL
});

const connection = () => {
    db.authenticate()
    .then(() => {
        console.log('Conexion a base de datos exitosa');
    })
    .catch(err => {
        console.error('Error en conexion a base de datos', err.message);
    });
}

connection();
module.exports = db;