import h from "./create-element.js";
import { login, getPosts } from "./api.js";

const formDiv = document.querySelector("#form")
const header = document.querySelector("header")

const navbar = () => {
    const buttonSignup = h("button", {
        id: "signupBtn", onclick: showForm
    }, "Sign up");
    const buttonLogin = h("button", {
        id: "loginBtn", onclick: showForm
    }, "Log in");
    const buttonLogout = h("button", { id: "logoutBtn" }, "Log out");
    return h("nav", {}, buttonSignup, buttonLogin, buttonLogout);
}

const navbarEl = navbar();
header.append(navbarEl);

function showForm(event) {
    formDiv.innerHTML = "";
    if (event.target.id === "signupBtn") {
        formDiv.append(signUpForm)
    } else if (event.target.id === "loginBtn") {
        formDiv.append(loginForm)
    }
}


// Signup
const signUp = () => {
    const userInput = h("input", { id: "username", type: "name", name: "username", placeholder: "Enter your name here.." });
    const userLabel = h("label", { for: "username" }, "Username*");
    const userError = h("div", { id: "usernameError", class: "error" });

    const passwordInput = h("input", { id: "password", type: "password", pattern: ".*\d.*", minlength: "8", "aria-describedby": "passwordRequirements passwordError", placeholder: "Enter password here.." });
    const passwordError = h("div", { id: "passwordError", class: "error" });

    const passwordLabel = h("label", { for: "password" }, "Password*");
    const passwordReq = h("div", { id: "passwordRequirements", class: "requirements" }, "Passwords must contain at least one number, and be at least 8 characters long.");

    const submitButton = h("button", {}, "Sign up");

    return h("form", {
        onsubmit: function () {

        }
    },
        userLabel, userInput, userError, passwordLabel, passwordReq, passwordInput, passwordError, submitButton
    )
}

const signUpForm = signUp()
// formDiv.append(signUpForm)

// if statement for token


// Login
const logIn = () => {
    const userInput = h("input", { id: "username", type: "name", name: "username", placeholder: "Enter your name here.." });
    const userLabel = h("label", { for: "username" }, "Username*");
    const userError = h("div", { id: "usernameError", class: "error" });

    const passwordInput = h("input", { id: "password", type: "password", pattern: ".*\d.*", minlength: "8", "aria-describedby": "passwordRequirements passwordError", placeholder: "Enter password here.." });
    const passwordError = h("div", { id: "passwordError", class: "error" });

    const passwordLabel = h("label", { for: "password" }, "Password*");
    const passwordReq = h("div", { id: "passwordRequirements", class: "requirements" }, "Passwords must contain at least one number, and be at least 8 characters long.");

    const submitButton = h("button", {}, "Login");
    return h("form", {
        action: "/", method: "POST",
        onsubmit: function () {
            //get email and password from the input   
            event.preventDefault();
            const username = event.target.elements.username.value;
            const password = event.target.elements.password.value;
            login(username, password).then((user) => {
                console.log("user", user);
                window.localStorage.setItem('access_token', user.access_token);
                logIn.replaceWith(travelPost);
            })
                .catch(console.error);
        }
    },
        userLabel, userInput, userError, passwordLabel, passwordReq, passwordInput, passwordError, submitButton
    )
}

const loginForm = logIn();
// formDiv.append(loginForm);


// Post
const travelPost = () => {
    const locationInput = h("input", { id: "location", type: "text", placeholder: "Location please!" });
    const locationLabel = h("label", { for: "location" }, "Location:");

    const messageInput = h("textarea", { id: "message", placeholder: "Message" });
    const messageLabel = h("label", { for: "message" }, "Tell us about your experience! ✨")

    const imageInput = h("input", { id: "image", type: "text", placeholder: "Insert URL here!" })
    const imageLabel = h("label", { for: "image" }, "Image:");

    const submitButton = h("button", { id: "travelButton" }, "Houston, we have a new post! 🚀");
    return h("form", {
        onsubmit: function () {
            //get email and password from the input    
        }
    },
        locationLabel, locationInput, messageLabel, messageInput, imageLabel, imageInput, submitButton
    )
}

const travelPostForm = travelPost()
//formDiv.append(travelPostForm)

