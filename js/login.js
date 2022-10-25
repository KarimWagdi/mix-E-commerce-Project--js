const useremail= document.getElementById("useremail").value;
const userpassword = document.getElementById("userpassword").value;
const loginBtn = document.getElementById("loginBtn")



///////////////////////////////////////////////////
///////////// Check In Local Storage /////////////
/////////////////////////////////////////////////

let userdata =[]

userdata= JSON.parse(localStorage.getItem("Users"))


function CheckEmail(){
    if( userdata.find(useremail)){

    }
    else{
        setErrorFor(useremail , "Email Doesn't Exist , please Sign up")
    }
}

function setErrorFor(input, message) {
    error.innerHTML = message
    input.classList.add("failed")

}
