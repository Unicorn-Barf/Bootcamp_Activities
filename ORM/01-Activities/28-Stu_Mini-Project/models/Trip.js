const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {};

Trip.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        trip_budget: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        traveller_ammount: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        traveller_id: {
            type: DataTypes.UUID,
            references: {
                model: 'travellers',
                key: 'id',
                unique: false,
            }
        },
        location_id: {
            type: DataTypes.UUID,
            references: {
                model: 'locations',
                key: 'id',
                unique: false
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'trips',
    },
);

module.exports = Trip;