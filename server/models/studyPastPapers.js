const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    documentID: {
        type: String,
        required: true,
    },
});

const PastPapers = mongoose.model("past-papers", paperSchema);
module.exports = PastPapers;