const Person = require("../models/person.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.findAllPersons = (req, res) => {
    Person.find()
        .then(allPersons => {res.json({persons: allPersons})})
        .catch(err => {res.json({message: "Something went wrong", error: err})})
};

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(newPerson => {res.json({person: newPerson})})
        .catch(err => {res.json({message: "Something went wrong", error: err})})
};

module.exports.findSinglePerson = (req, res) => {
    Person.findOne({_id: req.params.body})
        .then(singlePerson => {res.json({person: singlePerson})})
        .catch(err => {res.json({message: "Something went wrong", error: err})})
}

module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id: req.params.body},
        req.body,
        {new: true, runValidators: true})
        .then(updatedPerson => {res.json({person: updatedPerson})})
        .catch(err => {res.json({message: "Something went wrong", error: err})})
}

module.exports.deletePerson = (req, res) => {
    Person.deleteOne({_id: req.params.body})
        .then(deletedPerson => {res.json({result: deletedPerson})})
        .catch(err => {res.json({message:"Something went wrong", error: err})})
};