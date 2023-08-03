let elForm = document.querySelector(".shopping__form");
let elTitle = document.querySelector(".shopping__title");
let elCount = document.querySelector(".shopping__count");
let elList = document.querySelector(".shopping__list");
let i = 0;

let list = [
  {
    count: 4,
    title: "Buy Banana",
  },
  {
    count: 7,
    title: "Buy Bobby Lee podcast",
  },
  {
    count: 1,
    title: "Buy a laptop",
  },
  {
    count: 6,
    title: "Buy booth",
  },
  {
    count: 9,
    title: "Buy brick",
  },
];

const renderList = function (array) {
  elList.innerHTML = "";
  array.forEach((element) => {
    let liElement = document.createElement("li");
    let divElement = document.createElement("div");
    let countElement = document.createElement("p");
    let titleElement = document.createElement("p");

    let delElement = document.createElement("img");
    delElement.classList.add("item__del");
    delElement.setAttribute("id", `remove-list-${i}`);
    delElement.setAttribute(
      "src",
      "https://www.svgrepo.com/show/499905/delete.svg",
    );

    liElement.classList.add("shopping__item");

    divElement.classList.add("item__wrapper");

    countElement.textContent = element.count;
    countElement.classList.add("item__count");

    titleElement.textContent = element.title;
    titleElement.classList.add("item__title");

    divElement.append(countElement, titleElement);

    liElement.append(divElement, delElement);

    elList.append(liElement);
  });

  let del = document.querySelector("#remove-list-" + i);

  del.addEventListener("click", function () {
    // console.log(this);
    let removeEl = this.parentNode;
    // console.log(removeEl);
    console.log(del);
    elList.removeChild(removeEl);
  });
  i++;
};
renderList(list);

// **********************

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputValue = elTitle.value.trim();
  let inputCount = elCount.value;

  let new_list = {
    count: inputCount,
    title: inputValue,
  };
  list.unshift(new_list);
  renderList(list);
  elTitle.value = "";
  elCount.value = "";
});
