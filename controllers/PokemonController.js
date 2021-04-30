const { Pokemon, Poketipo } = require ('../models/');

class PokemonController {
    async getAll(req,res) {
        try {
            const pokemons = await Pokemon.findAll({
                include: [{
                    model: Poketipo, 
                    as: "poketipo"                   
                }]
            })
            res.status(200).json(pokemons);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async create(req,res) {
        try {
            console.log(req.body.PoketipoId)
            let PoketipoRes = await Poketipo.findByPk(req.body.poketipoId);       
            if (!PoketipoRes) {
                throw new Error('Tipo não existe')
            }
            else {
                let pokemon = {
                    nome: req.body.nome,
                    nivel: Number(req.body.nivel),
                    poketipoId: Number(req.body.poketipoId)
                }
                console.log(pokemon);
                const PokemonRes = await Pokemon.create(pokemon);
                res.status(200).json(PokemonRes);
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new PokemonController();