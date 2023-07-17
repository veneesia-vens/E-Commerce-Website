const data = [
  {
    id: 1,
    name: "Oppo Pad Air",
    img: "shop-images/oppo-pad-air-tablet.jpg",
    amt: 15499,
    category: "Tablets",
  },
  {
    id: 2,
    name: "Lenovo Tab P11 Plus Tablet",
    img: "shop-images/Lenovo Tab P11 Plus Tablet.jpg",
    amt: 26038,
    category: "Tablets",
  },
  {
    id: 3,
    name: "Samsung Galaxy Tab S8",
    img: "shop-images/Samsung Galaxy Tab S8-Tablet.jpg",
    amt: 58999,
    category: "Tablets",
  },
  {
    id: 4,
    name: "IKALL N17 8",
    img: "shop-images/IKALL N17 8 tablet.jpg",
    amt: 7499,
    category: "Tablets",
  },
  {
    id: 5,
    name: "Samsung Galaxy Tab A8",
    img: "shop-images/Samsung Galaxy Tab A8-tablet.jpg",
    amt: 12999,
    category: "Tablets",
  },
  {
    id: 6,
    name: "Lenovo Ideapad 3",
    img: "shop-images/Lenovo Ideapad 3-laptop.jpg",
    amt: 43500,
    category: "Laptops",
  },

  {
    id: 7,
    name: "ASUS Vivobook 14",
    img: "shop-images/ASUS Vivobook 14-laptop.jpg",
    amt: 34990,
    category: "Laptops",
  },
  {
    id: 8,
    name: "HP Laptop 15s",
    img: "shop-images/HP Laptop 15s-laptop.jpg",
    amt: 30490,
    category: "Laptops",
  },
  {
    id: 9,
    name: "Honor MagicBook 14",
    img: "shop-images/Honor MagicBook 14-laptop.jpg",
    amt: 41990,
    category: "Laptops",
  },
  {
    id: 10,
    name: "Acer Extensa 15",
    img: "shop-images/Acer Extensa 15-laptop.jpg",
    amt: 36990,
    category: "Laptops",
  },
  {
    id: 11,
    name: "AmazonBasics Ear bud",
    img: "shop-images/AmazonBasics True Wireless in-Earbud.jpg",
    amt: 999,
    category: "Ear buds",
  },
  {
    id: 12,
    name: "TOZO T6 Earbuds",
    img: "shop-images/TOZO T6 True Wireless Earbuds.jpg",
    amt: 2699,
    category: "Ear buds",
  },
  {
    id: 13,
    name: "Oraimo FreePods 3",
    img: "shop-images/Oraimo FreePods 3 -Earbud.jpg",
    amt: 1399,
    category: "Ear buds",
  },
  {
    id: 14,
    name: "Redmi Buds 4",
    img: "shop-images/Redmi Buds 4 -earbud.jpg",
    amt: 1399,
    category: "Ear buds",
  },
  {
    id: 15,
    name: "boAt Immortal 121",
    img: "shop-images/boAt Immortal 121-earbud.jpg",
    amt: 1499,
    category: "Ear buds",
  },
  {
    id: 16,
    name: "LG (55 inches) 4K",
    img: "shop-images/LG 139 cm (55 inches) 4K-tv.jpg",
    amt: 45990,
    category: "Televisions",
  },
  {
    id: 17,
    name: "iFFALCON (58 inches) 4K",
    img: "shop-images/iFFALCON 147 cm (58 inches) 4K-tv.jpg",
    amt: 33999,
    category: "Televisions",
  },
  {
    id: 18,
    name: "Acer 127 cm (50 inches)",
    img: "shop-images/Acer 127 cm (50 inches)-tv.jpg",
    amt: 26999,
    category: "Televisions",
  },
  {
    id: 19,
    name: "OnePlus (50 inches)",
    img: "shop-images/OnePlus 126 cm (50 inches)-tv.jpg",
    amt: 31999,
    category: "Televisions",
  },
  {
    id: 20,
    name: "Sony Bravia (43 inches)",
    img: "shop-images/Sony Bravia 108 cm (43 inches)-tv.jpg",
    amt: 42990,
    category: "Televisions",
  },
  {
    id: 21,
    name: "AUSHA 4K Camera",
    img: "shop-images/AUSHA® 4K Action Camera.jpg",
    amt: 2199,
    category: "Cameras",
  },
  {
    id: 22,
    name: "BLACKPOOL 4K",
    img: "shop-images/BLACKPOOL® 4K-camera.jpg",
    amt: 2199,
    category: "Cameras",
  },
  {
    id: 23,
    name: "Panasonic HC-V385GW-K 50",
    img: "shop-images/Panasonic HC-V385GW-K 50-camera.jpg",
    amt: 25550,
    category: "Cameras",
  },
  {
    id: 24,
    name: "Sony HDRCX405 9.2MP HD",
    img: "shop-images/Sony HDRCX405 9.2MP HD -camera.jpg",
    amt: 16900,
    category: "Cameras",
  },
  {
    id: 25,
    name: "GoPro HERO11",
    img: "shop-images/GoPro HERO11-camera.jpg",
    amt: 42003,
    category: "Cameras",
  },
  {
    id: 26,
    name: "Samsung Galaxy S23 Ultra",
    img: "shop-images/Samsung Galaxy S23 ultra 5G-phone.jpg",
    amt: 154998,
    category: "Phones",
  },
  {
    id: 27,
    name: "Samsung Galaxy Z Flip3 5G",
    img: "shop-images/Samsung Galaxy Z Flip3 5G-phone.jpg",
    amt: 47990,
    category: "Phones",
  },
  {
    id: 28,
    name: "Xiaomi 13 Pro",
    img: "shop-images/Xiaomi 13 Pro-phone.jpg",
    amt: 79999,
    category: "Phones",
  },
  {
    id: 29,
    name: "realme Narzo 50 Pro 5G",
    img: "shop-images/realme Narzo 50 Pro 5G-phone.jpg",
    amt: 21999,
    category: "Phones",
  },
  {
    id: 30,
    name: "Tecno Phantom V Fold 5G ",
    img: "shop-images/Tecno Phantom V Fold 5G-phone.jpg",
    amt: 88888,
    category: "Phones",
  },
  {
    id: 31,
    name: "Infinity JBL Fuze Pint",
    img: "shop-images/Infinity JBL Fuze Pint-speaker.jpg",
    amt: 999,
    category: "Speakers",
  },
  {
    id: 32,
    name: "Portronics SoundDrum P",
    img: "shop-images/Portronics SoundDrum P-speaker.jpg",
    amt: 2199,
    category: "Speakers",
  },
  {
    id: 33,
    name: "boAt Stone 180 5W",
    img: "shop-images/boAt Stone 180 5W-speaker.jpg",
    amt: 990,
    category: "Speakers",
  },
  {
    id: 34,
    name: "Zebronics ZEB-COUNTY 3W",
    img: "shop-images/Zebronics ZEB-COUNTY 3W-speakers.jpg",
    amt: 549,
    category: "Speakers",
  },
  {
    id: 35,
    name: "PTron Musicbot",
    img: "shop-images/PTron Musicbot-speaker.jpg",
    amt: 549,
    category: "Speakers",
  },
];

const productsContainer = document.querySelector(".products");
const categoryList = document.querySelector(".category-list");

function displayProducts(products){
  if(products.length > 0){
    const product_details =products
    .map(
      (product) => `
        <div class="product">
            <div class="img">
              <img src="${product.img}" alt="${product.name}" class="pr-img">
            </div>
            <div class="product-details">
            <span class="name">${product.name}</span>
            <span class="amt">Rs.${product.amt}</span>
            <button class="add-cart">Add to Cart</button>
          </div>
        </div>`
      )
      .join("");
      productsContainer.innerHTML = product_details;
    }
    else{
      productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
  }

function setCategories(){
  const allCategories = data.map((product) => product.category);
  const categories = [
    "All",
    ...allCategories.filter((product, index) => {
        return allCategories.indexOf(product) === index;
    }),
  ];
  categoryList.innerHTML = categories.map((category) => `<li>${category}</li>`).join("");
  categoryList.addEventListener("click", (e) => {
    const selectedCategory = e.target.textContent;
    selectedCategory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.category == selectedCategory));
  });
}


const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector(".priceValue");

function setPrices(){
  const priceList = data.map((product) => product.amt);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceValue.textContent = "RS." + maxPrice;

  priceRange.addEventListener("input",(e) => {
      priceValue.textContent = "RS." + e.target.value;
      displayProducts(data.filter((product) => product.amt <= e.target.value));
  });
}

const txtSearch = document.querySelector("#txtSearch");
txtSearch.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase().trim();
  if (value) {
    displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
  } else {
    displayProducts(data);
  }
});

displayProducts(data);
setCategories();
setPrices();



//  Add to cart

const btnCart = document.querySelector('.btn-cart');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');
const order = document.querySelector('.btn-buy');
console.log(order)

order.addEventListener('click',()=>{
  confirm('YOUR ORDER IS PLACED');
});

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadProduct);

function loadProduct(){
    loadContent();
}

function loadContent(){
    let btnRemove = document.querySelectorAll('.cart-remove');
    console.log(btnRemove);
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });

    let cartBtns = document.querySelectorAll('.add-cart');
    cartBtns.forEach((btn)=>{
        btn.addEventListener('click',addCart);
    });
    updateTotal();
}

function removeItem(){
    if(confirm('Are you sure to remove')){
        let title = this.parentElement.querySelector('.name').innerHTML;
        itemList = itemList.filter(el => el.title != title);
        this.parentElement.remove();
        loadContent();
    }
}

function changeQty(){
    if(isNaN(this.value) || this.value < 1 ){
        this.value = 1;
    }
    loadContent();
}

let itemList = [];

function addCart(){
    let shop = this.parentElement;
    let title = shop.querySelector('.name').innerHTML;
    let price = shop.querySelector('.amt').innerHTML;
    let imgSrc = shop.parentElement.querySelector('.pr-img').src;
    console.log(imgSrc)

    let newProduct = {title,price,imgSrc}


    if(itemList.find((el) => el.title == newProduct.title)){
        alert("Product Already added in cart");
        return;
    }
    else{
        itemList.push(newProduct);
    }
    let newProductElement = createCartProduct(title,price,imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    let cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
}

function createCartProduct(title,price,imgSrc){
    return`
        <div class="cart-box">
            <img src="${imgSrc}" class="cart-img">
            <div class="detail-box">
                <div class="name">${title}</div>
                <div class="price-box">
                    <div class="cart-price">${price}</div>
                    <div class="cart-amt">${price}</div>
                </div>
                    <input type="number" value="1" class="cart-quantity">
            </div>
            <i class="fa fa-trash cart-remove"></i>
        </div>
        `;
}

function updateTotal(){
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');

    let total = 0;
    cartItems.forEach(product=>{
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("Rs.",""));
        let qty = product.querySelector('.cart-quantity').value;
        total += (price * qty);
        product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);
    });
    totalValue.innerHTML = 'Rs.' + total;

    const cartCount = document.querySelector('.cart-count');
    let count = itemList.length;
    cartCount.innerHTML = count;

    if(count == 0){
        cartCount.style.display = 'none';
    }
    else{
        cartCount.style.display = 'block';
    }
}

