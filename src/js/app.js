import { getPokemon, renderPokemon, draw } from "./pokemon.js";

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(form);
  const id = data.get("id");
  const pokemon = await getPokemon(id);
  const pokemonDrawed = await renderPokemon(pokemon);
  const colors = draw.colorPalette(90);
  updateProperties(colors);
}

// Aggiornamento per transizioni CSS
function updateProperties(colors) {
  const firstColor = `rgba(${colors[0].red} ${colors[0].green} ${colors[0].blue})`;
  const secondColor = `rgba(${colors[1].red} ${colors[1].green} ${colors[1].blue})`;
  const thirdColor = `rgba(${colors[2].red} ${colors[2].green} ${colors[2].blue})`;

  document.body.style.setProperty("--primary", firstColor);
  document.body.style.setProperty("--secondary", secondColor);
  document.body.style.setProperty("--tertiary", thirdColor);
}
