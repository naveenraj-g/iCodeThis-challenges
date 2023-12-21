const discountContainer = document.querySelector(".discount-container");
const productContainer = document.querySelector(".container");
const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelector(".nav-item");
const craft = document.querySelector(".craft");
const checkoutIcon = document.querySelector(".checkout-icon");
const cartTotalPrice = document.querySelector(".total-price");

cartTotalPrice.innerText = "$0.00";

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("actives");
    navItem.classList.toggle("active");
});

checkoutIcon.addEventListener("click", () => craft.classList.toggle("craft-active"));

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
    `;
    productContainer.insertAdjacentHTML("beforeend", html);
});

const craftBtn = document.querySelectorAll(".craft-btn");
const craftContainer = document.querySelector(".craft-item-con");

const craftItem = [];
craftBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
        craftContainer.innerHTML = "";
        e.textContent = "";
        e.insertAdjacentHTML("beforeend", (`Added to cart <ion-icon name="bag-check-outline"></ion-icon>`));
        if (!e.classList.contains("added-craft")) {
            const craftHTML = `
            <div class="craft-item">
            <img src=${productDetails[i].imgSrc} alt=${productDetails[i].title} />
            <div class="craft-item-detail">
              <div>
                <h2>${productDetails[i].title}</h2>
                <p>$${productDetails[i].price}</p>
                <div class="btn-container">
                  <button class="btn-min">-</button>
                  <p class="quantity">1</p>
                  <button class="btn-add">+</button>
                </div>
              </div>
              <ion-icon name="trash-outline" class="delete-btn"></ion-icon>
            </div>
          </div>
            `;
            const price = productDetails[i].price;
            const product = {
                html: craftHTML,
                price: price,
                productIndex: i,
            }
            craftItem.push(product);
            craftContainer.innerHTML = "";
            craftItem.forEach(cart => {
                craftContainer.insertAdjacentHTML("beforeend", cart.html);
                cartTotalPrice.innerText = `$${calTotalPrice(craftItem).toFixed(2)}`;
                checkoutNotifycount(craftItem.length);
            });
        }
        e.classList.add("added-craft");

        craftContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                const parentElement = e.target.parentNode.parentNode;
                const index = Array.from(parentElement.parentNode.children).indexOf(parentElement);

                parentElement.remove();
                const removedEle = craftItem.splice(index, 1);
                actualProductIndex = removedEle[0].productIndex;
                const btn = craftBtn[actualProductIndex];
                btn.innerHTML = "";
                btn.classList.remove("added-craft");
                btn.insertAdjacentHTML("beforeend", 'Add to cart <ion-icon name="bag-outline"></ion-icon>');
                cartTotalPrice.innerText = `$${calTotalPrice(craftItem).toFixed(2)}`;
                checkoutNotifycount(craftItem.length);
            }
        });
    });
});

function calTotalPrice(productArr) {
    if (productArr.length === 0) return 0;
    const total = productArr.reduce((acc, ele) => {
        return acc + ele.price;
    }, 0);
    return total;
}

function checkoutNotifycount(arr) {
    checkoutIcon.setAttribute("notify-count", arr);
}
checkoutNotifycount(0);