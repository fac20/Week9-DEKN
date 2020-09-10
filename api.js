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

// function getUser(token) {
//     return request(“https://dogs-rest.herokuapp.com/v1/users/me/”, {
//         headers: { authorization: `Bearer ${token}` },
//     });
// }

function getPosts() {
    return request("https://travel--jar.herokuapp.com/");
}

function login(username, password) {
    return request("https://travel--jar.herokuapp.com/login", {
        method: "POST",
        body: ({ username, password }), //usename?=myhoadfh
        headers: { "content-type": "application/x-www-form-urlencoded" },
    })
}

// all fetch requests here
// signup, login func - app.js, login - api 

export { getPosts, login };
