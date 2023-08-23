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
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


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




