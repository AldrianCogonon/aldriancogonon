const posters = document.querySelectorAll("[data-poster]");
const body = document.body;

/* IMAGE FIX (GitHub-safe) */
posters.forEach(poster => {
  const img = poster.dataset.image;
  poster.style.setProperty(
    "--img",
    `url("asset/images/${img}")`
  );
});

function closeAll() {
  posters.forEach(p => p.classList.remove("active"));
  body.classList.remove("modal");
}

posters.forEach(poster => {
  const closeBtn = poster.querySelector(".close-btn");

  poster.addEventListener("click", () => {
    if (poster.classList.contains("active")) return;
    closeAll();
    poster.classList.add("active");
    body.classList.add("modal");
  });

  closeBtn.addEventListener("click", e => {
    e.stopPropagation();
    poster.classList.remove("active");
    body.classList.remove("modal");
  });
});

/* ESC KEY */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeAll();
});
