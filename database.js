const { Sequelize, DataTypes } = require("sequelize");
const config = require('./config');

const sequelize = new Sequelize (
    config.DATABASE_SETTINGS.database, 
    config.DATABASE_SETTINGS.username, 
    config.DATABASE_SETTINGS.password, {
    host: config.DATABASE_SETTINGS.host,
    dialect: config.DATABASE_SETTINGS.dialect,
    storage: config.DATABASE_SETTINGS.storage,
});

const {roomModel} = require("./room/room_model");
const {furnitureModel} = require('./furniture/furniture_model');

const loadRoomModel = roomModel(sequelize, DataTypes); //need to find a better name than Room and Furniture eventually
const loadFurnitureModel = furnitureModel(sequelize, DataTypes); 

console.log(loadRoomModel === sequelize.models.room); //should be true
console.log(loadFurnitureModel === sequelize.models.furniture); // returns model from seuqelize.define if true