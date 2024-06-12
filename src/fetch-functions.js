const userUrl = "https://jsonplaceholder.typicode.com/users";

export const checkResponseStatus = () => {
	return fetch(userUrl).then((response) => {
		// this is getting information from the response action
		const obj = {
			// create object
			status: response.status, // the response action's status
			ok: response.ok, // the response action's ok
			url: response.url, // the response action's url
		};
		return obj; // return obj
	});
};

export const getUsers = () => {
	return fetch(userUrl).then((response) => response.json()); // this is getting information from the API. By making the `response.json()` it is no longer in a readable stream, instead it's a promise(object)
};

export const getUserPosts = (userId, maxNumPosts) => {
	const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`; // URL for this problem.
	if (maxNumPosts != 3) maxNumPosts = 3; // default the number to 3.
	return fetch(url) // this is getting the information from the URL
		.then((response) => response.json()) // convert from readablestream to readable code (guessing it's an array)
		.then((responseData) => responseData.slice(0, maxNumPosts)); // taking the first 3 post.
};

export const createNewUser = (newUserData) => {
	const options = {
		// options created for second parameter of fetch.
		method: "POST", // The type of HTTP request
		body: JSON.stringify(newUserData), // The data to be sent to the API
		headers: {
			"Content-Type": "application/json", // The format of the body's data
		},
	};
	return fetch(userUrl, options) // this is posting from the option to the URL
		.then((response) => response.json()) // convert from readable stream to readable code.
		.then((data) => data); // return data from post.
};
