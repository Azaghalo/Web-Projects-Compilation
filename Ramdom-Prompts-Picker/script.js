const tagsEl = document.getElementById('tags');
const textareaEl = document.getElementById('textarea');

textareaEl.focus();

textareaEl.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		randomSelection();
	}
});

function randomSelection() {
	let times = 15;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		times--;

		highlightTag(randomTag);

		if (times === 0) {
			clearInterval(interval);
		} else {
			setTimeout(() => {
				unHighlightTag(randomTag);
			}, 200);
		}
	}, 300);
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unHighlightTag(tag) {
	tag.classList.remove('highlight');
}

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tagsEl.innerHTML = '';

	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}
