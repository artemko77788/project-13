import getRefs from '../refs/getRefs.js';

const { closeModalBtn, backdrop, modal } = getRefs();

const handleEsc = e => {
  if (e.key === 'Escape') {
    backdrop.classList.add('visually-hidden');
    window.removeEventListener('keydown', handleEsc);
  }
};

const close = e => {
  if (e.target === e.currentTarget) {
    backdrop.classList.add('visually-hidden');
  }
};

closeModalBtn.addEventListener('click', () => {
  backdrop.classList.add('visually-hidden');
});

backdrop.addEventListener('click', close);

window.addEventListener('keydown', handleEsc);

export function makeModal({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) {
  return `<div class="modal-film-card">
  
  <div class="modal-film-card_imageContainer">
    <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="film picture" class="film-card_image" />
  </div>

  <div class="modal-film-card_descriptionContainer">
    <h2 class="modal-film-card_title">${title}</h2>

    <ul class="modal-film-card-list">
      <li class="modal-film-card-list_item">
        <p class="modal-film-card-list_title">Vote / Votes</p>
        <p>
          <span class="modal-film-card-list_text modal-film-card-list_text-colorOrange">${vote_average}</span>
          <span class="modal-film-card-list_text">/</span>
          <span class="modal-film-card-list_text modal-film-card-list_text-colorGrey">${vote_count}</span>
        </p>
      </li>
      <li class="modal-film-card-list_item">
        <p class="modal-film-card-list_title">Popularity</p>
        <p class="modal-film-card-list_text">${popularity}</p>
      </li>
      <li class="modal-film-card-list_item">
        <p class="modal-film-card-list_title">Original Title</p>
        <p class="modal-film-card-list_text">${original_title}</p>
      </li>
      <li class="modal-film-card-list_item">
        <p class="modal-film-card-list_title">Genre</p>
        <p class="modal-film-card-list_text">${genres}</p>
      </li>
    </ul>

    <h2 class="modal-film-card_about">About</h2>
    <p class="modal-film-card_text">
    ${overview}
    </p>

    <ul class="button-list">
      <li>
        <button type="button" class="button-list_buttonStyle film-card-button_watched">
          add to Watched
        </button>
      </li>
      <li>
        <button type="button" class="button-list_buttonStyle film-card-button_queue">
          add to queue
        </button>
      </li>
    </ul>
  </div>
</div>
`;
}

modal.insertAdjacentHTML('beforeend', makeModal({}));
