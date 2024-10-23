//later remove the individual databases to make one central database here
//connect both models to this database 

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize (
    'database', 
    'usename', 
    'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

const {roomModel} = require("./room/room_model");
const {furnitureModel} = require('./furniture/furniture_model');

const loadRoomModel = roomModel(sequelize, DataTypes); //need to find a better name than Room and Furniture eventually
const loadFurnitureModel = furnitureModel(sequelize, DataTypes); 

console.log(loadRoomModel === sequelize.models.room); //should be true
console.log(loadFurnitureModel === sequelize.models.furniture); // returns model from seuqelize.define if true