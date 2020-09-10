import h from "./create-element.js";

const formDiv = document.querySelector("#form")

// Signup
const signUp = () => {
    const userInput = h("input", { id: "email", type: "email", placeholder: "Enter email here.."});
    const userLabel = h("label", { for: "email" }, "Email*");
    const userError = h("div", { id: "emailError", class: "error"});

    const passwordInput = h("input", { id: "password", type: "password", pattern: ".*\d.*", minlength: "8", "aria-describedby": "passwordRequirements passwordError", placeholder: "Enter password here.."});
    const passwordError = h("div", { id: "passwordError", class: "error"});

    const passwordLabel = h("label", { for: "password" }, "Password*");
    const passwordReq = h("div", { id: "passwordRequirements", class: "requirements"}, "Passwords must contain at least one number, and be at least 8 characters long." );
    
    const submitButton = h("button", {}, "Sign up");

    return h("form", { onsubmit: function(){
        //get email and password from the input    
    }},
    userLabel, userInput, userError, passwordLabel, passwordReq, passwordInput, passwordError, submitButton
    )        
}
  
const signUpForm = signUp()
formDiv.append(signUpForm)

// Login
const login = () => {
    const userInput = h("input", { id: "email", type: "email", placeholder: "Enter email here.."});
    const userLabel = h("label", { for: "email" }, "Email*");
    const userError = h("div", { id: "emailError", class: "error"});

    const passwordInput = h("input", { id: "password", type: "password", pattern: ".*\d.*", minlength: "8", "aria-describedby": "passwordRequirements passwordError", placeholder: "Enter password here.."});
    const passwordError = h("div", { id: "passwordError", class: "error"});

    const passwordLabel = h("label", { for: "password" }, "Password*");
    const passwordReq = h("div", { id: "passwordRequirements", class: "requirements"}, "Passwords must contain at least one number, and be at least 8 characters long." );

    const submitButton = h("button", {}, "Login");
    return h("form", { onsubmit: function(){
    //get email and password from the input    
    }},
    userLabel, userInput, userError, passwordLabel, passwordReq, passwordInput, passwordError, submitButton
    )        
}
  
const loginForm = login()
formDiv.append(loginForm)

// Post
const travelPost = () => {
    const locationInput = h("input", { id: "location", type: "text", placeholder: "Location please!"});
    const locationLabel = h("label", { for: "location" }, "Location:");

    const messageInput = h("textarea", { id: "message", placeholder: "Message" });
    const messageLabel = h("label", { for: "message" }, "Tell us about your experience! ✨")

    const imageInput = h("input", { id: "image", type: "text", placeholder: "Insert URL here!"})
    const imageLabel = h("label", { for: "image" }, "Image:");

    const submitButton = h("button", { id: "travelButton"}, "Houston, we have a new post! 🚀");
    return h("form", { onsubmit: function(){
    //get email and password from the input    
    }},
    locationLabel, locationInput, messageLabel, messageInput, imageLabel, imageInput, submitButton
    )        
}
  
const travelPostForm = travelPost()
formDiv.append(travelPostForm)

