const carouselElement = document.querySelector("#tourismCarousel");
const carouselToggle = document.querySelector("[data-carousel-toggle]");

if (carouselElement && carouselToggle && window.bootstrap) {
  const carousel = window.bootstrap.Carousel.getOrCreateInstance(carouselElement);
  let isPaused = false;

  carouselToggle.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) {
      carousel.pause();
    } else {
      carousel.cycle();
    }

    carouselToggle.setAttribute("aria-pressed", String(isPaused));
    carouselToggle.textContent = isPaused ? "Reanudar carrusel" : "Pausar carrusel";
  });
}
