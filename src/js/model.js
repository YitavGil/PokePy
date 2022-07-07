import { async } from "regenerator-runtime";
import {API_URL} from './config';
import { getJSON } from "./helpers";

export const state = {
    recipe: {},
}

export const loadPokemon = async function(id) {
    try {
        const data = await getJSON(`${API_URL}/${id}/`);

        const { pokemon } = data;
        state.recipe = data
    } catch (error) {
        throw error
    }
};

export const loadSearchResults = async function(query) {
    try {
        const data = await getJSON(`${API_URL}/${query}`)
        console.log(data);
    } catch (error) {
        console.log(error);
        throw error
    }
}

loadSearchResults("squirtle")