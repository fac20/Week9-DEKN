// all fetch requests here

function request(url, options) {
	return fetch(url, options).then((response) => {
		if (!response.ok) {
			const error = new Error('not okay');
			error.status = response.status;
			throw error;
		} else {
			return response.json();
		}
	});
}

function getPosts() {
	return request('https://travel--jar.herokuapp.com/');
}

function login(username, password) {
	return request('https://travel--jar.herokuapp.com/login', {
		method: 'POST',
		body: JSON.stringify({ username, password }),
		headers: { 'content-type': 'application/json' },
	});
}

function createPost(location, message, image, token) {
	return request('https://travel--jar.herokuapp.com/posts', {
		method: 'POST',
		body: JSON.stringify({ location: location, message: message, image: image }),
		headers: {
			'content-type': 'application/json',
			authorization: `Bearer ${token}`,
		},
	});
}

function signup(username, password) {
	return request('https://travel--jar.herokuapp.com/signup', {
		method: 'POST',
		body: JSON.stringify({ username, password }),
		headers: { 'content-type': 'application/json' },
	});
}

export { getPosts, login, createPost, signup };
