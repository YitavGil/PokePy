import { async } from "regenerator-runtime";
export const state = {
    recipe: {},
}

export const loadPokemon = async function(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await res.json();
        

        if (!res.ok) throw new Error(`Bad request`);

        const { pokemon } = data;
        state.recipe = data
    } catch (error) {
        alert(error)
    }
 

   
}