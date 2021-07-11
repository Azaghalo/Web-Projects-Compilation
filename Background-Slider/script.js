const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const slides = document.querySelectorAll('.slide');
const body = document.body;

let currentIndex = 0;

setBgBody();

leftBtn.addEventListener('click', () => {
	currentIndex--;
	changeSlide();
});

rightBtn.addEventListener('click', () => {
	currentIndex++;
	changeSlide();
});

function setBgBody() {
	body.style.backgroundImage = slides[currentIndex].style.backgroundImage;
}

function changeSlide() {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});

	if (currentIndex > slides.length - 1) {
		currentIndex = 0;
	} else if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}

	if (currentIndex === slides.length - 1) {
		slides[currentIndex - 1].style.transform = 'translateX(-100%)';
		slides[0].style.transform = 'translateX(100%)';
	} else if (currentIndex === 0) {
		slides[slides.length - 1].style.transform = 'translateX(-100%)';
		slides[currentIndex + 1].style.transform = 'translateX(100%)';
	} else {
		slides[currentIndex + 1].style.transform = 'translateX(100%)';
		slides[currentIndex - 1].style.transform = 'translateX(-100%)';
	}

	slides[currentIndex].style.transform = 'translateX(0)';
	slides[currentIndex].classList.add('active');
	setBgBody();
}
