const TeamController = require('../controllers/team.controller');

module.exports = app => {
    app.get('/api/team', TeamController.findAllPlayers);
    app.get('/api/team/:id', TeamController.findSinglePlayer);
    app.put('/api/team/:id', TeamController.updatePlayer);
    app.post('/api/team', TeamController.createPlayer);
    app.delete('/api/team/:id', TeamController.deletePlayer);
}