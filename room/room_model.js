const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

const room = sequelize.define(
    'room', {
        //room measurements
        length: {
            type: DataTypes.FLOAT,
            allowNull: false, 
        },
        
        width: {
            type: DataTypes.FLOAT,
            allowNull: false, 
        },

        height: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },        
    },
);

console.log(room === sequelize.models.room); //should be true