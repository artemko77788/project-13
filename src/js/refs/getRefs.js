function getRefs() {
  return {
    // Header
    homeLink: document.querySelectorAll('[data-home]'),
    libraryLink: document.querySelector('[data-library]'),
    libraryWatched: document.querySelector('[data-watched]'),
    libraryQueue: document.querySelector('[data-queue]'),
    form: document.querySelector('.form'),
    header: document.querySelector('.header'),
    buttons: document.querySelector('.library'),
    //Spinner
    spinner: document.querySelector('.load-spinner'),
    closeModalBtn: document.querySelector('.closeModal'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
    //Api Service
    searchForm: document.querySelector('.form'),
    galleryList: document.querySelector('.gallery'),
  };
}

export default getRefs;
