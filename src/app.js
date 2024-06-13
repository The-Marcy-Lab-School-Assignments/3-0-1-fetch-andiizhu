import {
	renderStatus,
	setupPageBasics,
	renderUsers,
	renderPosts,
	renderNewUser,
} from "./render-functions.js";
import {
	checkResponseStatus,
	getUserPosts,
	createNewUser,
	getUsers,
} from "./fetch-functions.js";

export default function app(appDiv) {
	const page = setupPageBasics(appDiv); // setup page.
	checkResponseStatus().then((statusInfoObj) =>
		renderStatus(page.statusDiv, statusInfoObj)
	);
	getUsers().then((users) => renderUsers(page.usersUl, users));

	page.usersUl.addEventListener("click", (event) => {
		if (event.target.tagName === "BUTTON") {
			let userId = event.target.getAttribute("data-user-id");
			getUserPosts(userId).then((posts) => renderPosts(page.postsUl, posts));
		}
	});

	// page.newUserForm.addEventListener("submit", (event) => {
	// 	event.preventDefault();
	// 	const formData = new FormData(event.target);
	// 	const formObject = Object.entries(formData);

	// 	createNewUser(formObject).then((newUserInfo) =>
	// 		renderNewUser(page.newUserDiv, newUserInfo)
	// 	);
	// 	event.target.reset();
	// });

	page.newUserForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formObject = {};
		formData.forEach((value, key) => {
			formObject[key] = value;
		});

		createNewUser(formObject).then((newUserInfo) =>
			renderNewUser(page.newUserDiv, newUserInfo)
		);
		event.target.reset();
	});
}
