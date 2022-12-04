var productCont = document.getElementById("products");
var cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];
var orderLS = JSON.parse(localStorage.getItem("order-page")) || [];
var totalprice = 0;
 if(cartLS.length==0){
    window.location.href="emptycart.html";
 }
function displayProducts(productData) {
    productCont.innerHTML = "";
    totalprice = 0;
    productData.forEach(function (element) {
        totalprice += Number(element.price.trim().split(" ")[3]);
        console.log(totalprice);
        var product = document.createElement("div");

        var img = document.createElement("img");
        img.src = element.img;

        var des = document.createElement("h3");
        des.textContent = element.des;

        var smalltxt = document.createElement("p");
        smalltxt.innerText = element.smalltxt;

        var price = document.createElement("p");
        var rs = element.price
        price.innerText = rs;
        price.style.color = "green"

        var mrp = document.createElement("p");
        mrp.style.textDecorationLine="line-through"
        mrp.innerText = element.mrp;

        var DeleteToCart = document.createElement("button");
        DeleteToCart.innerText = "DELETE";
        DeleteToCart.style.backgroundColor = "teal";
        DeleteToCart.style.border = "transparent";
        DeleteToCart.style.width = "100px";
        DeleteToCart.style.height = "50px";
        DeleteToCart.style.color = "white";
        DeleteToCart.addEventListener("click", function () {
            Delete(element.des);
        })

        product.append(img, des, smalltxt, price, mrp, DeleteToCart)
        productCont.append(product);
    })
    document.querySelector("#pt").innerText = totalprice.toFixed(2);
    document.querySelector("#net").innerText = "Please apply coupon if any";
    document.querySelector("#total").innerText = ("Rs. " + totalprice.toFixed(2));
    document.querySelector("#total1").innerText = ("Rs. " + totalprice.toFixed(2));
    var x = totalprice.toFixed(2);
    coupon_button.addEventListener("click", function () {
        var coupon = document.querySelector("#apply").value;
        if (coupon == "masai30" || coupon == "MASAI30") {
            console.log(totalprice - (0.3 * totalprice));
            document.querySelector("#net").innerText = "30%";
            document.querySelector("#total").innerText = ("Rs. " + (totalprice - (0.3 * totalprice)).toFixed(2));
            document.querySelector("#total1").innerText = ("Rs." + (totalprice - (0.3 * totalprice)).toFixed(2));
            x = totalprice.toFixed(2) - (0.3 * totalprice.toFixed(2));
        } else if (coupon !== "masai30" || coupon !== "MASAI30") {
            alert("Please enter valid Coupon Code.")
        } else {
            document.querySelector("#total").innerText = (totalprice.toFixed(2));
            document.querySelector("#total1").innerText = ("Rs. " + totalprice.toFixed(2));
            x = totalprice.toFixed(2) - (0.3 * totalprice.toFixed(2));
        }
    })
    PRO.addEventListener("click", function () {

        localStorage.setItem("order-page", JSON.stringify(x));
        orderLS.push(x);
    })

}


displayProducts(cartLS);
function Delete(id) {
    var deleted = cartLS.filter(function (el) {
        return el.des != id;
    })
    cartLS = deleted;
    localStorage.setItem("cart-page", JSON.stringify(cartLS));
    displayProducts(cartLS);
    console.log(cartLS);
    location.reload()
}
var cartData = JSON.parse(localStorage.getItem("cart-page"))



var txt = document.getElementById('numprod')
var cart = JSON.parse(localStorage.getItem('cart-page'))

var spantext = document.createElement('span')
var len = cart.length;
spantext.innerHTML = " " + len;

txt.appendChild(spantext)