document.querySelector("#loginbtn").addEventListener("click", getOtp);
var users=JSON.parse(localStorage.getItem("users"))|| [] ;
function getOtp(){
    event.preventDefault();
    var phone = document.getElementById("phone").value;
        if(phone.length == 10){
            if (users.includes(phone + "") == true) {
            var otpmsg = document.createElement("P");
            otpmsg.textContent="Enter 6 Digit OTP";
            otpmsg.style.color="red"
            var otp = document.createElement("INPUT");
            otp.setAttribute("type", "text");
            otp.setAttribute("id", "otplogin");
            var newbtn = document.createElement("button");
            newbtn.setAttribute("id", "verify");
            newbtn.innerHTML="Verify OTP";
           document.querySelector("#otpbox").append(otpmsg,otp,newbtn);
            var btn = document.getElementById("loginbtn");
            btn.remove();
            document.querySelector("#verify").addEventListener("click", visitHome);
        
            }else {
                        users.push(phone);
                        localStorage.setItem("users", JSON.stringify(users));
                        window.location.href = "signup.html"
            }
        }
            else {
                    alert("Please enter 10 Digit phone number")
                    }


}
function visitHome(){
    event.preventDefault();
    if(document.querySelector("#otplogin").value==123456){
        window.location.href="homepage.html";
        
    } else{
        alert("You have Entered Wrong OTP");
    }
    
} 
