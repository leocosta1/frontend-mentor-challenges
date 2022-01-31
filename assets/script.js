const techsList = {
  1: 'HTML',
  2: 'CSS',
  3: 'JS',
  4: 'API',
};

const difficultiesList = {
  1: 'Newbie',
  2: 'Junior',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Guru',
};

const projectsList = [];

projectsList.forEach(({ title, img, url, techs, difficulty }) => {
  const cardsContainer = document.querySelector('.main__cards');

  const card = document.createElement('li');
  card.classList.add('card');
  card.innerHTML = `
    <a href="${url}" target="_blank" class="card__content">
      <img
        src="${img}"
        alt="${title}"
        class="card__image"
      />

      <div class="card__overlay">
        <strong class="card__title">${title}</strong>

        <div class="card__techs">
        </div>

        <span class="card__badge card__badge--${difficulty}">
          <span class="card__num">${difficulty}</span>
          <span class="card__difficulty">${difficultiesList[difficulty]}</span>
        </span>
      </div>
    </a>
  `;

  techs.forEach((tech) => {
    const techsContainer = card.querySelector('.card__techs');

    const techEl = document.createElement('span');
    techEl.classList.add('card__tech', `card__tech--${tech}`);
    techEl.innerHTML = techsList[tech];

    techsContainer.appendChild(techEl);
  });

  cardsContainer.appendChild(card);
});
