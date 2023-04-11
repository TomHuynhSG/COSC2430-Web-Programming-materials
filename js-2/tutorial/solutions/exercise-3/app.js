// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif

const button = document.querySelector('#generate-btn'); 
        button.addEventListener('click', (event) => {

        // Get the value of the input field with the ID 'pokemon-number'
        const pokemonNumber = document.querySelector('#pokemon-number').value;

        // Get the checked state of the checkbox with the ID 'animated-images'
        const animatedImages = document.querySelector('#animated-images').checked;

        // Clear the contents of the element with the ID 'container'
        document.querySelector('#container').innerHTML = '';

        // Call the generatePokemon function with the retrieved values
        generatePokemon(pokemonNumber, animatedImages);
});

function generatePokemon(pokemonNumber=100, animated=true){
    if (animated==true) {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';
        var fileExtension = 'gif'; // Set the file extension for animated images
    } else {
        var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        var fileExtension = 'png'; // Set the file extension for regular images
    }
    const container = document.querySelector('#container');

    // Loop from 1 to the specified pokemonNumber
    for (let i = 1; i <= pokemonNumber; i++) {
        const pokemon = document.createElement('div'); // Create a new div element
        pokemon.classList.add('pokemon'); // Add the 'pokemon' class to the div element
        const label = document.createElement('span'); // Create a new span element
        label.innerText = `#${i}`; // Set the inner text of the span element to the current iteration number
        const newImg = document.createElement('img'); // Create a new img element

        // Set the src attribute of the img element to the constructed image URL
        newImg.src = `${baseURL}${i}.${fileExtension}`
    
    
        pokemon.appendChild(newImg); // Append the img element to the pokemon div
        pokemon.appendChild(label); // Append the label span element to the pokemon div
        container.appendChild(pokemon); // Append the pokemon div to the container element
    }    
}
