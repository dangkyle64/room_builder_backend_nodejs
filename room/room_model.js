function roomModel (sequelize, DataTypes) {
    return sequelize.define(
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
}

module.exports = { roomModel }; // more verbose but would rather take clarity of what is being exported