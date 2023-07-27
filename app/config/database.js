import { config } from 'dotenv';
config(); // Carga las variables de entorno desde el archivo .env

import { Sequelize } from "sequelize"
import * as tedious from 'tedious';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.HOST,
        dialect: 'mssql',
        dialectModule: tedious,
    }
);

export default sequelize;