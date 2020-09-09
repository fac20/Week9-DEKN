import h from "./create-element.js";

const formDiv = document.querySelector("#form")

// Signup
const signUp = () => {
    const userInput = h("input", { id: "email", type: "email", placeholder: "Enter email here.."});
    const userLabel = h("label", { for: "email" }, "Email:");

    const passwordInput = h("input", { id: "mail", type: "password", "pattern": ".*\d.*", "minlength": "8", "aria-describedby": "pw-req passwordError", placeholder: "Enter password here.."});
    const passwordLabel = h("label", { for: "password" }, "Password:");
    // create password req variable 
    
    const submitButton = h("button", {}, "Sign up");
    return h("form", { onsubmit: function(){
    //get email and password from the input    
    }},
    userLabel, userInput, passwordLabel, passwordInput, submitButton
    )        
}
  
const signUpForm = signUp()
formDiv.append(signUpForm)

// Login
const login = () => {
    const userInput = h("input", { id: "email", type: "email", placeholder: "Enter email here.."});
    const userLabel = h("label", { for: "email" }, "Email:");

    const passwordInput = h("input", { id: "mail", type: "password", "pattern": ".*\d.*", "minlength": "8", "aria-describedby": "pw-req passwordError", placeholder: "Enter password here.."});
    const passwordLabel = h("label", { for: "password" }, "Password:");

    const submitButton = h("button", {}, "Login");
    return h("form", { onsubmit: function(){
    //get email and password from the input    
    }},
    userLabel, userInput, passwordLabel, passwordInput, submitButton
    )        
}
  
const loginForm = login()
formDiv.append(loginForm)

// Post
const travelPost = () => {
    const locationInput = h("input", { id: "location", type: "text", placeholder: "Location please!"});
    const locationLabel = h("label", { for: "location" }, "Location:");

    const messageInput = h("textarea", { id: "message", placeholder: "Message" });
    const messageLabel = h("label", { for: "message" }, "Tell us about your experience ✨")

    const imageInput = h("input", { id: "image", type: "text", placeholder: "Image URL here!"})
    const imageLabel = h("label", { for: "image" }, "Image:");

    const submitButton = h("button", {}, "Submit Post");
    return h("form", { onsubmit: function(){
    //get email and password from the input    
    }},
    locationLabel, locationInput, messageLabel, messageInput, imageLabel, imageInput, submitButton
    )        
}
  
const travelPostForm = travelPost()
formDiv.append(travelPostForm)

