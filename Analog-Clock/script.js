const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

toggleEl.addEventListener('click', () => {
	const html = document.querySelector('html');
	html.classList.toggle('dark');

	if (html.classList.contains('dark')) {
		toggleEl.innerHTML = 'Light Mode';
	} else {
		toggleEl.innerHTML = 'Dark Mode';
	}
});

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const dayOfMonth = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;

	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;

	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		60,
		0,
		360
	)}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;

	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dayOfMonth}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(setTime, 1000);
