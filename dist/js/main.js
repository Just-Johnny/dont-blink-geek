/*!
 * dont-blink-geek v0.0.1
 * Website for Don't Blink Geek.
 * (c) 2019 John Burks
 * MIT License
 * https://github.com/Just-Johnny/dont-blink-geek
 */

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);