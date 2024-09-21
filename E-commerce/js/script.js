let productsnn = document.querySelector(".products");
let userrinf = document.querySelector("header .container .user-info");
let nav = document.querySelector("header .container .nav");
let userr = document.querySelector(".user");
let usernamee = localStorage.getItem("username");
let cartdomtext = document.querySelector(".cartdomtext");



userr.innerHTML = usernamee;


userrinf.style.display = "flex";
nav.style.display = "none";
let products = [
    {
        id: 1,
        img_url: "mobile.jpeg",
        title: "mobile",
        desc: "lorem ipsum hhh lorem ipsum nn",
        qty: 1

    },
    {
        id: 2,
        img_url: "laptop.jpeg",
        title: "laptop",
        desc: "lorem ipsum hhh lorem ipsum nn",
        qty: 1

    },
    {
        id: 3,
        img_url: "pc.jpeg",
        title: "pc",
        desc: "lorem ipsum hhh lorem ipsum nn",
        qty: 1

    },
    {
        id: 4,
        img_url: "watch.jpeg",
        title: "watch",
        desc: "lorem ipsum hhh lorem ipsum nn",
        qty: 1

    }
];

function draw(item) {
    let v = item.map(i => {
        return `
        <div class="product"> 
             <img src=../img/${i.img_url} alt="image">
            <div class="product-title">
                <h2>${i.title}</h2>
                <p>${i.desc}</p>
            </div>
            <div id="product-icons">
                <button class="iconbtn" onclick="addtocart(${i.id})">add item</button>
                <i class="fa-solid fa-heart"></i>
            </div>
            </div>
        `
    });
    productsnn.innerHTML = v.join("");

};


draw(products);
// let choosen = products.filter((item) => item.id == 1);
// console.log(products)
// console.log(choosen)
// let iconbtn = document.querySelector(".iconbtn")
// let product = document.querySelector(".product");
// iconbtn.addEventListener("click", addtocart(product.id))
let allitems = [];
function addtocart(id) {
    if (localStorage.getItem("username")) {
        let choosen = products.find(i => i.id === id);
        let present = allitems.find(i => i.title = choosen.title)
        if (present) { choosen.qty += 1 } else { allitems.push(choosen) }
        // console.log(allitems)
        // localStorage.setItem("add", allitems)
        // let s = localStorage.getItem('add');
        // allitems = [...s, choosen]
        let each = allitems.map(i => i.title)
        console.log(each)

        // cartdomtext.innerHTML = "";
        // cartdomtext.innerHTML = each;
    } else {
        alert("you must sign in")
    }
};
