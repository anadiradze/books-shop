import createElement from "./createElement/createElement.js";
import { calledDataFunc } from "./data/data.js";
import {
  listBoxDiv,
  cartBoxDiv,
  totalPriceDiv,
} from "./layout.js";
let showMore;
let bookDiv;
let addToBag;
let listBoxH5;
let totalPrice;
let authorsArr = [];
let imageLinkArr = [];
let titleArr = [];
let priceArr = [];
let descriptionArr = [];
let newPriceArr = [];
calledDataFunc
  .then((data) => {
    data.forEach((eachobj) => {
      authorsArr.push(eachobj.author);
      imageLinkArr.push(eachobj.imageLink);
      titleArr.push(eachobj.title);
      priceArr.push(eachobj.price);
      descriptionArr.push(eachobj.description);
    });
  })
  .then(() => {
    inForLoop();
  });

function inForLoop() {
  for (let i = 0; i < authorsArr.length; i++) {
    bookDiv = createElement({
      tag: "div",
      classList: ["bookDiv"],
      parent: listBoxDiv,
      id: `${i}`,
    });
    const imageLink = createElement({
      tag: "img",
      classList: ["imageLink"],
      src: imageLinkArr[i],
      parent: bookDiv,
    });
    const bookDivContent = createElement({
      tag: "div",
      classList: ["bookDivContent"],
      parent: bookDiv,
    });
    const bookDivText = createElement({
      tag: "div",
      classList: ["bookDivText"],
      parent: bookDivContent,
    });
    listBoxH5 = createElement({
      tag: "h5",
      classList: ["h5Authors"],
      parent: bookDivText,
      text: authorsArr[i],
    });
    const listBoxH3 = createElement({
      tag: "h3",
      classList: ["Section2H3"],
      parent: bookDivText,
      text: titleArr[i],
    });
    const listBoxH4 = createElement({
      tag: "h4",
      classList: ["h5Authors"],
      parent: bookDivText,
      text: `Price:$ ${priceArr[i]}`,
    });
    showMore = createElement({
      tag: "div",
      classList: ["showMore", "popup"],
      text: "Show more",
    });
    const showMoreSpan = createElement({
      tag: "span",
      classList: ["popuptext", "flexpopuptext"],
      parent: showMore,
      text: descriptionArr[i],
    });
    const bookDivButtonDiv = createElement({
      tag: "div",
      classList: ["bookDivButtonDiv"],
      parent: bookDivContent,
      child: showMore,
    });
    addToBag = createElement({
      tag: "button",
      classList: ["addToBag", `${i}`],
      parent: bookDivButtonDiv,
      text: "Add to bag",
    });
    const removeSpan = createElement({
      tag: "div",
      classList: ["removeSpan"],
      parent: showMoreSpan,
      text: "X",
    });

    showMore.addEventListener("click", (e) => {
      showMoreSpan.classList.toggle("show");
    });

    const addToBagHTMLCollection = document.getElementsByClassName("addToBag");
    addToBagHTMLCollection[i].addEventListener("click", (e) => {
      const CartDivTextS2 = createElement({
        tag: "div",
        classList: ["CartDivTextinCart"],
        parent: cartBoxDiv,
        id: `${i}`,
      });
      const listBoxH5S2 = createElement({
        tag: "h5",
        classList: ["h5Authors"],
        parent: CartDivTextS2,
        text: authorsArr[i],
      });
      const listBoxH3S2 = createElement({
        tag: "h3",
        classList: ["Section2H3"],
        parent: CartDivTextS2,
        text: titleArr[i],
      });
      const listBoxH4S2 = createElement({
        tag: "h4",
        classList: ["bookDivH4"],
        parent: CartDivTextS2,
        text: priceArr[i],
      });
      const buttonAndAmount = createElement({
        tag: "div",
        classList: ["buttonAndAmount"],
        parent: CartDivTextS2,
      });
      const addToBagS2 = createElement({
        tag: "button",
        classList: ["addToBagS2"],
        parent: buttonAndAmount,
        text: "Remove",
      });

      const addToBagS2HTMLCollection =
        document.getElementsByClassName("addToBagS2");
      newPriceArr.push(priceArr[i]);
      console.log("damatebis dros",newPriceArr)
      reducer(newPriceArr);
      totalPriceDiv.textContent = `Total Price: $${totalPrice}`;
    });
  }
  
  function reducer(ArrayOfPrices) {
    let initialValue = 0;
    totalPrice = ArrayOfPrices.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  }

  const container = document.querySelector(".cartBoxDiv");
  container.addEventListener("click", function (e) {
    if (e.target.classList.contains("addToBagS2")) {
      totalPrice = totalPrice - e.target.parentElement.parentElement.childNodes[2].textContent;
      e.target.parentElement.parentElement.remove();
     let index= newPriceArr.indexOf(e.target.parentElement.parentElement.childNodes[2].textContent)
     newPriceArr.splice(index,1)
    }
    totalPriceDiv.textContent = `Total Price: $${totalPrice=0}`;
  });
}

export {
  bookDiv,
  showMore,
  addToBag,
  authorsArr,
  imageLinkArr,
  titleArr,
  priceArr,
  descriptionArr,
};
