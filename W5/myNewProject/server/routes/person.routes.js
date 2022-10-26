const PersonController = require('../controllers/person.controller');

module.exports = app => {
    app.get('/api/person', PersonController.findAllPersons);
    app.get('/api/person/:id', PersonController.findSinglePerson);
    app.put('/api/person/:id', PersonController.updatePerson);
    app.post('/api/person', PersonController.createPerson);
    app.delete('/api/person/:id', PersonController.deletePerson);
}