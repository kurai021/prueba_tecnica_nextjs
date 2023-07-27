import { DataTypes } from "sequelize";
import sequelize from '../config/database';

const Proyecto = sequelize.define('Proyecto', {
    nombreCliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombreProyecto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estatusProyecto: {
        type: DataTypes.ENUM('EN CURSO', 'STAND BY', 'TERMINADO'),
        allowNull: false,
    },
}, {
    tableName: 'RA_Proyecto', // Especifica el nombre de la tabla en la base de datos
    timestamps: false, // Desactiva los campos de tiempo de creación y actualización automáticos
});

export default Proyecto;