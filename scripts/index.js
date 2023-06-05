/*--    TEST - PIN MAP METHODE AJOUT BTN JS     -*/
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const image = document.getElementById('image');

button1.addEventListener('click', () => {
  const card = createCard('assets/camping_1.jpg', 'Mittersheim');
  image.insertAdjacentElement('afterend', card);
});

button2.addEventListener('click', () => {
  const card = createCard('assets/camping_1.jpg', 'Hubble');
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

  const cardPhoto = document.createElement('img');
  cardPhoto.src = photo;
  cardContent.appendChild(cardPhoto);

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;
  cardContent.appendChild(cardTitle);

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

