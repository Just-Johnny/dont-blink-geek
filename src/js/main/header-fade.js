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