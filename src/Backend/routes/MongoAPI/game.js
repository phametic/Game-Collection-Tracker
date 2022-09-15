const express = require('express');
const router = express.Router();

/* 
    Games Route to MongoDB
    Contains all the game IDs saved from RAWRG.IO to load into a user's game list page
*/

// Load games model
const Game = require('../../models/game.model');

const testData = [
{
    gameId: "48",
    title: "Hitman 2",
    owned: true
}]

router.post('/test', (req, res) => {
    res.send('game route testing');
    Game.create(testData).catch(err => res.status(404).json({noGameFound: 'No Game found.'}));
});

// router.get('/', (req, res) => {
//     res.send("Hello World!");
// })

// @route GET api/games
// @description Get all games

router.get('/', (req, res) => {
    Game.find()
        .then(games => res.json(games))
        .catch(err => res.status(404).json({noGamesFound: 'No Games found.'}));
});

// @route GET api/games/:id
// @description Get a game by it's id
router.get('/:id', (req, res) => {
    Game.findOne({gameId: req.params.id})
        .then(game => res.json(game))
        .catch(err => res.status(404).json({noGameFound: 'No Game found.'}))
});

// @route POST api/games
// @description Add a game
router.post('/add', (req, res) => {
    Game.create(req.body)
        .then(game => res.json({msg: 'Game added successfully'}))
        .catch(err => res.status(400).json({error: 'Unable to add this game.'}))
});

// @route PUT api/games
// @description Update a game

// @route DELETE api/games
// @description Delete a game by its ID
router.delete('/:id', (req, res) => {
    console.log(req.params.id + " " + req.body)
    Game.deleteOne({gameId: req.params.id})
        .then(game => res.json({msg: 'Game deleted successfully'}))
        .catch(err => res.status(400).json({error: 'No game found'}));
    // Game.findByIdAndDelete(req.params.id, req.body)
    //     .then(game => res.json({msg: 'Game deleted successfully'}))
    //     .catch(err => res.status(400).json({error: 'No game found'}));
})

module.exports = router;