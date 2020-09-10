import h from './create-element.js';
import getPosts from './api.js';

const postsContainer = document.querySelector('#posts');

console.log(postsContainer);
function displayPosts() {
	getPosts().then((result) => {
		const allPosts = result.map((travelPost) => {
			const location = travelPost.location;
			const message = travelPost.message;
			const imageURL = travelPost.image;
			const postNumber = travelPost.id;

			const h2 = h('h2', {}, location);
			// img
			const img = h('img', {
				src: imageURL,
				alt: ' travelPost Image ',
				className: 'articleimg',
			});
			// p
			const p = h('p', {}, message);
			// h3
			const h3 = h('h3', {}, postNumber);
			// article
			return h('article', {}, h2, img, p, h3);
		});
		console.log(allPosts);
		return postsContainer.append(...allPosts);
	});
}
//do you wanna render this before we go to lunch ?
//yeah!
//cool im down
// its a promise so we need to wait until its finished giving us all the info
displayPosts();
export default postsContainer;
