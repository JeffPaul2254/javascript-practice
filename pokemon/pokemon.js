fetchData();

async function fetchData() {
    try {
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error("Could not fetch resource");
      }

      const data = await response.json();
      console.log(data.sprites); 
      const pokemonSprite = data.sprites.front_default;

      if (!pokemonSprite) {
        alert("This Pokémon doesn't have a front_default sprite.");
        return;
      }

      const imgElement = document.getElementById("pokemonSprite");
      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
    } catch (error) {
      console.error(error);
      alert("Something went wrong. See console for details.");
    }
  }