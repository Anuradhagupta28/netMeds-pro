var carttotal = JSON.parse(localStorage.getItem("order-page"))
    var cartdata = JSON.parse(localStorage.getItem("cart-page"))
    display(cartdata)

    function display(cartdata) {

        cartdata.forEach(function (elem) {
            var mdiv = document.createElement("div")
            var img = document.createElement("img")
            img.setAttribute("src", elem.img)
            var h3 = document.createElement("h3")
            h3.innerText = elem.des
            var p = document.createElement("p")
            p.innerText = elem.mrp
            var h4 = document.createElement("h4")
            h4.innerText = elem.price
            mdiv.append(img, h3, p, h4)
            document.querySelector("#product").append(mdiv)
        })
    }
    document.getElementById("paybtn").addEventListener("click", myPay)
    function myPay() {
        alert("Payment Successful ")
        window.location.href = "homepage.html"
    }
    document.querySelector("#total").innerText = ("RS " + carttotal);