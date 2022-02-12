import Draw from './Draw.js'

const draw = new Draw(canvas)

// Richiesta fetch per ottenere i dati json della API Pokemon
async function getPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await res.json()
    return pokemon
}

// Stampa il pokemon all'interno del CANVAS
async function renderPokemon(pokemon) {
    await draw.render(pokemon.sprites.front_default)
    return draw
}

export { getPokemon, renderPokemon, draw }