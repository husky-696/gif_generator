
// Define the GIPHY API key
const apiKey = 'cvBOw8z7gRiC7ugEIRhg9IPgaOBFy7TV';

// Function to fetch GIFs from GIPHY API
function fetchGIFs() {
    const searchTerm = document.getElementById('memeText').value; // Get the user's input as the search term
    const numberOfGIFs = document.getElementById('numberOfGIFs').value || 1; // Default to 1 if not specified
    const randomParameter = Math.random().toString(36).substring(7); // Generate a unique random parameter

    // Make a request to the GIPHY API with a unique random parameter to fetch a different set of GIFs each time
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${numberOfGIFs}&random=${randomParameter}`)
        .then(response => response.json())
        .then(data => {
            // Process the GIF data and display the GIFs in the UI
            displayGIFs(data);
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
        });
}



// Function to display GIFs in the UI
function displayGIFs(data) {
    const gifContainer = document.getElementById('memeGIFs');

    // Check if the gifContainer exists
    if (gifContainer) {
        // Clear previous GIFs
        gifContainer.innerHTML = '';

        // Display the fetched GIFs in the UI
         data.data.forEach(gif => {
            const gifImage = document.createElement('img');
            gifImage.src = gif.images.original.url;
            gifImage.classList.add('gifImage'); // Add the CSS class to the image
            gifImage.addEventListener('click', () => copyGIFLink(gif.images.original.url));
            gifContainer.appendChild(gifImage);
          });
    } else {
        console.error('Error: memeGIFs container not found');
    }
}


// Function to copy the GIF link
function copyGIFLink(url) {
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('GIF link copied to clipboard!');
}

// Function to generate the meme using Bhailang logic
function generateMemeUsingBhailang(text) {
    // Bhailang code for generating the meme
    const bhailangCode = `
        hi bhai
        bol bhai "Generating meme with text: ${text}";
        // Add Bhailang logic here to generate the meme
        // Example: return the URL of the generated meme
        bye bhai
    `;

    // Execute the Bhailang code and return the result (URL of the generated meme)
    const result = executeBhailangCode(bhailangCode);
    return result;
}

// Simulate the execution of Bhailang code (replace with actual Bhailang interpreter)
function executeBhailangCode(code) {
    // Simulate the execution of Bhailang code and return the result
    // For demonstration purposes, we'll just return a sample URL
    return "generatedMeme.jpg";
}

// Function to generate the meme
function generateMeme() {
    const memeText = document.getElementById('memeText').value;
    generateMemeUsingBhailang(memeText); // Generate the meme using Bhailang logic

    // Clear previous GIFs
    const gifContainer = document.getElementById('memeGIFs');
    gifContainer.innerHTML = '';

    // Fetch new meme-related GIFs with a random timestamp to ensure a different set of GIFs
    fetchGIFs();
}
