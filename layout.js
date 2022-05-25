import createElement from "./createElement/createElement.js";
let cartBoxDiv;

/* SECTION 1 */

let fragment = new DocumentFragment();
console.log(fragment.childNodes)
const maincontainer = document.querySelector("#container")

const Section1 = createElement({
  tag: "section",
  classList: ["section1"],
  parent: fragment,
});
const header = createElement({
  tag: "header",
  classList: ["header", "flexBetween"],
  parent: Section1,
});
const logo = createElement({
  tag: "img",
  classList: ["logo"],
  src: "https://img.icons8.com/color/96/000000/bookshop--v2.png",
  parent: header,
});
const nav = createElement({
  tag: "nav",
  classList: ["navigation", "flexBetween"],
  parent: header,
});
const ul = createElement({
  tag: "ul",
  classList: ["navUl", , "flexBetween"],
  parent: nav,
});
const cart = createElement({
  tag: "img",
  classList: ["cart"],
  src: "https://img.icons8.com/color/48/000000/shopping-cart--v1.png",
  parent: nav,
});
const navArr = ["Home", "My Books", "Browse", "Community", "Sign Up"];
for (let i = 0; i < navArr.length; i++) {
  const li = createElement({
    tag: "li",
    classList: ["navLi"],
    parent: ul,
  });
  const a = createElement({
    tag: "a",
    classList: ["navA"],
    parent: li,
    src: "#",
    text: navArr[i],
  });
}
const section1Content = createElement({
  tag: "div",
  classList: ["section1Content"],
  parent: Section1,
});

const section1Text = createElement({
  tag: "div",
  classList: ["section1Text"],
  parent: section1Content,
});

const h1 = createElement({
  tag: "h1",
  classList: ["h1"],
  parent: section1Text,
  text: "2022 Reading Challenge",
});
const section1P = createElement({
  tag: "p",
  classList: ["section1P"],
  parent: section1Text,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum impedit blanditiis dolore provident fugit laboriosam atque et alias recusandae quisquam, voluptatum placeat molestias laudantium. Quod voluptatem unde veritatis facere?",
});
const section1Button = createElement({
  tag: "button",
  classList: ["section1Button"],
  parent: section1Text,
  text: "Learn more",
});
const section1Image = createElement({
  tag: "img",
  classList: ["section1Image"],
  src: "https://images.genial.ly/5b110cd936c5443891a04359/da5b58bd-7658-4115-a33a-28edff8090c4.svg",
  parent: section1Content,
});

/* SECTION2 */
const section2 = createElement({
  tag: "section",
  classList: ["section2"],
  parent: fragment,
});
const listBox = createElement({
  tag: "div",
  classList: ["box", "box1", "shadow2"],
  parent: section2,
});
const cartBox = createElement({
  tag: "div",
  classList: ["box", "box2", "shadow2"],
  parent: section2,
});
const listBoxDiv = createElement({
  tag: "div",
  classList: ["insideBox", "horizontal-scroll-wrapper"],
  parent: listBox,
});
cartBoxDiv = createElement({
  tag: "div",
  classList: ["cartBoxDiv"],
  parent: cartBox,
  id: "div1",
});
const listBoxH2 = createElement({
  tag: "h2",
  classList: ["Section2H2"],
  text: "Book Catalog",
  parent: listBox,
});
const cartBoxH2 = createElement({
  tag: "h2",
  classList: ["Section2H2"],
  parent: cartBoxDiv,
  text: "Order Books",
});
const confirmOrder = createElement({
  tag: "div",
  classList: ["section1Button", "flexButton"],
  parent: cartBoxDiv,
});
const confirmOrderAnchor = createElement({
  tag: "a",
  classList: ["confirmOrderAnchor"],
  parent: confirmOrder,
  href: "./confirmOrder.html",
  text: "Confirm Order",
});
const totalPriceDiv = createElement({
  tag: "div",
  classList: ["section1Button", "totalPriceDiv"],
  parent: cartBoxDiv,
  text: "totalPrice",
});
maincontainer.appendChild(fragment)
export {
  section2,
  listBox,
  cartBox,
  listBoxDiv,
  cartBoxDiv,
  listBoxH2,
  cartBoxH2,
  totalPriceDiv,
  confirmOrderAnchor,confirmOrder
};
