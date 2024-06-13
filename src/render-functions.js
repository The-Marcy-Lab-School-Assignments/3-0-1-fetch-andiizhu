export const setupPageBasics = (parentEl) => {
	parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

	const statusDiv = parentEl.querySelector("#status");
	const usersUl = parentEl.querySelector("#users-list");
	const postsUl = parentEl.querySelector("#posts-list");
	const newUserForm = parentEl.querySelector("#new-user-form");
	const newUserDiv = parentEl.querySelector("#new-user");

	return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
	const h2 = document.createElement("h2"); // create new h2 element
	const p = document.createElement("p"); // create new p element
	h2.id = "status-heading"; // create a new id attribute for h2
	p.id = "status-code"; // create a new id attribute for p
	h2.textContent = `Info on - ${statusInfoObj.url}`; // update readable text for h2
	if (statusInfoObj.ok) {
		// if the response ok is true
		p.textContent = `Status code: ${statusInfoObj.status}, OK!`; // update the readable text for p
	} else p.textContent = `Status code: ${statusInfoObj.status}, FAIL!`; //update the readable text for p

	statusDiv.append(h2, p); // add two child elements for h2 and p
};

export const renderUsers = (usersUl, users) => {
	usersUl.innerHTML = ``; // clears the HTML for inside of postUL
	users.forEach((postElement) => {
		// for each element inside of users
		const li = document.createElement("li"); // create a new li element
		const button = document.createElement("button"); // create a new button element.
		button.textContent = `Load ${postElement.username}'s posts`; // update the button readable text.
		button.setAttribute("data-user-id", postElement.id); // create a new attribute for button with the name of "data-user-id" and a value of e.id
		li.append(button); // make the button a child element of the li
		li.classList.add("user-card"); // add a class to li
		usersUl.append(li); // make the li a child element of usersUl
	});
};

export const renderPosts = (postsUl, posts) => {
	postsUl.innerHTML = ""; // clears the HTML for inside of postUL
	posts.forEach((postElement) => {
		// for each element inside of posts
		const li = document.createElement("li"); // create a new li element
		const h2 = document.createElement("h2"); // create a new h2 element
		const p = document.createElement("p"); // create a new p element
		h2.textContent = postElement.title; // make the readable text of h2 equal to the title property of each element
		p.textContent = postElement.body; // make the readable text of p equal to the body property of eac element.
		li.append(h2, p); // make the h2 and p child elements of li
		postsUl.append(li); // make the li a child element of postsUl
	});
};

export const renderNewUser = (newUserDiv, newUserInfo) => {
	newUserDiv.innerHTML = ""; // clears the HTML for inside of newUserDiv
	const h2 = document.createElement("h2"); // create a new h2 element
	const p = document.createElement("p"); // create a new p element
	h2.textContent = newUserInfo.username; // make the readable text of h2 equal to the username property of newUserInfo
	p.textContent = newUserInfo.email; // make the readable text of p equal to the email property of newUserInfo
	newUserDiv.append(h2, p); // make the h2 and p child elements of newUserDiv
};
