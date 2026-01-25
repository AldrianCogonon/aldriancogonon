<script>
  const posters = document.querySelectorAll('[data-poster]');
  const body = document.body;

  posters.forEach(poster => {
    poster.addEventListener('click', () => {
      poster.classList.add('active');
      body.classList.add('modal-open');
    });

    poster.querySelector('.close-btn')?.addEventListener('click', e => {
      e.stopPropagation();
      poster.classList.remove('active');
      body.classList.remove('modal-open');
    });
  });
</script>
