document.querySelector("#signup").addEventListener("click",signUp);
var users = JSON.parse(localStorage.getItem("users")) || [];
function signUp(){
    event.preventDefault();
    var phone = document.getElementById("number").value;
    var otp = document.getElementById("checkOtp").value;
    if (phone.length == 10){
        if(otp=="123456"){
        alert("Sign Up Successfully")
        window.location.href="homepage.html"
    }else{
        alert("Please Enter valid OTP")
    }
        
    } else {
        alert("Please enter valid phone number")
    }
}