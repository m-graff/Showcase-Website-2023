/*-- Récupération des datas pour les Cards Map --*/
async function getCardsMap() {
  await fetch("./data/localisations.json")
      .then((res) => res.json())
      .then((data) => (localisations = data.localisations));
    return {
      localisations: [...localisations]
    }
}

async function displayCardsMap() {
  try {
    const { localisations } = await getCardsMap();
    // Utilisez les données de localisation pour créer les cartes
    localisations.forEach((localisation) => {
      const card = createCard(
        localisation.photo,
        localisation.name,
        localisation.description
      );
      // Insérez la carte où vous le souhaitez dans le DOM
      image.insertAdjacentElement('afterend', card);
    });
  } catch (error) {
    console.error(error);
  }
}
displayCardsMap();


/*--    Lieux : Pin Map     --*/
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const image = document.getElementById('image');

button1.addEventListener('click', () => {
  const card = createCard('assets/camping_1.jpg', 'ISS');
  image.insertAdjacentElement('afterend', card);
});

button2.addEventListener('click', () => {
  const card = createCard('assets/camping_2.jpg', 'Hubble');
  image.insertAdjacentElement('afterend', card);
});

function createCard(photo, title, description) {
  const card = document.createElement('div');
  card.classList.add('card');

  const closeButton = document.createElement('i');
  closeButton.classList.add('close-button');
  closeButton.classList.add('fa', 'fa-regular', 'fa-circle-xmark')
  closeButton.addEventListener('click', () => {
    card.remove();
  });
  card.appendChild(closeButton);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  card.appendChild(cardContent);

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardContent.appendChild(cardHeader);

  const cardPhoto = document.createElement('img');
  cardPhoto.src = photo;
  cardHeader.appendChild(cardPhoto);

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;
  cardHeader.appendChild(cardTitle);

  const cardNumber = document.createElement('div');
  cardNumber.classList.add('card-number')
  cardContent.appendChild(cardNumber);

  const numberIcon = document.createElement('i')
  numberIcon.classList.add('fa', 'fa-solid', 'fa-user-group')
  cardNumber.appendChild(numberIcon)

  const numberCount = document.createElement('span')
  numberCount.classList.add('card-number-count')
  numberCount.innerHTML = '300'
  cardNumber.appendChild(numberCount)

  const cardAdress = document.createElement('div')
  cardAdress.classList.add('card-adress')
  cardContent.appendChild(cardAdress)

  const adressIcon = document.createElement('i')
  adressIcon.classList.add('fa', 'fa-solid', 'fa-location-dot')
  cardAdress.appendChild(adressIcon)

  const adressCount = document.createElement('span')
  adressCount.classList.add('card-adress-count')
  adressCount.innerHTML = '118 path of faith, Jupiter'
  cardAdress.appendChild(adressCount)

  const cardDash = document.createElement('span')
  cardDash.classList.add('card-dash')
  cardContent.appendChild(cardDash)

  const cardInterests = document.createElement('div')
  cardInterests.classList.add('card-interests')
  cardContent.appendChild(cardInterests)

  const interestsIcon = document.createElement('i')
  interestsIcon.classList.add('fa', 'fa-solid', 'fa-circle-plus')
  cardInterests.appendChild(interestsIcon)

  const interestsOne = document.createElement('p')
  interestsOne.classList.add('interest-one')
  interestsOne.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  cardInterests.appendChild(interestsOne)

  const interestsTwo = document.createElement('p')
  interestsTwo.classList.add('interest-one')
  interestsTwo.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  cardInterests.appendChild(interestsTwo)

  return card;

}


/* TEST MODAL CARD MAP : Méthode dialog + data class 
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
    modal.classList.add("open");
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
});
*/


/* Bouton Scroll to Form (ancre bouton "Contact" Hero )*/
let ancreTop = document.getElementById('contact-hero');

ancreTop.addEventListener('click', function(e) {
  e.preventDefault();
  const formSection = document.getElementById('contact');
  formSection.scrollIntoView({ behavior: 'smooth' });
})

/* Bouton Scroll to Form (ancre bouton "let's go") */
let ancreBottom = document.getElementById('link');

ancreBottom.addEventListener('click', function(e) {
  e.preventDefault();
  const formSection = document.getElementById('contact');
  formSection.scrollIntoView({ behavior: 'smooth' });
})

/* -- Bouton Scroll to Top --*/
let btn = document.getElementById('scrollToTop');

window.onscroll = function() {
  if (window.scrollY > 800) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
};

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});




// TEST AJOUT ANIMATION AU SCROLL REVEAL 

// ScrollReveal options
var options = {
  distance: '80px',
  duration: 1000,
  delay: 500,
  easing: 'ease-in-out',
  origin: 'top',
};

// Initialize ScrollReveal
ScrollReveal.initialize(options);

// Scroll event listener
window.addEventListener('scroll', function() {
  // Reveal each section that is currently visible
  document.querySelectorAll('section:in-view').forEach(function(section) {
    ScrollReveal().reveal(section);
  });
});


/* TEST COOKIE BANNER
// Récupérer la référence vers les éléments du DOM
const cookieBanner = document.getElementById('cookie-banner');
const acceptButton = document.getElementById('accept-cookies');

// Fonction pour enregistrer le consentement de l'utilisateur
function enregistrerConsentement(consenti) {
  // Stockage local
  localStorage.setItem('cookieConsent', consenti.toString());
}

// Fonction pour vérifier si l'utilisateur a déjà donné son consentement
function aDonneConsentement() {
  const consentement = localStorage.getItem('cookieConsent');
  return consentement === 'true';
}

// Fonction pour activer ou désactiver les types de cookies
function gererPreferences(typeCookie, actif) {
  // Vous devrez implémenter la logique appropriée pour activer/désactiver les cookies spécifiques

  // Exemple : stockage local
  localStorage.setItem(typeCookie, actif.toString());
}

// Fonction pour récupérer l'état actuel des préférences de cookies
function obtenirPreference(typeCookie) {
  // Exemple : stockage local
  const preference = localStorage.getItem(typeCookie);
  return preference === 'true';
}

// Ajouter un gestionnaire d'événement pour le bouton d'acceptation des cookies
acceptButton.addEventListener('click', function() {
  // Enregistrer le consentement de l'utilisateur
  enregistrerConsentement(true);

  // Masquer la bannière des cookies
  cookieBanner.style.display = 'none';
});

// Vérifier si l'utilisateur a déjà donné son consentement
if (aDonneConsentement()) {
  cookieBanner.style.display = 'none';
}

// Exemple de gestion des préférences de cookies
const preferencesForm = document.getElementById('preferences-form');

preferencesForm.addEventListener('change', function(event) {
  const typeCookie = event.target.getAttribute('data-cookie');
  const estActive = event.target.checked;

  // Gérer les préférences de cookie
  gererPreferences(typeCookie, estActive);
});

// Pré-remplir les cases à cocher avec les préférences actuelles
const checkboxes = document.querySelectorAll('[data-cookie]');
checkboxes.forEach(function(checkbox) {
  const typeCookie = checkbox.getAttribute('data-cookie');
  checkbox.checked = obtenirPreference(typeCookie);
});
*/ 








/* !!! --- EXEMPLE REACT'S CONTEXT : METHOD TO EFFICIENT STATE PROPAGATION  - A SUPPRIMER ULTERIEUREMENT --- !!!

1. Prop Drilling : The app component creates the theme object and sets the initial value
2. App "<User them={theme} />" : Passes theme as prop to the User component
3. User "<Profile theme={theme} />" : Passes theme as a prop to the Profile component
4. Profil "Button theme={theme} />" : Passes theme to the Button component where it is supposed to be used
5. Button "Use thme.bgColor here"

This is more commonly know as prop drilling
The user of Context solves this problem. Because instead of passing the piece of data through all the components where it does not get used, we only need three touchpoints : 
- CREATION : Where the Context is created
- UPDATION - Where the Context value can be updated
- CONSUMPTION - Where the Context value can be read

*/



