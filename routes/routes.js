const { Router } = require ('express');
/* IMPORTAR CONTROLLERS */

const PokemonController = require('../controllers/PokemonController');
const PokeTipoController = require('../controllers/PokeTipoController');

const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).send({mensagem: "Hello World"});
})

routes.get('/pokemons', PokemonController.getAll);
routes.get('/tipos', PokeTipoController.getAll);
routes.post('/pokemon', PokemonController.create);
routes.post('/tipo', PokeTipoController.create);



module.exports = routes;