const posters = document.querySelectorAll("[data-poster]");
const body = document.body;

function isMobile() {
  return window.innerWidth <= 768;
}

function closeAllPosters() {
  posters.forEach(p => p.classList.remove("active"));
  body.classList.remove("modal-open");
}

posters.forEach(poster => {
  const closeBtn = poster.querySelector(".close-btn");

  poster.addEventListener("click", e => {
    if (e.target.closest(".close-btn")) return;
    if (poster.classList.contains("active")) return;

    closeAllPosters();
    poster.classList.add("active");

    if (!isMobile()) {
      body.classList.add("modal-open");
    } else {
      poster.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  closeBtn.addEventListener("click", e => {
    e.stopPropagation();
    poster.classList.remove("active");
    body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeAllPosters();
  }
});

window.addEventListener("resize", closeAllPosters);
