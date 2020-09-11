import h from './create-element.js';
import { login, createPost, signup } from './api.js';
import { displayPosts } from './posts.js';

const formDiv = document.querySelector('#form');
const header = document.querySelector('header');
const postsDiv = document.querySelector('#posts');

// 1. Navigation Bar

const navbar = () => {
	let isTokenTrue = window.localStorage.access_token;

	const buttonSignup = h(
		'button',
		{
			id: 'signupBtn',
			onclick: showForm,
		},
		'Sign up'
	);
	const buttonLogin = h(
		'button',
		{
			id: 'loginBtn',
			onclick: showForm,
		},
		'Log in'
	);
	const buttonPost = h(
		'button',
		{
			id: 'postBtn',
			onclick: showForm,
		},
		'Post'
	);
	const buttonLogout = h('button', { id: 'logoutBtn' }, 'Log out');

	if (isTokenTrue) {
		return h('nav', {}, buttonPost, buttonLogout);
	} else {
		return h('nav', {}, buttonSignup, buttonLogin);
	}
};

const navbarEl = navbar();

// 2. Append respective forms to div on click event listener

function showForm(event) {
	formDiv.innerHTML = '';
	if (event.target.id === 'signupBtn') {
		formDiv.append(signUpForm);
	} else if (event.target.id === 'loginBtn') {
		formDiv.append(loginForm);
	} else if (event.target.id === 'postBtn') {
		formDiv.append(travelPostForm);
	}
}

// 3. Signup Form

const signUp = () => {
	const userInput = h('input', {
		id: 'username',
		type: 'name',
		name: 'username',
		placeholder: 'Enter your name here..',
		required: true,
	});
	const userLabel = h('label', { htmlFor: 'username' }, 'Username*');
	const userError = h('div', { id: 'usernameError', class: 'error' });

	const passwordInput = h('input', {
		id: 'password',
		type: 'password',
		minlength: '8',
		'aria-describedby': 'passwordRequirements passwordError',
		placeholder: 'Enter password here..',
		required: true,
	});
	const passwordError = h('div', { id: 'passwordError', class: 'error' });

	const passwordLabel = h('label', { htmlFor: 'password' }, 'Password*');
	const passwordReq = h(
		'div',
		{ id: 'passwordRequirements', class: 'requirements' },
		'Passwords must contain at least one number, and be at least 8 characters long.'
	);

	const submitButton = h('button', {}, 'Sign up');

	return h(
		'form',
		{
			onsubmit: function () {
				//get email and password from the input
				event.preventDefault();
				const username = event.target.elements.username.value;
				const password = event.target.elements.password.value;
				signup(username, password)
					.then((user) => {
						window.localStorage.setItem('access_token', user.access_token);
						signUpForm.replaceWith(travelPostForm);
						header.replaceWith(travelPostForm);
					})
					.catch(console.error);
			},
		},
		userLabel,
		userInput,
		userError,
		passwordLabel,
		passwordReq,
		passwordInput,
		passwordError,
		submitButton
	);
};

const signUpForm = signUp();
// formDiv.append(signUpForm)
// if statement for token ??

// 4. Login Form

const logIn = () => {
	const userInput = h('input', {
		id: 'username',
		type: 'name',
		name: 'username',
		placeholder: 'Enter your name here..',
		required: true,
	});
	const userLabel = h('label', { htmlFor: 'username' }, 'Username*');
	const userError = h('div', { id: 'usernameError', class: 'error' });

	const passwordInput = h('input', {
		id: 'password',
		type: 'password',
		// pattern: '.*d.*',
		minlength: '8',
		'aria-describedby': 'passwordRequirements passwordError',
		placeholder: 'Enter password here..',
		required: true,
	});
	const passwordError = h('div', { id: 'passwordError', class: 'error' });

	const passwordLabel = h('label', { htmlFor: 'password' }, 'Password*');
	const passwordReq = h(
		'div',
		{ id: 'passwordRequirements', class: 'requirements' },
		'Passwords must contain at least one number, and be at least 8 characters long.'
	);

	const submitButton = h('button', {}, 'Login');
	return h(
		'form',
		{
			onsubmit: function () {
				//get email and password from the input
				event.preventDefault();
				const username = event.target.elements.username.value;
				const password = event.target.elements.password.value;
				login(username, password)
					.then((user) => {
						console.log('user', user);
						window.localStorage.setItem('access_token', user.access_token);
						loginForm.replaceWith(travelPostForm);
						header.replaceWith(navbar());
					})
					.catch(console.error);
			},
		},
		userLabel,
		userInput,
		userError,
		passwordLabel,
		passwordReq,
		passwordInput,
		passwordError,
		submitButton
	);
};

const loginForm = logIn();
// formDiv.append(loginForm);

// 5. Create Travel Post Form

const travelPost = () => {
	const locationInput = h('input', {
		id: 'location',
		type: 'text',
		placeholder: 'Location please!',
		required: true,
	});
	const locationLabel = h('label', { htmlFor: 'location' }, 'Location:');

	const messageInput = h('textarea', {
		id: 'message',
		placeholder: 'Message',
		required: true,
	});
	const messageLabel = h(
		'label',
		{ htmlFor: 'message' },
		'Tell us about your experience! ✨'
	);

	const imageInput = h('input', {
		id: 'image',
		type: 'text',
		placeholder: 'Insert URL here!',
		required: true,
	});
	const imageLabel = h('label', { htmlFor: 'image' }, 'Image:');

	const submitButton = h(
		'button',
		{
			id: 'travelButton',
			onclick: function () {
				window.scrollTo('0,500');
			},
		},
		'Houston, we have a new post! 🚀'
	);
	return h(
		'form',
		{
			onsubmit: function () {
				// if token exists - carry on these lines of code
				// else give error 'not logged in'
				event.preventDefault();
				const location = event.target.elements.location.value;
				const message = event.target.elements.message.value;
				const imageURL = event.target.elements.image.value;
				const token = window.localStorage.getItem('access_token');
				if (token) {
					createPost(location, message, imageURL, token)
						.then((user) => {
							console.log('hello bitches' + user, imageURL, token);
							postsDiv.innerHTML = '';
							displayPosts();
						})
						.then((posts) => {
							postsDiv.append(posts);
							travelPostForm.reset();
						})
						.catch(console.error);
				}
			},
		},
		locationLabel,
		locationInput,
		messageLabel,
		messageInput,
		imageLabel,
		imageInput,
		submitButton
	);
};

const travelPostForm = travelPost();
// formDiv.append(travelPostForm);

function loadSite() {
	let accessToken = window.localStorage.access_token;

	if (accessToken) {
		header.append(navbarEl);
		formDiv.append(travelPostForm);
	} else {
		header.append(navbarEl);
	}
	displayPosts();
}

loadSite();
