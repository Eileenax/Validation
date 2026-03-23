// VALIDATION
const userNameRegex = /[a-zA-Z][a-zA-Z0-9-_]{6,8}/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,10}$/;
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const numeroMovil = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;


// Selectores
const countries = document.querySelector("#countries");
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const phoneCodeInput = document.querySelector("#phone-code");



const validation = (e, validation, element) => {
    const informacion = element.id == "phone" ? e.target.parentElement.children[2]: e.target.parentElement.children[1];
    console.log (informacion)

    if(validation){
        element.classList.add("correct");
        element.classList.remove("incorrect");
        informacion.classList.remove("show-information");
    }else{
        element.classList.add("incorrect");
        element.classList.remove("correct");
        informacion.classList.add("show-information");
    }
}



// Estas lineas de codigo se utilizan para separar el nombre del pais de los numeros del codigo

[...countries].forEach(options=>{
 options.innerHTML=(options.innerHTML.split("(")[0])

})
let usernameValidation = false;
  const informacion = document.querySelector(".informacion");
  usernameInput.addEventListener('input',e=> {
  usernameValidation = userNameRegex.test(e.target.value);
  const informacion = e.target.parentElement.children[1];
  console.log (informacion)
validation (e, usernameValidation, usernameInput)

// if (usernameValidation) {
//   usernameInput.classList.add('correct');
//   usernameInput.classList.remove('incorrect');
//   informacion.classList.remove('show-information');
// } else {
//   usernameInput.classList.add('incorrect');
//   usernameInput.classList.remove('correct');
//   informacion.classList.add('show-information');

// 
  }
);