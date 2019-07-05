/*!
 * dont-blink-geek v1.0.0
 * Website for Don't Blink Geek.
 * (c) 2019 John Burks
 * MIT License
 * https://github.com/Just-Johnny/dont-blink-geek
 */

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);
const appearOptions = {
    threshold: 0.15,
    rootMargin: "50px 0px 0px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  const fadeIn = document.querySelectorAll(".fade--in__one, .fade--in__two, .fade--in__three");
  fadeIn.forEach(fader => {
    appearOnScroll.observe(fader);
  });