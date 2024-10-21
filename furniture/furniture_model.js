const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'database.sqlite',

}); 

//Foreign Key still required, setup other model first 
//Work to add postgres in the future 
//dialect: 'postgres',
//need to move above code into database.js

const furniture = sequelize.define(
    'furniture', {

        //choose which furniture
        furniture_type: {
            type: DataTypes.ENUM('box', 'chair', 'table'),
            allowNull: false,
        },

        //furniture measurements
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

        //furniture position
        position_x: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },

        position_y: {
            type:DataTypes.FLOAT,
            defaultValue: 0,
        },

        position_z: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },

    },
);

console.log(furniture === sequelize.models.furniture); // returns model from seuqelize.define if true