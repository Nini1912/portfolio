const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

export const observeElements = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
};
