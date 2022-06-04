import express from 'express';
import PokemonController from '../controllers/PokemonController.js';

const pokemonsRoute = express.Router();

pokemonsRoute
    .get('/', PokemonController.index)
    .get('/:id', PokemonController.findById);

export default pokemonsRoute;
