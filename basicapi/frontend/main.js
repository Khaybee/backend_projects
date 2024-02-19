// create a base url, so you can concatenate, other routes to the same base and you can easily change the server and use the same routes
const baseUrl = "http://localhost:5000/";

const fetchUser = () => {
  const url = `${baseUrl}showUsers`;
  fetch(url)
    .then(function (data) {
     console.log(data);
      return data.json();
    })
    .then(function (rec) {
    //  console.log(rec)
      displayUsers(rec)
    })
    .catch(function (err) {
      console.log(err);
      //    console.log("wrond route")
    });
};
fetchUser();


function displayUsers(rec){
     const tBody = document.getElementById('userList');
     let htmlData = "";

    for(i=0; i<rec.length; i++){

     htmlData += `<tr>`
     htmlData += `<td> ${rec[i].cus_FullName}</td>`
     htmlData += `<td> ${rec[i].cus_contact}</td>`
     htmlData += `<td> ${rec[i].email}</td>`
     htmlData += `<td> ${rec[i].cusdate}</td>`
     htmlData += `</tr>`
    }
     tBody.innerHTML = htmlData;
     // console.log("user 1:", rec[i].cus_FullName + "user's email: " + rec[i].email)
     // console.log(rec[i].email)

}


const send = document.getElementById('send')

function validate(){
  return new Promise((resolve, reject) => {
    const cus_FullName = document.getElementById('fullname').value
const cusdate = document.getElementById('date').value
const cus_contact = document.getElementById('contact').value
const email = document.getElementById('email').value

    if (cus_FullName.length <= 0 || cus_contact.length <= 0 || email.length <= 0 || cusdate.length <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your details",
        footer: 'Cannot Have Empty Fields!!!'
      });
      reject("Invalid input")
    }
    else {
      
      resolve({cus_FullName, cusdate, cus_contact, email})
      console.log("valid")
    }
  })
}


send.addEventListener('click', function(){
  validate().then(response=>{
    addUser(response)
    // console.log(response)
  }).catch(err => {
    console.log(err)
  })
})


function addUser(userData){

axios.post(`${baseUrl}register`,userData)
.then(function(response){
  fetchUser();
console.log(response)
})
.catch(err=>{
    console.log(err)
})
}