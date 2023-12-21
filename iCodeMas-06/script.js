const discountContainer = document.querySelector(".discount-container");
const closeBtn = document.getElementById("close-btn");
const productContainer = document.querySelector(".container");
const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelector(".nav-item");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("actives");
    navItem.classList.toggle("active");
});

const productDetails = [
    {
        imgSrc: "./images/christmas-tree.webp",
        title: "Christmas Tree Decoration",
        price: 19.99,
        className: ["new-tag"]
    },

    {
        imgSrc: "./images/gift.webp",
        title: "Gift Box",
        price: 9.99,
        orgPrice: [12.99],
        className: ["disc-tag"]
    },

    {
        imgSrc: "./images/gingerbread.webp",
        title: "Gingerbread Man Cookie",
        price: 12.99,
    },

    {
        imgSrc: "./images/snowflake.jpg",
        title: "Snowflake Decoration",
        price: 4.99,
    },

    {
        imgSrc: "./images/star-cookie.webp",
        title: "Star-shaped Cookie",
        price: 12.99,
    },

    {
        imgSrc: "./images/santa-hat.jpg",
        title: "Santa's Hat",
        price: 39.99,
    },

    {
        imgSrc: "./images/candy-cane.jpg",
        title: "Candy Cane",
        price: 8.99,
    },

    {
        imgSrc: "./images/snowman.jpg",
        title: "Snowman Decoration",
        price: 39.99,
    },

    {
        imgSrc: "./images/christmas-ball.jpg",
        title: "Christmas Ball",
        price: 4.99,
    },

    {
        imgSrc: "./images/red-socks.jpg",
        title: "Christmas Red Socks",
        price: 29.99,
    },

    {
        imgSrc: "./images/red-ribbon.jpg",
        title: "Red Ribbon",
        price: 3.99,
    },

    {
        imgSrc: "./images/tree-cookie.jpg",
        title: "Christmas tree Cookie",
        price: 13.99,
    },
]

productDetails.forEach(ele => {
    const html = `
    <ul class="product-wrapper">
    <li class="product-list">
      <div class="img ${ele.className?.[0]}">
        <img src=${ele.imgSrc} alt=${ele.title} />
        <button class="craft-btn">
          Add to cart <ion-icon name="bag-outline"></ion-icon>
        </button>
      </div>
      <ul class="product-desc">
        <li class="product-detail">
          <h3>${ele.title}</h3>
          <div class="price">
            <h1>$${ele.price}</h1>
            ${ele.orgPrice ? `<h3>$${ele.orgPrice?.[0]}</h3>` : ""}
          </div>
        </li>
      </ul>
    </li>
  </ul>
    `
    productContainer.insertAdjacentHTML("beforeend", html);
})

closeBtn.addEventListener("click", () => {
    discountContainer.style.display = "none";
});

const craftBtn = document.querySelectorAll(".craft-btn");
craftBtn.forEach(e => {
    e.addEventListener("click", () => {
        e.textContent = "";
        e.insertAdjacentHTML("beforeend", (`Added to cart <ion-icon name="bag-check-outline"></ion-icon>`));
        e.classList.add("added-craft");
    });
});