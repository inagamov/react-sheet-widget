const sequelize = require("../db");
const {DataTypes} = require("sequelize");

// Define models
const Sheet = sequelize.define("sheet", {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	date: {type: DataTypes.DATEONLY},
	name: {type: DataTypes.STRING},
	amount: {type: DataTypes.INTEGER},
	distance: {type: DataTypes.INTEGER},
});

// Export models
module.exports = {
	Sheet,
};
