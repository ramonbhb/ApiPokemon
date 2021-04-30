const { Poketipo } = require ('../models/');

class PoketipoController {
    async getAll(req,res) {
        try {
            const Poketipos = await Poketipo.findAll();
            res.status(200).json(Poketipos);
        }
        catch(err) {
            res.status(400).json({error: err.message});
        }
    }

    async create(req,res) {
        try {
            const poketipo = await Poketipo.create(req.body);
            res.status(200).json(poketipo);
        }
        catch(err) {
            res.status(400).json({error: err.message});
        }
    }
}

module.exports = new PoketipoController();