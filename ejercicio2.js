async function fetchCatImages() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
        const data = await response.json();
        displayCats(data);
    } catch (error) {
        console.error('Error fetching cat images:', error);
    }
}

function displayCats(images) {
    const container = document.getElementById('cat-container');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.classList.add('img-fluid', 'mb-3', 'rounded');
        container.appendChild(imgElement);
    });
}

// Call the function when the window loads
window.onload = fetchCatImages;