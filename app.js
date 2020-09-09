import h from "./create-element.js";

const userInput = h("input", { id: "email", type: "email", placeholder: "Enter email here.."});
const userLabel = h("label", { for: "email" }, "Email:");

const passwordInput = h("input", { id: "mail", type: "password", placeholder: "Enter password here.."});
const passwordLabel = h("label", { for: "password" }, "Password:");

const submitButton = h("button", {}, "Sign up");

const formDiv = document.querySelector("#form")

const signUp = h("form", { onsubmit: function(){
//get email and password from the input    
}},
userLabel, userInput, passwordLabel, passwordInput, submitButton
)

formDiv.append(signUp)
