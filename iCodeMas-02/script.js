const menuImg = document.querySelectorAll(".menu-img");
const productDiv = document.querySelector(".product-details");

const productdetails = [
  {
    name: "Christmas Tree Decoration",
    price: "$19.99",
    productDesc: "Perfect for adding a festive touch to any space, this miniature tree bring magic of Christmas right into your home. Crafted with care, it's a delightful...",
    imgSrc: "./images/christmas-tree.webp",
    alt: "christmas-tree",
    star: "star-half",
    className: "tree",
  },
  {
    name: "Christmas Joy Gift Box",
    price: "$39.99",
    productDesc: "Unwrap the magic of Christmas with our festive gift box—filled with joy, treats, and holiday surprises. The perfect way to share the spirit of the season with loved ones.",
    imgSrc: "./images/gift.webp",
    alt: "gift-box",
    star: "star",
    className: "gift",
  },
  {
    name: "Christmas Gingerbread Man Cookies",
    price: "$10.99",
    productDesc: "Savor the season with our Christmas Gingerbread Man Cookies. Delightfully spiced, intricately decorated—these festive treats add charm to your celebrations. Sweeten your holidays with every bite.",
    imgSrc: "./images/gingerbread.webp",
    alt: "gingerbread-cookies",
    star: "star-half",
    className: "bread",
  },
];

let html = "<p>No product selected</p>";
productDiv.insertAdjacentHTML("beforeend", html);

menuImg.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    menuImg.forEach(e => e.classList.remove("active"));
    ele.classList.toggle("active");
    productDiv.innerHTML = "";
    html = `
        <figure class=${productdetails[i].className}>
        <img src=${productdetails[i].imgSrc} alt=${productdetails[i].alt} />
      </figure>
      <div class="product-detail">
        <h3 class="title">${productdetails[i].name}</h3>
        <h3 class="price">${productdetails[i].price}</h3>
        <div class="ratings">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name=${productdetails[i].star}></ion-icon>
        </div>
        <div class="product-desc">
          <p>${productdetails[i].productDesc}</p>
        </div>
        <button>
          <a href="#">Add to cart</a>
          <ion-icon name="cart-outline"></ion-icon>
        </button>
      </div>
        `
    productDiv.insertAdjacentHTML("beforeend", html);
  });
});