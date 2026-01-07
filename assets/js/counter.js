(function () {
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute("data-to-value"));
    const from = parseFloat(el.getAttribute("data-from-value")) || 0;
    const duration = parseInt(el.getAttribute("data-duration")) || 2000;
    const delimiter = el.getAttribute("data-delimiter") || ",";
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out function
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentValue = from + (target - from) * easedProgress;

      // Format number with delimiter
      let formattedValue = Math.floor(currentValue).toString();
      if (delimiter) {
        formattedValue = formattedValue.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          delimiter
        );
      }

      el.textContent = formattedValue;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = Math.floor(target)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
      }
    };

    requestAnimationFrame(update);
  };

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".elementor-counter-number").forEach((counter) => {
    observer.observe(counter);
  });
})();
