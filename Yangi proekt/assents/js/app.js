class header {
    constructor(soz1, soz2, soz3, soz4,
        logo, soncha, menu, menu1, menu2, about, pages,
        pages1, pages2, pages3, pages4, pages5, pages6,
        pages7, pages8, shop, shop1, shop2, shop3, shop4,
        shop5, shop6, shop7, shop8, blog, blog1, blog2,
        blog3, blog4, blog5, blog6, blog7, blog8, contact,
        img, img2, img3, h1, p, button,
        parentSelector) {
        this.soz1 = soz1
        this.soz2 = soz2
        this.soz3 = soz3
        this.soz4 = soz4
        this.logo = logo
        this.soncha = soncha
        this.menu = menu
        this.menu1 = menu1
        this.menu2 = menu2
        this.about = about
        this.pages = pages
        this.pages1 = pages1
        this.pages2 = pages2
        this.pages3 = pages3
        this.pages4 = pages4
        this.pages5 = pages5
        this.pages6 = pages6         
        this.pages7 = pages7
        this.pages8 = pages8
        this.shop = shop
        this.shop1 = shop1
        this.shop2 = shop2
        this.shop3 = shop3
        this.shop4 = shop4
        this.shop5 = shop5
        this.shop6 = shop6
        this.shop7 = shop7
        this.shop8 = shop8
        this.blog = blog
        this.blog1 = blog1
        this.blog2 = blog2
        this.blog3 = blog3
        this.blog4 = blog4
        this.blog5 = blog5
        this.blog6 = blog6
        this.blog7 = blog7
        this.blog8 = blog8
        this.img = img
        this.img2 = img2
        this.img3 = img3
        this.h1 = h1
        this.p = p
        this.button = button
        this.contact = contact


        this.parent = document.querySelector(parentSelector)
    }



    render() {
        const element = document.createElement("div")
        element.innerHTML = `
            <div class="tepa">
            <span class="chapda">${this.soz1}</span>
            <div class="ongtaraf">
                <div class="sozlar">
                    <i class="fa-solid fa-phone"></i>
                    <span>${this.soz2}</span>
                </div>

                <span class="chiziq"></span>
                <div class="sozlar">
                    <i class="fa-solid fa-envelope"></i>
                    <span>${this.soz3}</span>
                </div>

                <span class="chiziq"></span>
                <div class="sozlar">
                    <i class="fa-solid fa-user"></i>
                    <span>${this.soz4}</span>
                </div>
            </div>
        </div>
        <div>
            <i class="fa-light fa-heart" id="lo1"></i>
        </div>
       <div class="x">
        <div class="fix">
        <img src="${this.logo}" alt="" class="logo">
        <input type="search" placeholder="Search Everything" class="searchs">
        <i class="fa-solid fa-magnifying-glass" id="logos"></i>
        <i class="fa-regular fa-heart" id="l"></i>
        <i class="fa-solid fa-bag-shopping" id="l1"></i>
        <span class="soncha">${this.soncha}</span>
        </div>

                <nav class="navbar">
            <ul class="menu">

                <li class="chiqadigan">
                    <a href="#">${this.menu} </a>
                    <ul class="chiqadigan-menu">
                        <li><a href="#">${this.menu1}</a></li>
                        <li><a href="#">${this.menu2}</a></li>
                    </ul>
                </li>
                <li class="chiqadigan">
                    <a href="#">${this.about}</a>
                </li>
                <li class="chiqadigan">
                    <a href="#">${this.pages}</a>
                    <ul class="chiqadigan-menu">
                        <li><a href="#">${this.pages}</a></li>
                        <li><a href="#">${this.pages1}</a></li>
                        <li><a href="#">${this.pages2}</a></li>
                        <li><a href="#">${this.pages3}</a></li>
                        <li><a href="#">${this.pages4}</a></li>
                        <li><a href="#">${this.pages6}</a></li>
                        <li><a href="#">${this.pages7}</a></li>
                        <li><a href="#">${this.pages8}</a></li>
                    </ul>
                </li>

                    <li class="chiqadigan">
                    <a href="#">${this.shop}</a>
                    <ul class="chiqadigan-menu">
                        <li><a href="#">${this.shop1}</a></li>
                        <li><a href="#">${this.shop2}</a></li>
                        <li><a href="#">${this.shop3}</a></li>
                        <li><a href="#">${this.shop4}</a></li>
                        <li><a href="#">${this.shop5}</a></li>
                        <li><a href="#">${this.shop6}</a></li>
                        <li><a href="#">${this.shop7}</a></li>
                        <li><a href="#">${this.shop8}</a></li>

                    </ul>
                </li>

                <li class="chiqadigan">
                    <a href="#">${this.blog}</a>
                    <ul class="chiqadigan-menu">
                        <li><a href="#">${this.blog1}</a></li>
                        <li><a href="#">${this.blog2}</a></li>
                        <li><a href="#">${this.blog3}</a></li>
                        <li><a href="#">${this.blog4}</a></li>
                        <li><a href="#">${this.blog5}</a></li>
                        <li><a href="#">${this.blog6}</a></li>
                        <li><a href="#">${this.blog7}</a></li>
                        <li><a href="#">${this.blog8}</a></li>
                    </ul>
                </li>

                <li class="chiqadigan">
                    <a href="#">${this.contact}</a>
                </li>

            </ul>

        </nav>
       </div>
    <section class="g">
        <img src="${this.img}" alt="" width="100%" height="60px" class="img">

        <section class="katta">
            <img src="${this.img2}" alt="" width="150" height="150px" class="img3">
            <img src="${this.img3}" alt="" width="600px" height="600px" class="img2">
            <div class="katta-rasm">
                <h1>${this.h1}</h1>
                <p>${this.p}</p>
                <button>${this.button}</button>
            </div>
        </section>
    </section>
      `

        this.parent.append(element)
    }
}

const offers = [
    {
        soz1: "Free Returns and Free Shipping",
        soz2: "+00 123 456 789",
        soz3: "demo@example.com",
        soz4: "Account",
        logo: "./img/logo.png",
        soncha: "01",
        menu: "HOME",
        menu1: "Home One",
        menu2: "Home Two",
        about: "ABOUT",
        pages: "PAGES",
        pages1: "Cart page",
        pages2: "Checkout",
        pages3: "My Account",
        pages4: "Wishlist",
        pages5: "Compare",
        pages6: "Login / Register",
        pages7: "Coming soon",
        pages8: "404",
        shop: "SHOP",
        shop1: "Shop 3 Column",
        shop2: "Shop 4 Column",
        shop3: "Shop Left Sidebar",
        shop4: "Shop Right Sidebar",
        shop5: "Shop Right Sidebar",
        shop6: "Product Details",
        shop7: "Product Variable",
        shop8: "Product Grouped",

        blog: "BLOG",
        blog1: "Blog 3 Column ",
        blog2: "Blog 4 Column ",
        blog3: "Blog Left Sidebar ",
        blog4: "Blog Right Sidebar ",
        blog5: "Blog No Sidebar ",
        blog6: "Blog Details Left Sidebar ",
        blog7: "Blog Details Right Sidebar ",
        blog8: "Blog Details No Sidebar ",
        contact: "CONTACT",
        img: "./img/23.png",
        img2: "./img/3.png",
        img3: "./img/2.png",
        h1: "Best Kids Store <br> & Online Shop",
        p: "Give The Gift Of Your Children Everyday",
        button: "Shop This Now"


    }
]
offers.forEach(offer => {
    const { soz1, soz2, soz3, soz4, logo,
        soncha, menu, menu1, menu2, about, pages,
        pages1, pages2, pages3, pages4, pages5,
        pages6, pages7, pages8, shop, shop1, shop2,
        shop3, shop4, shop5, shop6, shop7, shop8,
        blog, blog1, blog2, blog3, blog4, blog5,
        blog6, blog7, blog8, contact, img, img2, img3,
        h1, p, button,
    } = offer

    new header(soz1, soz2, soz3, soz4,
        logo, soncha, menu, menu1, menu2,
        about, pages, pages1, pages2, pages3,
        pages4, pages5, pages6, pages7, pages8,
        shop, shop1, shop2, shop3, shop4,
        shop5, shop6, shop7, shop8,
        blog, blog1, blog2, blog3, blog4, blog5,
        blog6, blog7, blog8, contact, img, img2, img3,
        h1, p, button,
        "#app").render()
})



// main
class OfferMenu {
    constructor(src, title, descr, discount, parentSelector) {
        this.src = src
        this.title = title
        this.descr = descr
        this.discount = discount
        this.parent = document.querySelector(parentSelector)
    }

    render() {
        const element = document.createElement("div")
        element.innerHTML = `
<div class="d">
        <img src="${this.src}" alt="">
        <div>
          <h3>${this.title}</h3>
          <h2>${this.descr}</h2>
          <h5>${this.discount}</h5>

        </div>
</div>
      `

        this.parent.append(element)
    }
}

const offersx = [
    {
        src: "https://template.hasthemes.com/kidol/kidol/assets/img/category/1.png",
        title: "Baby Dress",
        descr: "$32.00",
        discount: "Shop Now",
    },
    {
        src: "https://template.hasthemes.com/kidol/kidol/assets/img/category/2.png",
        title: "Baby Toys",
        descr: "$25.00",
        discount: "Shop Now",
    },
    {
        src: "https://template.hasthemes.com/kidol/kidol/assets/img/category/3.png",
        title: "Baby Toys",
        descr: "$18.00",
        discount: "Shop Now",
    }
]

offersx.forEach(offer => {
    const { src, descr, discount, title } = offer
    new OfferMenu(src, title, descr, discount, ".app1").render()
})



class Main {
    constructor(shapeTop, imgLeft, imgRight, title, sale, text, shapeBottom, collect, pni, oxir, pni1, spanni, gd33, parentSelector) {

        this.shapeTop = shapeTop
        this.imgLeft = imgLeft
        this.imgRight = imgRight
        this.title = title
        this.sale = sale
        this.text = text
        this.shapeBottom = shapeBottom
        this.collect = collect
        this.pni = pni
        this.oxir = oxir
        this.pni1 = pni1
        this.spanni = spanni
        this.gd33 = gd33
        this.parent = document.querySelector(parentSelector)
    }

    render() {

        const element = document.createElement("div")

        element.innerHTML = `
            <img src="${this.shapeTop}" class="shape-top">

            <img src="${this.imgLeft}" class="img-left">

            <img src="${this.imgRight}" class="img-right">

            <h1 class="deal-title">${this.title}</h1>

            <p class="deal-text">
                <span class="pink-text">${this.sale}</span>
                <span class="black-text">${this.text}</span>
            </p>

            <button class="gd3">Shop Now</button>

            <img src="${this.shapeBottom}" class="shape-img">

<div class="ff">
    <div class="d3">
        <h2 class="collec">${this.collect}</h2>
        <h4 class="pni">${this.pni} <span class="spanni">${this.spanni}</span> Off</h2>
            <button class="gd33">${this.gd33}</button>
    </div>
    <div class="d4">
        <h2 class="oxir">${this.oxir}</h2>
        <h4 class="pni1">Flat <span class="spanni1">30%</span> Off</h2>
            <button class="gd34">${this.gd33}</button>
    </div>
</div>
        `

        this.parent.append(element)
    }
}

const img = [
    {
        shapeTop: "./img/shape1.webp",
        imgLeft: "./img/1.webp",
        imgRight: "./img/2 (1).webp",
        title: "Deal Of The Day",
        sale: "UPTO 35% OFF",
        text: "On All Other Baby Products",
        shapeBottom: "./img/shape2.webp",
        collect: "Collection ",
        pni: "Flat",
        oxir: "Collection",
        pni1: "Flat",
        gd33: "Shop Now",
        spanni: "20%"
    }
]
img.forEach(offerv => {
    const { shapeTop, imgLeft, imgRight, title, sale, text, shapeBottom, collect, pni, oxir, pni1, spanni, gd33, } = offerv

    new Main(shapeTop, imgLeft, imgRight, title, sale, text, shapeBottom, collect, pni, oxir, pni1, spanni, gd33, ".app2").render()
})

const Narsalar = {
    title: "New Products",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br> incididunt ut labore et dolore magna aliqua",
    buttons: ["All", "Dress", "Toys"],

    items: {
        All: {
            item1: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/1.png", name: "Funskool Teddy", price: "190.12", rating: "⭐⭐⭐⭐" },
            item2: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/2.png", name: "Baby Play Sets", price: "210.00", rating: "⭐⭐⭐⭐" },
            item3: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/3.png", name: "Jigsaw Puzzle", price: "180.50", rating: "⭐⭐⭐⭐" },
            item4: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/4.png", name: "Girl Dress", price: "199.99", rating: "⭐⭐⭐⭐" },
            item5: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/5.png", name: "Soft Bunny", price: "160.00", rating: "⭐⭐⭐⭐" },
            item6: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/6.png", name: "Kids Car Toy", price: "220.00", rating: "⭐⭐⭐⭐" },
            item7: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/7.png", name: "Baby Shoes", price: "145.90", rating: "⭐⭐⭐⭐" },
            item8: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/8.png", name: "Colorful Blocks", price: "175.00", rating: "⭐⭐⭐⭐" }
        },
        Dress: {
            item1: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/5.png", name: "Girl Dress", price: "199.99", rating: "⭐⭐⭐⭐" },
            item2: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/6.png", name: "Soft Bunny", price: "160.00", rating: "⭐⭐⭐⭐" },
            item3: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/7.png", name: "Baby Shoes", price: "145.90", rating: "⭐⭐⭐⭐" },
            item4: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/8.png", name: "Colorful Blocks", price: "175.00", rating: "⭐⭐⭐⭐" },
            item5: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/1.png", name: "Girl Dress", price: "199.99", rating: "⭐⭐⭐⭐" },
            item6: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/2.png", name: "Soft Bunny", price: "160.00", rating: "⭐⭐⭐⭐" },
            item7: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/3.png", name: "Baby Shoes", price: "145.90", rating: "⭐⭐⭐⭐" },
            item8: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/4.png", name: "Colorful Blocks", price: "175.00", rating: "⭐⭐⭐⭐" }
        },
        Toys: {
            item1: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/1.png", name: "Kids Car Toy", price: "220.00", rating: "⭐⭐⭐⭐" },
            item2: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/2.png", name: "Soft Bunny", price: "160.00", rating: "⭐⭐⭐⭐" },
            item3: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/3.png", name: "Jigsaw Puzzle", price: "180.50", rating: "⭐⭐⭐⭐" },
            item4: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/4.png", name: "Funskool Teddy", price: "190.12", rating: "⭐⭐⭐⭐" },
            item5: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/5.png", name: "Baby Play Sets", price: "210.00", rating: "⭐⭐⭐⭐" },
            item6: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/6.png", name: "Kids Car Toy", price: "220.00", rating: "⭐⭐⭐⭐" },
            item7: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/7.png", name: "Soft Bunny", price: "160.00", rating: "⭐⭐⭐⭐" },
            item8: { img: "https://template.hasthemes.com/kidol/kidol/assets/img/shop/8.png", name: "Jigsaw Puzzle", price: "180.50", rating: "⭐⭐⭐⭐" }
        }
    }
}


class Narsalarning {
    constructor(data, parentSelector) {
        this.title = data.title
        this.subtitle = data.subtitle
        this.buttons = data.buttons
        this.items = data.items
        this.parent = document.querySelector(parentSelector)
    }

    Cards(type) {
        return `
        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item1.img}" alt="${this.items[type].item1.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item1.name}</h4>
            <span class="price">$${this.items[type].item1.price}</span>
            <div class="rating">${this.items[type].item1.rating}</div>
        </div>

        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item2.img}" alt="${this.items[type].item2.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item2.name}</h4>
            <span class="price">$${this.items[type].item2.price}</span>
            <div class="rating">${this.items[type].item2.rating}</div>
        </div>

        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item3.img}" alt="${this.items[type].item3.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item3.name}</h4>
            <span class="price">$${this.items[type].item3.price}</span>
            <div class="rating">${this.items[type].item3.rating}</div>
        </div>

        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item4.img}" alt="${this.items[type].item4.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item4.name}</h4>
            <span class="price">$${this.items[type].item4.price}</span>
            <div class="rating">${this.items[type].item4.rating}</div>
        </div>

        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item5.img}" alt="${this.items[type].item5.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item5.name}</h4>
            <span class="price">$${this.items[type].item5.price}</span>
            <div class="rating">${this.items[type].item5.rating}</div>
        </div>

        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item6.img}" alt="${this.items[type].item6.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item6.name}</h4>
            <span class="price">$${this.items[type].item6.price}</span>
            <div class="rating">${this.items[type].item6.rating}</div>
        </div>

        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item7.img}" alt="${this.items[type].item7.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item7.name}</h4>
            <span class="price">$${this.items[type].item7.price}</span>
            <div class="rating">${this.items[type].item7.rating}</div>
        </div>

        <div class="card">
            <div class="img-box">
                <img src="${this.items[type].item8.img}" alt="${this.items[type].item8.name}">
                <div class="icons">
                    <span class="shop-cart"><i class="fas fa-cart-shopping"></i></span>
                    <span class="void"><i class="fa-solid fa-expand"></i></span>
                    <span class="heart"><i class="fas fa-heart"></i></span>
                    <span class="shuffle"><i class="fas fa-shuffle"></i></span>
                </div>
            </div>
            <h4>${this.items[type].item8.name}</h4>
            <span class="price">$${this.items[type].item8.price}</span>
            <div class="rating">${this.items[type].item8.rating}</div>
        </div>
        `
    }

    render() {
        this.parent.innerHTML = `
            <section class="products">
                <h2>${this.title}</h2>
                <p>${this.subtitle}</p>
                <div class="tabs">
                    <button data-type="All">All</button>
                    <button data-type="Dress">Dress</button>
                    <button data-type="Toys">Toys</button>
                </div>
                <div class="product-list">
                    ${this.Cards("All")}
                </div>
            </section>
        `

        const listDiv = this.parent.querySelector(".product-list")
        const btnAll = this.parent.querySelector('button[data-type="All"]')
        const btnDress = this.parent.querySelector('button[data-type="Dress"]')
        const btnToys = this.parent.querySelector('button[data-type="Toys"]')

        btnAll.addEventListener("click", () => listDiv.innerHTML = this.Cards("All"))
        btnDress.addEventListener("click", () => listDiv.innerHTML = this.Cards("Dress"))
        btnToys.addEventListener("click", () => listDiv.innerHTML = this.Cards("Toys"))
    }
}

new Narsalarning(Narsalar, "#mahsulot").render()
function Carousel(carusels) {
    const carousel = carusels.querySelector(".carousel");
    const prevBtn = carusels.querySelector(".prev");
    const nextBtn = carusels.querySelector(".next");

    const items = carousel.querySelectorAll(".item");

    let index = 0;
    const itemWidth = 200; 

    const maxIndex = items.length - 1;

    nextBtn.addEventListener("click", () => {
        if (index < maxIndex) {
            index++;
            carousel.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            carousel.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });
}

class fo {
    constructor(
        trending, vapni,
        img, nomi, narxi,
        img1, nomi1, narxi1,
        img2, nomi2, narxi2,
        img3, nomi3, narxi3,
        parentSelector
    ) {

        this.trending = trending
        this.vapni = vapni

        this.img = img
        this.nomi = nomi
        this.narxi = narxi

        this.img1 = img1
        this.nomi1 = nomi1
        this.narxi1 = narxi1

        this.img2 = img2
        this.nomi2 = nomi2
        this.narxi2 = narxi2

        this.img3 = img3
        this.nomi3 = nomi3
        this.narxi3 = narxi3

        this.parent = document.querySelector(parentSelector)
    }

    render() {

        const element = document.createElement("div")

        element.innerHTML = `
        <div class="title">
            <h2>${this.trending}</h2>
            <p>${this.vapni}</p>
        </div>

        <div class="carousel-wrapper">
            <button class="btn prev">&#10094;</button>

            <div class="carousel">

                <div class="item">
                    <div class="img-box"><img src="${this.img}"></div>
                    <div class="stars">★★★★★</div>
                    <h4>${this.nomi}</h4>
                    <p class="price">${this.narxi}</p>
                </div>

                <div class="item">
                    <div class="img-box"><img src="${this.img1}"></div>
                    <div class="stars">★★★★★</div>
                    <h4>${this.nomi1}</h4>
                    <p class="price">${this.narxi1}</p>
                </div>

                <div class="item">
                    <div class="img-box"><img src="${this.img2}"></div>
                    <div class="stars">★★★★★</div>
                    <h4>${this.nomi2}</h4>
                    <p class="price">${this.narxi2}</p>
                </div>

                <div class="item">
                    <div class="img-box"><img src="${this.img3}"></div>
                    <div class="stars">★★★★★</div>
                    <h4>${this.nomi3}</h4>
                    <p class="price">${this.narxi3}</p>
                </div>
                <div class="item">
                    <div class="img-box"><img src="${this.img}"></div>
                    <div class="stars">★★★★★</div>
                    <h4>${this.nomi}</h4>
                    <p class="price">${this.narxi}</p>
                </div>
                <div class="item">
                    <div class="img-box"><img src="${this.img1}"></div>
                    <div class="stars">★★★★★</div>
                    <h4>${this.nomi1}</h4>
                    <p class="price">${this.narxi1}</p>
                </div>
                <div class="item">
                    <div class="img-box"><img src="${this.img2}"></div>
                    <div class="stars">★★★★★</div>
                    <h4>${this.nomi2}</h4>
                    <p class="price">${this.narxi2}</p>
                </div>  
            </div>

            <button class="btn next">&#10095;</button>
        </div>
        `

        this.parent.append(element)

        const carusels = element.querySelector(".carousel-wrapper")

        Carousel(carusels)
    }
}
const offerse = [
    {
        trending: "Trending Product",
        vapni: "Lorem ipsum dolor sit amet...",

        img: "./img/9.webp",
        nomi: "Funskool Teddy Brown",
        narxi: "$190.12",

        img1: "./img/10.webp",
        nomi1: "Newborn Kit Set",
        narxi1: "$190.12",

        img2: "./img/11.webp",
        nomi2: "Classic Fisher Gift",
        narxi2: "$190.12",

        img3: "./img/12.webp",
        nomi3: "Sassy Crib Mirror",
        narxi3: "$190.12"
    }
]

offerse.forEach(offer => {

    const {
        trending, vapni,
        img, nomi, narxi,
        img1, nomi1, narxi1,
        img2, nomi2, narxi2,
        img3, nomi3, narxi3
    } = offer

    new fo(
        trending, vapni,
        img, nomi, narxi,
        img1, nomi1, narxi1,
        img2, nomi2, narxi2,
        img3, nomi3, narxi3,
        ".footeras"
    ).render()

})



class LatestBlog {
    constructor(title, text, blog1, blog2, blog3, parentSelector) {
        this.title = title;
        this.text = text;
        this.blog1 = blog1;
        this.blog2 = blog2;
        this.blog3 = blog3;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement("div");
        element.classList.add("latest-blog");

        element.innerHTML = `
            <h1>${this.title}</h1>
            <p>${this.text}</p>
            <div class="blog-cards"></div>
        `;

        const cardsContainer = element.querySelector(".blog-cards");

        const card1 = document.createElement("div");
        card1.classList.add("blog-card");
        card1.innerHTML = `
            <img src="${this.blog1.img}" alt="${this.blog1.blogTitle}">
            <div class="content">
                <p>By, <span style="color:#e91e63;">${this.blog1.author}</span> .25 May, 2121</p>
                <h2>${this.blog1.blogTitle}</h2>
                <button>${this.blog1.btn}</button>
            </div>
        `;
        cardsContainer.append(card1);

        const card2 = document.createElement("div");
        card2.classList.add("blog-card");
        card2.innerHTML = `
            <img src="${this.blog2.img}" alt="${this.blog2.blogTitle}">
            <div class="content">
                <p>By, <span style="color:#e91e63;">${this.blog2.author}</span> .July 24, 2022</p>
                <h2>${this.blog2.blogTitle}</h2>
                <button>${this.blog2.btn}</button>
            </div>
        `;
        cardsContainer.append(card2);

        const card3 = document.createElement("div");
        card3.classList.add("blog-card");
        card3.innerHTML = `
            <img src="${this.blog3.img}" alt="${this.blog3.blogTitle}">
            <div class="content">
                <p>By, <span style="color:#e91e63;">${this.blog3.author}</span> .January 28, 2022</p>
                <h2>${this.blog3.blogTitle}</h2>
                <button>${this.blog3.btn}</button>
            </div>
        `;
        cardsContainer.append(card3);

        this.parent.append(element);
    }
}

const blog1 = {
    img: "./img/1 (1).webp",
    author: "June Cha",
    blogTitle: "Baby Planet's toys makes learning so easy",
    btn: "Read More"
};

const blog2 = {
    img: "./img/2 (2).webp",
    author: "June Cha",
    blogTitle: "Mother revolves around her children",
    btn: "Read More"
};

const blog3 = {
    img: "./img/3 (1).webp",
    author: "June Cha",
    blogTitle: "Learn while you grow toys Baby Planet",
    btn: "Read More"
};

const latestBlog = new LatestBlog(
    "Latest Blog",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br><br> incididunt ut labore et dolore magna aliqua.",
    blog1,
    blog2,
    blog3,
    ".footerss"
);

latestBlog.render();



class Footer {
    constructor(
        footerLogo, footerAbout,
        footerQuickTitle, footerQuickLinks,
        footerOtherTitle, footerOtherLinks,
        footerCompanyTitle, footerCompanyLinks,
        footerStoreTitle, footerAddress, footerPhone, footerEmail,
        footerPayment, footerCopy,
        parentSelector) {
        this.logo = footerLogo;
        this.about = footerAbout;
        this.quickTitle = footerQuickTitle;
        this.quickLinks = footerQuickLinks;
        this.otherTitle = footerOtherTitle;
        this.otherLinks = footerOtherLinks;
        this.companyTitle = footerCompanyTitle;
        this.companyLinks = footerCompanyLinks;
        this.storeTitle = footerStoreTitle;
        this.address = footerAddress;
        this.phone = footerPhone;
        this.email = footerEmail;
        this.payment = footerPayment;
        this.copy = footerCopy;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement("div");

        element.innerHTML = `
<footer class="footer">
  <div class="footer-container">

    <div class="footer-box">
      <h2 class="fs"><img src="${this.logo}"></h2>
      <p class="pa">${this.about}</p>
    </div>

    <div class="footer-box">
      <h3>${this.quickTitle}</h3>
      <ul>
        ${this.quickLinks.map(link => `<li><a href="#">${link}</a></li>`).join("")}
      </ul>
    </div>

    <div class="footer-box">
      <h3>${this.otherTitle}</h3>
      <ul>
        ${this.otherLinks.map(link => `<li><a href="#">${link}</a></li>`).join("")}
      </ul>
    </div>

    <div class="footer-box">
      <h3>${this.companyTitle}</h3>
      <ul>
        ${this.companyLinks.map(link => `<li><a href="#">${link}</a></li>`).join("")}
      </ul>
    </div>

    <div class="footer-box">
      <h3>${this.storeTitle}</h3>
      <p>${this.address}</p>
      <p>${this.phone}</p>
      <p>${this.email}</p>
      <img src="${this.payment}" width="200" class="payment">
    </div>

  </div>

  <div class="footer-bottom">
    ${this.copy}
  </div>

</footer>
        `;

        this.parent.append(element);
    }
}

const footer = new Footer(
    "img/logo-light.webp",
    "Lorem ipsum dolor sit amet, consecl adipisicing elit, sed do eiusmod teml incididunt ut labore et dolore magna aliqua.",
    "Quick Links", ["-Support", "-Helpline", "-Courses", "-About", "-Event"],
    "Other Page", ["-About", "-Blog", "-Speakers", "-Contact", "-Ticket"],
    "Company", ["-Jesco", "-Shop", "-Contact us", "-Log in", "-Help"],
    "Store Information", "2005 Your Address Goes Here", "0123456789", "demo@example.com",
    "./img/payment1.webp",
    "© 2026 Kidol. Made with ❤️ by HasThemes",
    ".footers2"
);

footer.render();
alert("Done");
const x = document.querySelector(".x");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    x.classList.add("fixed");
  } else {
    x.classList.remove("fixed");
  }
});
