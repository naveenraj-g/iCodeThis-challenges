const productSearch = document.querySelector(".search-bar");
const productContainer = document.querySelector(".product-list");
const productCount = document.querySelector(".count");

const productDetails = [
    {
        imgSrc: "./images/christmas-tree.webp",
        title: "Christmas Tree Decoration",
        price: 19.99,
        productId: "#01",
    },

    {
        imgSrc: "./images/gift.webp",
        title: "Gift Box",
        price: 9.99,
        orgPrice: [12.99],
        productId: "#02",
    },

    {
        imgSrc: "./images/gingerbread.webp",
        title: "Gingerbread Man Cookie",
        price: 12.99,
        productId: "#03",
    },

    {
        imgSrc: "./images/snowflake.jpg",
        title: "Snowflake Decoration",
        price: 4.99,
        productId: "#04",
    },

    {
        imgSrc: "./images/star-cookie.webp",
        title: "Star-shaped Cookie",
        price: 12.99,
        productId: "#05",
    },

    {
        imgSrc: "./images/santa-hat.jpg",
        title: "Santa's Hat",
        price: 39.99,
        productId: "#06",
    },

    {
        imgSrc: "./images/candy-cane.jpg",
        title: "Candy Cane",
        price: 8.99,
        productId: "#07",
    },

    {
        imgSrc: "./images/snowman.jpg",
        title: "Snowman Decoration",
        price: 39.99,
        productId: "#08",
    },

    {
        imgSrc: "./images/christmas-ball.jpg",
        title: "Christmas Ball",
        price: 4.99,
        productId: "#09",
    },

    {
        imgSrc: "./images/red-socks.jpg",
        title: "Christmas Red Socks",
        price: 29.99,
        productId: "#10",
    },

    {
        imgSrc: "./images/red-ribbon.jpg",
        title: "Red Ribbon",
        price: 3.99,
        productId: "#11",
    },

    {
        imgSrc: "./images/tree-cookie.jpg",
        title: "Christmas tree Cookie",
        price: 13.99,
        productId: "#12",
    },
]

let productHTML = ""

function displayingProductFirst() {
    productDetails.forEach((product) => {
        const productName = product.title.split(" ").join("").toLocaleLowerCase();
        productHTML += `
    <div class="product-item" data-product-id=${product.productId} data-name=${productName}>
        <figure class="img-container">
        <img
            src="${product.imgSrc}"
            alt="${product.title}"
            class="product-img"
        />
        </figure>
        <div class="product-details">
        <p class="product-name">${product.title}</p>
        <p class="product-price">$${product.price}</p>
        </div>
    </div>
    `
    });
}
displayingProductFirst();

productSearch.addEventListener("input", () => {
    const userInputVal = productSearch.value.toLowerCase();
    const allProductSection = document.querySelectorAll(".product-item");
    allProductSection.forEach((pro) => {
        let proName = pro.dataset.name;
        if (proName.includes(userInputVal)) {
            pro.style.display = "flex";
        } else {
            pro.style.display = "none";
        }

        let visibleEle = [];
        allProductSection.forEach(ele => {
            if (window.getComputedStyle(ele).display !== "none") {
                visibleEle.push(ele);
            }
        });
        productCount.textContent = `(${visibleEle.length})`;
    });
});


function renderProduct() {
    productContainer.innerHTML = productHTML;
    const lengthOfProduct = productContainer.childElementCount;
    productCount.textContent = `(${lengthOfProduct})`;
}
renderProduct();