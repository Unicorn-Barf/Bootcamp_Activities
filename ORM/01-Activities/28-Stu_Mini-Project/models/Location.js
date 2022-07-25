const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {};

Location.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'locations',
    },
);

module.exports = Location;