let arr = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];
let flippedCard = [];
let isCardFlipped = false;
let retries = 20;
let score = 0;
let clearBoard = "";
let totalLength = arr.length;

arr.sort(() => Math.random() - 0.5);

const generateCard = (() => {
  const cardContainer = document.querySelector("#card-container");

  for (let index = 0; index < arr.length; index++) {
    const col = document.createElement("div");
    col.className = `col-6 col-md-3`;

    const card = document.createElement("div");
    card.className = `card card-${index} shadow h3`;

    card.dataset.value = arr[index];
    card.addEventListener("click", () => {
      if (
        isCardFlipped ||
        flippedCard.includes(card) ||
        card.classList.contains("matched")
      ) {
        return;
      }
      card.innerHTML = `<div class="card-body text-center">${arr[index]}</div>`;
      card.classList.add("flipped");
      flippedCard.push(card);

      if (flippedCard.length == 2) {
        isCardFlipped = true;

        setTimeout(() => {
          const [card_1, card_2] = flippedCard;

          if (card_1.dataset.value == card_2.dataset.value) {
            card_1.classList.add("matched");
            card_2.classList.add("matched");
            score += 10;

            console.log("Matched!");
            if (document.querySelectorAll(".matched").length == arr.length) {
              alert(`Game over! Your score is ${score}! 🎉`);
            }
          } else {
            card_1.classList.remove("flipped");
            card_2.classList.remove("flipped");
            console.log("Not Matched!");
            card_1.innerHTML = " ";
            card_2.innerHTML = " ";
            score -= 5;
            retries--;
            console.log(`You have ${retries} attempt left!`);
          }
          if (retries == 0) {
            let total_score = score < 0 ? 0 : score;
            console.log(`Failed! Your total score is ${total_score}`);
            card_1.innerHTML = " ";
            card_2.innerHTML = " ";
          }
          flippedCard = [];
          isCardFlipped = false;
        }, 500);
      }
    });
    col.appendChild(card);
    cardContainer.appendChild(col);
  }
})();
