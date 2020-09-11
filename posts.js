import h from './create-element.js';
import { getPosts } from './api.js';

const postsContainer = document.querySelector('#posts');

function displayPosts() {
	getPosts().then((result) => {
		const reverse = result.reverse();
		const allPosts = reverse.map((travelPost) => {
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
			return h(
				'article',
				{
					id: 'card',
				},
				h2,
				img,
				p,
				h3
			);
		});
		return postsContainer.append(...allPosts);
	});
}

export { displayPosts };

