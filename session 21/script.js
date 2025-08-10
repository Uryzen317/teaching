const mainContainer = document.body;
const availableImages = ["apple.png", "orange.png", "banana.jpeg"];
let cards = [];
const ROW_COUNT = 2;
const COLUMN_COUNT = 3;
let selectedCards = [];

initCards();
function initCards() {
  cards = [];

  for (let counter = 0; counter < availableImages.length * 2; counter++) {
    const randomCard = selectRandomCard();
    cards.push(randomCard);
  }

  console.log("Cards selected :", cards);
  renderCards();
}

function selectRandomCard() {
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  const randomImage = availableImages[randomIndex];

  const repeatationCount = cards.filter((card) => {
    if (card === randomImage) return true;
    return false;
  });

  if (repeatationCount.length >= 2) {
    return selectRandomCard();
  } else {
    return randomImage;
  }
}

function renderCards() {
  mainContainer.innerHTML = "";
  let index = 0;

  for (let row = 0; row < ROW_COUNT; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");

    for (let column = 0; column < COLUMN_COUNT; column++) {
      const image = document.createElement("img");
      image.id = index;

      image.addEventListener("click", (e) => {
        if (selectedCards.length <= 1) {
          image.src = "./assets/" + cards[parseInt(image.id)];
          selectedCards.push(cards[parseInt(image.id)]);
        }

        if (selectedCards.length === 2) {
          // Check for score
          if (selectedCards[0] === selectedCards[1]) {
            // right
            console.log("right :", selectedCards[0]);

            const selectedImages = document.querySelectorAll(
              `img[src="./assets/${selectedCards[0]}"]`
            );

            setTimeout(() => {
              selectedCards = [];
              for (let i of selectedImages) {
                i.remove();
              }
            }, 1000);
          } else {
            // wrong
            console.log("wrong");

            setTimeout(() => {
              selectedCards = [];
              const allImages = document.querySelectorAll("img");
              for (const i of allImages) {
                i.src = i.src = "./assets/card";
              }
            }, 1000);
          }
        }
      });

      image.src = "./assets/" + cards[parseInt(image.id)];
      setTimeout(() => {
        image.src = "./assets/card";
      }, 1000);

      rowContainer.appendChild(image);
      index++;
    }
    mainContainer.appendChild(rowContainer);
  }
}
