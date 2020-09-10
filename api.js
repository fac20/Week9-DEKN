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

export default getPosts;
