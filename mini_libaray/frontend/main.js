const baseURL = "http://localhost:4000/"

const saveUser = (details)=>{
     const url = `${baseURL}register`
     
     // const details = {
     //      username: username,
     //      email: email,
     //      userpassword : password
     // }
     axios.post(url, details)
     .then((response)=> {
          console.log(response)
     })
     .catch((err)=>{
          console.log(err)
     })
}

const checksValid = () => {
     const username = document.getElementById('username').value;
     const email = document.getElementById('email').value;
     const userpassword = document.getElementById('password').value;
     const confirmPassword = document.getElementById('confirmPassword').value;
     const checkbox = document.getElementById('checkbox')

     if( username.length < 0 || email.length < 0 || userpassword.length < 0 || confirmPassword.length < 0 ) {
          console.log("Cannot have empty fields!")
     }
     else if (confirmPassword !== userpassword) {
          console.log("Passwords do not match")
     }
     else if (!checkbox.checked){
          console.log("Check the damn box")
     }
     else {
          saveUser({username, email, userpassword})
     }
}

const signup_Button = document.getElementById('signup_Button')

signup_Button.addEventListener('click', checksValid)