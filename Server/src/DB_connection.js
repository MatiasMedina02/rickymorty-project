require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("./models/Favorite.js");
const UserModel = require("./models/User.js");

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
	{ logging: false, native: false }
);

UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite", timestamps: false });
Favorite.belongsToMany(User, { through: "user_favorite", timestamps: false });

module.exports = {
	...sequelize.models,
	conn: sequelize,
};
