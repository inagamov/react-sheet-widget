// Import models
const {Sheet} = require("../models/models");

// Import sequelize operators
const {Op} = require("sequelize");

// Import module to generate random strings
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

class SheetController {
	// Create new sheet row
	async create(request, response) {
		// Receive request's body
		const {date, name, amount, distance} = request.body;

		// Create new sheet row
		const row = await Sheet.create({date, name, amount, distance});

		// Response with created row data
		return response.json(row);
	}

	async createRandomMultiple(request, response) {
		// Request params destructurization
		const {number} = request.params;

		// Init lorem impsum class
		const lorem = new LoremIpsum({
			wordsPerSentence: {
				max: 6,
				min: 2,
			},
		});

		for (let i = 0; i < number; i++) {
			let date = new Date().toISOString().slice(0, 10);
			let name = lorem.generateSentences(1);
			let amount = Math.floor(100000 + Math.random() * 900000);
			let distance = Math.floor(100000 + Math.random() * 900000);

			console.log({date, name, amount, distance});

			await Sheet.create({date, name, amount, distance});
		}

		return response.json(200);
	}

	// Fetch all sheet rows
	async get(request, response) {
		// Receive request's query (limit and page)
		let {limit, page} = request.body.params;

		// Receive request's body
		let {filter} = request.body;

		// If no query has been sent, set default values for limit and page
		limit = limit || 10;
		page = page || 1;

		// Count offset
		let offset = page * limit - limit;

		// Define variable for request
		let data = [];

		// Filter using sequelize operators
		// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
		if (filter.column && filter.condition && filter.query) {
			if (filter.condition == "contains") {
				data = await Sheet.findAndCountAll({
					where: {[filter.column]: {[Op.iLike]: "%" + filter.query + "%"}},
					limit,
					offset,
				});
			}

			if (filter.condition == "equal") {
				data = await Sheet.findAndCountAll({
					where: {[filter.column]: {[Op.eq]: filter.query}},
					limit,
					offset,
				});
			}

			if (filter.condition == "more") {
				data = await Sheet.findAndCountAll({
					where: {[filter.column]: {[Op.gt]: filter.query}},
					limit,
					offset,
				});
			}

			if (filter.condition == "less") {
				data = await Sheet.findAndCountAll({
					where: {[filter.column]: {[Op.lt]: filter.query}},
					limit,
					offset,
				});
			}

		// Don't filter, fetch all
		} else {
			// Fetch sheet rows that match the limit and the offset
			data = await Sheet.findAndCountAll({limit, offset});
		}

		// Response with fetched data
		return response.json(data); // {"count":0,"rows":[]}
	}
}

// Export the controller
module.exports = new SheetController();
