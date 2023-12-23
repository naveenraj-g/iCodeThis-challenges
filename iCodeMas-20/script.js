const cartIcon = document.querySelector(".cart");
const productContainer = document.querySelector(".products-container");
const cartContainer = document.querySelector(".cart-items");
const totalPrice = document.querySelector(".total-price");
const productSearch = document.querySelector(".search-bar");

totalPrice.textContent = "$00.00";

const cartParentContainer = document.querySelector(".cart-container");

cartIcon.addEventListener("click", () => {
    cartParentContainer.classList.toggle("cart-active");
});

const productDetails = [
    {
        imgSrc: "../iCodeMas-17/images/christmas-tree.webp",
        title: "Christmas Tree Decoration",
        price: 19.99,
        productId: "#01",
    },

    {
        imgSrc: "../iCodeMas-17/images/gift.webp",
        title: "Gift Box",
        price: 9.99,
        orgPrice: [12.99],
        productId: "#02",
    },

    {
        imgSrc: "../iCodeMas-17/images/gingerbread.webp",
        title: "Gingerbread Man Cookie",
        price: 12.99,
        productId: "#03",
    },

    {
        imgSrc: "../iCodeMas-17/images/snowflake.jpg",
        title: "Snowflake Decoration",
        price: 4.99,
        productId: "#04",
    },

    {
        imgSrc: "../iCodeMas-17/images/star-cookie.webp",
        title: "Star-shaped Cookie",
        price: 12.99,
        productId: "#05",
    },

    {
        imgSrc: "../iCodeMas-17/images/santa-hat.jpg",
        title: "Santa's Hat",
        price: 39.99,
        productId: "#06",
    },

    {
        imgSrc: "../iCodeMas-17/images/candy-cane.jpg",
        title: "Candy Cane",
        price: 8.99,
        productId: "#07",
    },

    {
        imgSrc: "../iCodeMas-17/images/snowman.jpg",
        title: "Snowman Decoration",
        price: 39.99,
        productId: "#08",
    },

    {
        imgSrc: "../iCodeMas-17/images/christmas-ball.jpg",
        title: "Christmas Ball",
        price: 4.99,
        productId: "#09",
    },

    {
        imgSrc: "../iCodeMas-17/images/red-socks.jpg",
        title: "Christmas Red Socks",
        price: 29.99,
        productId: "#10",
    },

    {
        imgSrc: "../iCodeMas-17/images/red-ribbon.jpg",
        title: "Red Ribbon",
        price: 3.99,
        productId: "#11",
    },

    {
        imgSrc: "../iCodeMas-17/images/tree-cookie.jpg",
        title: "Christmas tree Cookie",
        price: 13.99,
        productId: "#12",
    },
]

function checkoutNotifycount(CartItemsCount) {
    cartIcon.setAttribute("notify-count", CartItemsCount);
}

let cart = [];

// const localCart = localStorage.getItem("cart");
// const ArrLocalcart = JSON.parse(localCart);
// console.log(ArrLocalcart);

// if (ArrLocalcart) {
//     cart = ArrLocalcart;
// } else {
//     cart = "";
// }


checkoutNotifycount(cart.length);

let productHTML = "";

productDetails.forEach((product) => {
    const productName = product.title.split(" ").join("").toLocaleLowerCase();
    productHTML += `
    <div class="product" data-name=${productName}>
        <figure>
        <img
            src=${product.imgSrc}
            alt=${product.title}
        />
        </figure>
        <button class="cart-btn" data-product-id = "${product.productId}">
        Add to cart
        <ion-icon name="bag-outline" class="product-cart-icon"></ion-icon>
        </button>
        <h2 class="product-title">${product.title}</h2>
        <h1 class="product-price">$${product.price}</h1>
  </div>
    `;
});

productContainer.innerHTML = productHTML;

productSearch.addEventListener("input", () => {
    const userInputVal = productSearch.value.toLowerCase();
    const allProductSection = document.querySelectorAll(".product");
    allProductSection.forEach((pro) => {
        let proName = pro.dataset.name;
        if (proName.includes(userInputVal)) {
            pro.style.display = "block";
        } else {
            pro.style.display = "none";
        }
    });
});

const addToCartBtn = document.querySelectorAll(".cart-btn");
addToCartBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const dataAttr = btn.dataset.productId;
        const clickedProduct = productDetails.find(ele => ele.productId === dataAttr);
        if (!cart.find(cartItem => cartItem.productId === dataAttr)) {
            cart.push({
                ...clickedProduct,
                quantity: 1,
            });
            addToCart();
            checkoutNotifycount(cart.length);
            quantityUpdate();
            totalCheckoutPrice();
            cartItemsDel();
            // saveToLocalStorage();
        }

        const findCartAdded = cart.find(cartItem => cartItem.productId === dataAttr);
        if (findCartAdded) {
            btn.classList.toggle("cart-added-btn");
            if (btn.classList.contains("cart-added-btn")) {
                btn.textContent = "Added to cart";

            } else {
                const cartItemIndex = cart.indexOf(findCartAdded);
                cart.splice(cartItemIndex, 1);
                btn.innerHTML = `Add to cart <ion-icon name="bag-outline" class="product-cart-icon"></ion-icon>`;
                addToCart();
                checkoutNotifycount(cart.length);
                quantityUpdate();
                totalCheckoutPrice();
                cartItemsDel();
                // saveToLocalStorage();
            }
        }
    });
});

function addToCart() {
    let cartHTML = "";
    cart.forEach(cartItem => {
        cartHTML += `
        <div class="cart-item">
            <figure class="cart-product-img">
            <img
                src=${cartItem.imgSrc}
                alt=${cartItem.title}
            />
            </figure>
            <div class="cart-product-details">
            <h3 class="cart-product-title">${cartItem.title}</h3>
            <p class="cart-product-price">$${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
            <div class="cart-quantity">
                <button class="item-dec" data-product-id = ${cartItem.productId}>-</button>
                <p class="item-quantity" data-product-id = ${cartItem.productId}>${cartItem.quantity}</p>
                <button class="item-inc" data-product-id = ${cartItem.productId}>+</button>
            </div>
            </div>
            <button class="delete" data-product-id = ${cartItem.productId}>
            <ion-icon name="trash-outline"></ion-icon>
            </button>
      </div>
        `;
    });
    cartContainer.innerHTML = cartHTML;
}

// addToCart();
// checkoutNotifycount(cart.length);
// quantityUpdate();
// totalCheckoutPrice();
// cartItemsDel();
// saveToLocalStorage();

function cartItemsDel() {
    const cartItemDelIcon = document.querySelectorAll(".delete");
    cartItemDelIcon.forEach(delBtn => {
        delBtn.addEventListener("click", () => {
            const findDelItemIndex = cart.findIndex(cartItem => cartItem.productId === delBtn.dataset.productId);
            cart.splice(findDelItemIndex, 1);
            addToCart();
            checkoutNotifycount(cart.length);
            cartItemsDel();
            quantityUpdate();
            totalCheckoutPrice();
            // saveToLocalStorage();

            addToCartBtn.forEach(btn => {
                if (btn.dataset.productId === delBtn.dataset.productId) {
                    btn.classList.toggle("cart-added-btn");
                    btn.innerHTML = `Add to cart <ion-icon name="bag-outline" class="product-cart-icon"></ion-icon>`;
                }
            });
        });
    });
}

function totalCheckoutPrice() {
    const totalPriceVal = cart.reduce((acc, cartItem) => {
        return acc + (cartItem.price * cartItem.quantity);
    }, 0);
    totalPrice.textContent = `$${totalPriceVal.toFixed(2)}`;
}

function quantityUpdate() {
    const incBtn = document.querySelectorAll(".item-inc");
    const decBtn = document.querySelectorAll(".item-dec");
    const quantityEle = document.querySelectorAll(".item-quantity");
    incBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const incBtnProductId = btn.dataset.productId;
            const cartItem = cart.find(cartEle => cartEle.productId === incBtnProductId);
            cartItem.quantity++;
            addToCart();
            quantityUpdate();
            checkoutNotifycount(cart.length);
            totalCheckoutPrice();
            cartItemsDel();
            // saveToLocalStorage();
        });
    });

    decBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const incBtnProductId = btn.dataset.productId;
            const cartItem = cart.find(cartEle => cartEle.productId === incBtnProductId);
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                addToCart();
                quantityUpdate();
                checkoutNotifycount(cart.length);
                totalCheckoutPrice();
                cartItemsDel();
                // saveToLocalStorage();
            }
        });
    });
}

function saveToLocalStorage() {
    return localStorage.setItem("cart", JSON.stringify(cart));
}