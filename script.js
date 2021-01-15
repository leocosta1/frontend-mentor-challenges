const projectsList = [
    {
        name: 'Single Price Grid Component',
        image: 'single-price-grid-component-master/design/desktop-design.jpg',
        link: 'single-price-grid-component-master/index.html',
        section: 'newbie'
    },
];


projectsList.forEach(({ name, image, link, section }) => {
    const card = document.createElement('li');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-img">
            <a href="${link}" target="_blank">
                <img src="${image}" alt="Project Preview">
            </a>
        </div>
        <div class="card-content">
            <h3>${name}</h3>
            <a href="${link}" target="_blank">View Solution</a>
        </div>
    `;

    document.getElementById(`${section}-section`).appendChild(card);
});