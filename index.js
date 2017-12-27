(async function() {
	const express = require("express");
	const _ = require("lodash");

	const Sequelize = require("sequelize");
	const config = require("./config.json");

	const db = require("./models")(Sequelize, config);

	await db.sequelize.sync();

	const app = express();

	app.set("view engine", "pug");

	app.get("/", async (req, res) => {
		const countriesCount = await db.country.count();
		const citiesCount = await db.city.count();

		res.render("index", { countriesCount, citiesCount });
	});

	app.get("/countries.html", async (req, res) => {
		let pageNumber = req.query.page - 1 || 0;

		const countriesCount = await db.country.count();
		const pageCount = Math.floor(countriesCount / 25);

		pageNumber = pageNumber < 0 ? 1 : pageNumber;
		pageNumber = pageNumber > pageCount ? pageCount - 2 : pageNumber;

		const countries = await db.country.findAll({
			offset: 25 * pageNumber,
			limit: 25
		});

		const firstId = pageNumber * 25 + 1;
		const lastId = firstId + 24;

		const pageArray = _.range(1, pageCount);

		res.render("countries", {
			countries,
			firstId,
			lastId,
			pageArray,
			currentPage: pageNumber + 1
		});
	});

	app.get("/countries/:id", async (req, res) => {
		const countryCode = req.params.id;

		const country = await db.country.findAll({
			where: {
				Code: countryCode
			},
			include: [{ all: true }],
			raw: true
		});

		const biggestCities = await db.city.findAll({
			limit: 3,
			where: { CountryCode: countryCode },
			order: [["Population", "DESC"]],
			raw: true
		});

		const languages = await db.countryLanguage.findAll({
			limit: 3,
			where: { CountryCode: countryCode },
			order: [["Percentage", "DESC"]],
			raw: true
		});

		res.render("country", {
			country: country[0],
			biggestCities,
			languages
		});
	});

	app.get("/cities/:id", async (req, res, next) => {
		const cityCode = req.params.id;

		let city = await db.city.findById(cityCode);
		let country = await db.country.findAll({
			where: {
				Code: city.CountryCode
			},
			include: [{ all: true }],
			raw: true
		});

		let officialLanguages = await db.countryLanguage.findAll({
			where: {
				CountryCode: country[0].Code,
				IsOfficial: "T"
			},
			raw: true
		});

		res.render("city", {
			city,
			country: country[0],
			officialLanguages
		});
	});

	app.listen(3000, () => console.log("Example app listening on port 3000!"));
})();
