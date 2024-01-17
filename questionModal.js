const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
	category: String,
	title: String,
	description: String,
});

module.exports = new mongoose.model("Question", QuestionSchema);
