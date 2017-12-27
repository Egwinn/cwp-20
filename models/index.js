const City = require("./city");
const Country = require("./country");
const CountryLanguage = require("./countrylanguage");

module.exports = (Sequelize, config) => {
	const sequelize = new Sequelize(
		config.db.database,
		config.db.user,
		config.db.password,
		config.db.options
	);

	const city = City(sequelize, Sequelize);
	const country = Country(sequelize, Sequelize);
	const countryLanguage = CountryLanguage(sequelize, Sequelize);

	return {
		city,
		country,
		countryLanguage,

		sequelize,
		Sequelize
	};
};