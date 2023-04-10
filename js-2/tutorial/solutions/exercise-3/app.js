// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif

const button = document.querySelector('#generate-btn');
        button.addEventListener('click', (event) => {
        const pokemonNumber = document.querySelector('#pokemon-number').value;
        const animatedImages = document.querySelector('#animated-images').checked;
        document.querySelector('#container').innerHTML = '';
        generatePokemon(pokemonNumber, animatedImages);
});

function generatePokemon(pokemonNumber=100, animated=true){
    if (animated==true) {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';
        var fileExtension = 'gif';
    } else {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        var fileExtension = 'png';
    }
    const container = document.querySelector('#container');
    for (let i = 1; i <= pokemonNumber; i++) {
        const pokemon = document.createElement('div');
        pokemon.classList.add('pokemon');
        const label = document.createElement('span');
        label.innerText = `#${i}`;
        const newImg = document.createElement('img');
        newImg.src = `${baseURL}${i}.${fileExtension}`
    
    
        pokemon.appendChild(newImg);
        pokemon.appendChild(label);
        container.appendChild(pokemon)
    }    
}
