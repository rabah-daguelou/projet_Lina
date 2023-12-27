// Menu Burger
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
  //divSlider.classList.toggle("slider");
  divSliderAndFilmsFound.classList.toggle("slider");
});

let films = document.getElementById("myFilms");
let series = document.getElementById("mySeries");
let docs = document.getElementById("myDocs");
let autres = document.getElementById("myAutres");

// Liste des films
let myFilms = [
  "james.jpg",
  "alice.jpg",
  "athena.jpg",
  "charlie.jpeg",
  "grenouille.jpg",
  "harry.jpg",
  "pirates.jpg",
  "raiponce.jpg",
  "avatar.jpg",
  "prince.jpg",
];
let mySeries = [
  "monk.jpg",
  "lupin.jpg",
  "mercredi.jpg",
  "riverdale.jpg",
  "casa.jpeg",
  "columbo.jpg",
  "ginny.jpg",
  "desperate.jpg",
  "gossip.jpg",
  "stranger.jpg",
];
let myDocs = [
  "grita.jpg",
  "zinder.jpg",
  "predateur.jpg",
  "britney.jpg",
  "hitler.jpg",
  "maradona.jpg",
  "poutine.jpg",
  "jackson.jpg",
  "marie.jpg",
  "rome.jpg",
];
let myAutres = [
  "chucky.jpg",
  "aimes.jpg",
  "ca.jpg",
  "elle.jpg",
  "proie.jpg",
  "conjuring.jpg",
  "smile.jpeg",
  "annabelle.jpg",
  "exorcisme.jpg",
  "nonne.jpg",
];

let myDivs = [films, series, docs, autres];
let AllLists = [myFilms, mySeries, myDocs, myAutres];

// Créer les boutons gauche / Droit
/*let slideLeftDiv = document.createElement("div");
slideLeftDiv.innerHTML = "&lt";
slideLeftDiv.classList = "slide_left";
slideLeftDiv.setAttribute("onClick", "slideTo(-1)");

let slideRightDiv = document.createElement("div");
slideRightDiv.innerHTML = "&gt";
slideRightDiv.classList = "slide_right";
slideRightDiv.setAttribute("onClick", "slideTo(1)");
*/
// Fonction de slide
/*
function injectFilms() {
  films.appendChild(slideLeftDiv);
  films.appendChild(slideRightDiv);

  myFilms.forEach((film) => {
    let imageTag = document.createElement("img");
    imageTag.src = "images/" + film;
    films.append(imageTag);
  });
}
*/

// nouveau code
function injectFilms() {
  let arguments = ["myFilms", "mySeries", "myDocs", "myAutres"];
  let n = 0;
  myDivs.forEach((myDiv) => {
    let slideLeftDiv = document.createElement("div");
    slideLeftDiv.innerHTML = "&lt";
    slideLeftDiv.classList = "slide_left";

    slideLeftDiv.setAttribute("onClick", `slideTo(-1,${n})`);

    let slideRightDiv = document.createElement("div");
    slideRightDiv.innerHTML = "&gt";
    slideRightDiv.classList = "slide_right";
    slideRightDiv.setAttribute("onClick", `slideTo(1, ${n})`);

    myDiv.appendChild(slideLeftDiv);
    myDiv.appendChild(slideRightDiv);

    AllLists[n].forEach((image) => {
      if (n > AllLists[n].length) {
        n == AllLists[n].length;
      }
      let imageTag = document.createElement("img");
      imageTag.src = "images/" + image;
      myDiv.append(imageTag);
    });
    n++;
  });
}

// Fin nouveau code
///

injectFilms();

// Slide_left & Slide_right

function slideTo(sens, n) {
  let liste = AllLists[n];
  let div = myDivs[n];

  console.log(liste);
  console.log(div);
  if (sens == -1) {
    let first_image = liste.shift();
    liste.push(first_image);
    div.innerHTML = "";
  } else {
    let last_image = liste[liste.length - 1];
    liste.pop();
    liste.unshift(last_image);
    div.innerHTML = "";
  }
  injectFilms(); /**/
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
let message = document.createElement("p");
message.setAttribute("id", "message");
message.textContent = "Aucun film ne correspond à votre recherche!";
// Injecter la div des films trouvés si input a une valeur
myInput.addEventListener("input", () => {
  let liste = [];
  divFilmsFound.innerHTML = "";

  // div des images
  let divFilmsFoundImages = document.createElement("div");
  divFilmsFoundImages.setAttribute("id", "divFilmsFoundImages");

  divSliderAndFilmsFound.appendChild(divFilmsFound);
  

  // Chercher les films correspondants

  AllLists.forEach((element) => {
    element.forEach((film) => {
      if (film.startsWith(myInput.value)) {
        liste.push(film);
      }
    });
    
        // Si des films trouvés
    if (myInput.value && liste.length) {
      divFilmsFoundImages.innerHTML = "";
        message.innerHTML=''
        divFilmsFound.appendChild(h2);
      liste.forEach((image) => {
        divFilmsFound.appendChild(divFilmsFoundImages);
        let divImage = document.createElement("div");
        divFilmsFoundImages.appendChild(divImage);
        divImage.setAttribute("id", "divImage");
        //
        let filmImage = document.createElement("img");
        filmImage.setAttribute("id", "imageFound");

        filmImage.src = `images/${image}`;
        //
        let h4 = document.createElement("h4");
        h4.style.textAlign = "center";

        h4.textContent = image.split(".")[0].toUpperCase();

        divImage.appendChild(filmImage);
        divImage.appendChild(h4);
      });

      // Si aucun film trouvé
    } else if (liste.length <1) {
        console.log(liste);
        divFilmsFound.innerHTML = "";
        message.textContent = "Aucun film ne correspond à votre recherche!";
      divFilmsFound.appendChild(message);
      return;
      // Si input vidé
    } else {
        divFilmsFound.remove();
        message.textContent = "";
    }
  });
});
