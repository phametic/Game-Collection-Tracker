const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    gameId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        default: "No Game Title."
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Game', GameSchema);