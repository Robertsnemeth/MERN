const Team = require("../models/team.model");

module.exports.findAllPlayers = (req, res) => {
    Team.find()
        .then(allPlayers => {res.json({players: allPlayers})})
        .catch(err => {res.json({message: "Something went wrong", error: err})})
};

module.exports.createPlayer = (req, res) => {
    Team.create(req.body)
        .then(newPlayer => {res.json({player: newPlayer})})
        .catch(err => {res.status(400).json({message: "Something went wrong", error: err})})
};

module.exports.findSinglePlayer = (req, res) => {
    Team.findOne({_id: req.params.id})
        .then(singlePlayer => {res.json({player: singlePlayer})})
        .catch(err => {res.json({message: "Something went wrong", error:err})})
};

module.exports.updatePlayer = (req, res) => {
    Team.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedPlayer => {res.json({player: updatedPlayer})})
        .catch(err => {res.status(400).json({message: "Something went wrong", error: err})})
};

module.exports.deletePlayer = (req, res) => {
    Team.deleteOne({_id: req.params.id})
        .then(deletedPlayer => res.json(deletedPlayer))
        .catch(err => {res.json({message: "Something went wrong", error: err})})
};