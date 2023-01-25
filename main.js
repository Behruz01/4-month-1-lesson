function findElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCard = findElement("#card");
const elAllBtn = findElement("#all");
const ellBreakfastBtn = findElement("#Breakfast");
const ellLunchBtn = findElement("#Lunch");
const ellShakesBtn = findElement("#Shakes");
const ellDinnerBtn = findElement("#Dinner");
const ellCardsssBtn = findElement("#cardsss");
const elTemplate = findElement("#template");
const elSearch = findElement("#search");

function renderPost(array, parent = elCard) {
  elCard.innerHTML = "";
  array.forEach((element) => {
    const card = elTemplate.content.cloneNode(true);

    const img = card.querySelector(".card-img-top");
    const title = card.querySelector(".card-title");
    const text = card.querySelector(".card-text");
    const price = card.querySelector(".price");

    img.src = element.img;
    title.textContent = element.title;
    text.textContent = element.desc;
    price.textContent = element.price + "$";

    parent.appendChild(card);
  });
}
renderPost(menu);

function optionMenu(element) {
  element.addEventListener("click", () => {
    const opt = element.id;

    let newArray = [];

    elCard.innerHTML = "";

    if (opt == "all") {
      newArray = menu;
    } else {
      menu.forEach((post) => {
        if (post.category == opt.toLowerCase()) {
          newArray.push(post);
        }
      });
    }
    renderPost(newArray);
  });
}
optionMenu(elAllBtn);
optionMenu(ellBreakfastBtn);
optionMenu(ellLunchBtn);
optionMenu(ellShakesBtn);
optionMenu(ellDinnerBtn);

// search

elSearch.addEventListener("input", function (evt) {
  evt.preventDefault();

  const array = [];

  menu.forEach((asdasd) => {
    if (asdasd.title.includes(elSearch.value)) {
      array.push(asdasd);
    }
  });
  console.log(array);
  renderPost(array);
});
