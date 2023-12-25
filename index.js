
// Menu Burger
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
    //divSlider.classList.toggle("slider");
    divSliderAndFilmsFound.classList.toggle("slider")
});

let films = document.getElementById("films");
// Liste des films
let myFilms = [
  "james.jpg",
  "zinder.jpg",
  "alice.jpg",

  "athena.jpg",
  "charlie.jpeg",
  "mercredi.jpg",
];
let mySeries = [
  "chucky.jpg",
  "conjuring.jpg",
  "grita.jpg",
  
  "lupin.jpg",
  
];
let myDocumentaires = [
  "monk.jpg",
 
 
  "predateur.jpg",
 
  
  "riverdale.jpg",
];
let myAutres = [
  "riverdale.jpg",
  "smile.jpeg",
  
];

// Créer les boutons gauche / Droit
let slideLeftDiv = document.createElement("div");
slideLeftDiv.innerHTML = "&lt";
slideLeftDiv.classList = "slide_left";
slideLeftDiv.setAttribute("onClick", "slideTo(-1)");

let slideRightDiv = document.createElement("div");
slideRightDiv.innerHTML = "&gt";
slideRightDiv.classList = "slide_right";
slideRightDiv.setAttribute("onClick", "slideTo(1)");

// Fonction de slide
function injectFilms() {
  films.appendChild(slideLeftDiv);
  films.appendChild(slideRightDiv);

  myFilms.forEach((film) => {
    let imageTag = document.createElement("img");
    imageTag.src = "images/" + film;
    films.append(imageTag);
  });
}
injectFilms();

// Slide_left & Slide_right

function slideTo(sens) {
  if (sens == -1) {
    let first_image = myFilms.shift();
    myFilms.push(first_image);
    films.innerHTML = "";
  } else {
    let last_image = myFilms[myFilms.length - 1];
    myFilms.pop();
    myFilms.unshift(last_image);
    films.innerHTML = "";
  }
  injectFilms();
}

// Chercher un film
// Input
let myInput = document.getElementById("myInput");

// div des films avec titre
let divFilmsFound = document.createElement("div");
divFilmsFound.setAttribute("id", "divFilmsFound");
let h2 = document.createElement("h2");
h2.textContent = "Films trouvés ";

// div du slider et des films trouvés
let divSliderAndFilmsFound = document.getElementById("divSliderAndFilmsFound");

// Message Pas de films trouvés
let message = document.createElement('p')
message.setAttribute('id', 'message')
    message.textContent = "Aucun film ne correspond à votre recherche!";
// Injecter la div des films trouvés si input a une valeur
myInput.addEventListener("input", () => {
  let liste = [];
  divFilmsFound.innerHTML = "";
        
        // div des images
        let divFilmsFoundImages = document.createElement("div");
        divFilmsFoundImages.setAttribute("id", "divFilmsFoundImages");

        divSliderAndFilmsFound.appendChild(divFilmsFound);
    divFilmsFound.appendChild(h2);
    
// Chercher les films correspondants
        myFilms.forEach((film) => {
            if (film.startsWith(myInput.value)) {
                liste.push(film);
            } 
        });
        mySeries.forEach((film) => {
          if (film.startsWith(myInput.value)) {
            liste.push(film);
          }
        });
        myDocumentaires.forEach((film) => {
          if (film.startsWith(myInput.value)) {
            liste.push(film);
          }
        });
        myAutres.forEach((film) => {
          if (film.startsWith(myInput.value)) {
            liste.push(film);
          }
        });
    
// Si des films trouvés   
    if (myInput.value && liste.length) {
        divFilmsFoundImages.innerHTML = ''
        
        liste.forEach((image) => {
                
                divFilmsFound.appendChild(divFilmsFoundImages);
               // divFilmsFoundImages.appendChild(filmImage);
            //
            let divImage = document.createElement('div')
            divFilmsFoundImages.appendChild(divImage);
            divImage.setAttribute('id', 'divImage')
            //
                let filmImage = document.createElement("img");
            filmImage.setAttribute("id", "imageFound");
            
            filmImage.src = `images/${image}`;
            //
            let h4 = document.createElement('h4')
            h4.style.textAlign = 'center'
            
            h4.textContent = image.split('.')[0].toUpperCase()

            

            divImage.appendChild(filmImage)
            divImage.appendChild(h4)
            
            
        });

// Si aucun film trouvé        
    } else if (liste.length == 0) {
        divFilmsFound.innerHTML =''
        divFilmsFound.append(message)
        return
    }
// Si input vidé    
    else {
        divFilmsFound.remove();
    }
});

