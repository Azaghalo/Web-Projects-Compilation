const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

let holdFill;

fills.forEach((fill) => {
	fill.addEventListener('dragstart', dragStart);
	fill.addEventListener('dragend', dragEnd);
	fill.addEventListener('click', (e) => {
		handleRotation(e.target);
	});
});

for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function handleRotation(el) {
	if (el.classList.contains('rotate-90')) {
		el.classList.remove('rotate-90');
		el.classList.add('rotate-180');
	} else if (el.classList.contains('rotate-180')) {
		el.classList.remove('rotate-180');
		el.classList.add('rotate-270');
	} else if (el.classList.contains('rotate-270')) {
		el.classList.remove('rotate-270');
		el.classList.add('rotate-360');
	} else {
		el.classList.add('rotate-90');
	}

	if (el.classList.contains('rotate-360')) {
		setTimeout(() => {
			el.classList.remove('rotate-360');
		}, 400);
	}
}

function dragStart() {
	this.classList.add('hold');
	holdFill = this;
}

function dragEnd() {
	this.classList.remove('hold');
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered';
}

function dragLeave() {
	this.className = 'empty';
}

function dragDrop() {
	this.className = 'empty';
	this.append(holdFill);
}
