import Pokemon from '../models/Pokemon.js';

class PokemonController {
    static index = async (_, response) => {
        let pokemon = await Pokemon.findAll();
        response.status(200).json(pokemon);
    };

    static findById = async (request, response) => {
        let { id } = request.params;
        let pokemon = await Pokemon.findByPk(id);
        response.status(200).json(pokemon);
    };
}

export default PokemonController;
