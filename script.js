

document.querySelector(".menu").addEventListener("click", menutoggle);

var menuitems = document.getElementById("menu-items");

function menutoggle() {
    if (menuitems.style.maxHeight === "0px" || menuitems.style.maxHeight === "") {
        menuitems.style.maxHeight = menuitems.scrollHeight + "px";
    } else {
        menuitems.style.maxHeight = "0px";
    }
}

document.querySelector(".btn").style.border="3px transparent";
document.querySelector(".btn").addEventListener("click", function () {
    document.querySelector(".btn").style.border="3px solid black";  
    
});

//js for product details

var productimg = document.getElementById("product-img");
var smalling = document.getElementsByClassName("small-img");
smalling[0].onclick=function () {
    productimg.src = smalling[0].src;
}
smalling[1].onclick=function () {
    productimg.src = smalling[1].src;
}
smalling[2].onclick=function () {
    productimg.src = smalling[2].src;
}
smalling[3].onclick=function () {
    productimg.src = smalling[3].src;
}


//js for account details



