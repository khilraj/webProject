let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
  navbar.classList.toggle('active');
  cartItem.classList.remove('active');
  searchForm.classList.remove('active');

}


let cartItem = document.querySelector('.cart-container');

document.querySelector('#shopping-cart-icon').onclick = () =>{
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
  searchForm.classList.remove('active');
}


window.addEventListener("load", function() {
  setTimeout(
    function open(event) {
      document.querySelector(".container").style.display = "block";
    },
    0
  )
});


document.querySelector("#close").addEventListener
("click", function(){
  document.querySelector(".container").style.display = "none";

});

// const containers = document.querySelector(".container"),
//       pwfield = document.querySelectorAll(".password"),
//       signup = document.querySelector(".SignUp"),
//       login = document.querySelector(".Login");

//       // js code to appear login and signup form
//       signup.addEventListener("click", () => {
//         containers.classList.add("active");
//       });
//       login.addEventListener("click", () => {
//         containers.classList.remove("active");
//       });

const SignUp = document.querySelector(".SignUp");
const Login = document.querySelector(".Login");
const move = document.querySelector(".move");
const signupjs = document.querySelector(".signup-js");
const loginjs = document.querySelector(".signin-js");


Login.addEventListener("click", ()=> {
  move.classList.add("rightbtn");
  loginjs.classList.add("login-form");
  signupjs.classList.remove("signup-form");
  move.innerHTML= "SignIn";
});

SignUp.addEventListener("click", ()=> {
  move.classList.remove("rightbtn");
  loginjs.classList.remove("login-form");
  signupjs.classList.add("signup-form");
  move.innerHTML= "Signup";


});





