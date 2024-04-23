const albums = [
    {
        nombre: "LUSH",
        lanzamiento: "2012",
        imagen: "https://f4.bcbits.com/img/a2481458998_65"
    },
    {
        nombre: "Retired from Sad, New Career in Business",
        lanzamiento: "2013",
        imagen: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F06b5173af1021cb5d672207df8696541.1000x1000x1.jpg"
    },
    {
        nombre: "Bury Me at Makeout Creek",
        lanzamiento: "2014",
        imagen: "https://t2.genius.com/unsafe/555x0/https%3A%2F%2Fimages.genius.com%2F8aafb91d485accd94ca130c8164393c7.608x608x1.jpg"
    },
    {
        nombre: "Mitski on Audiotree Live",
        lanzamiento: "2015, EP",
        imagen: "https://f4.bcbits.com/img/a0557673709_16.jpg"
    },
    {
        nombre: "Puberty 2",
        lanzamiento: "2016",
        imagen: "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F2a2e2283f9895028062454547c5faea8.1000x1000x1.jpg"
    },
    {
        nombre: "Be The Cowboy",
        lanzamiento: "2018",
        imagen: "https://media.pitchfork.com/photos/645d40634f4e20edab39a90b/1:1/w_320,c_limit/Mitski-Be-the-Cowboy.jpg"
    },
    {
        nombre: "This Is Where We Fall",
        lanzamiento: "2021, EP",
        imagen: "https://f4.bcbits.com/img/a3413893621_16.jpg"
    },
    {
        nombre: "Laurell Hell",
        lanzamiento: "2022",
        imagen: "https://media.pitchfork.com/photos/61898887cbc65810d2fd19c9/1:1/w_320,c_limit/Mitski-Laurel-Hell.jpg"
    },
    {
        nombre: "The Land Is Inhospitable And So Are We",
        lanzamiento: "2023",
        imagen: "https://media.pitchfork.com/photos/64c03880f653299579f89e96/1:1/w_320,c_limit/mitski-TheLandIsInhospitableAndSoAreWe.jpg"
    },
    {
        nombre: "My Love Mine All Mine",
        lanzamiento: "2023",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5pspbhiyNtV7H0nANZrwfFnysvZyznyEjUFlib4qyg&s"
    },
    
];

// Función para mostrar los álbumes en la página
function mostrarAlbums() {
    const contenedorAlbums = document.querySelector('.flex');
    
    albums.forEach(album => {
        // Crear elemento div para el card
        const card = document.createElement('div');
        card.classList.add('card', 'w-96', 'bg-slate-400', 'shadow-xl');

        // Crear elemento figure para la imagen
        const figure = document.createElement('figure');
        figure.classList.add('px-10', 'pt-10');
        const imagen = document.createElement('img');
        imagen.src = album.imagen;
        imagen.alt = album.nombre;
        imagen.classList.add('rounded-xl', 'drop-shadow-xl', 'w-64', 'h-64');
        figure.appendChild(imagen);

        // Crear elemento div para el cuerpo del card
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'items-center', 'text-center');
        const titulo = document.createElement('h2');
        titulo.classList.add('card-title', 'text-black');
        titulo.textContent = album.nombre;
        const lanzamiento = document.createElement('p');
        lanzamiento.classList.add('text-black')
        lanzamiento.textContent = album.lanzamiento;
        cardBody.appendChild(titulo);
        cardBody.appendChild(lanzamiento);

        // Agregar figure y cardBody al card
        card.appendChild(figure);
        card.appendChild(cardBody);

        // Agregar card al contenedor
        contenedorAlbums.appendChild(card);
    });
}

// Llamar a la función para mostrar los álbumes
mostrarAlbums();





