const projectsList = [
    {
        name: 'Single Price Grid Component',
        image: 'challenges/single-price-grid-component-master/design/desktop-design.jpg',
        link: 'challenges/single-price-grid-component-master/index.html',
        section: 'newbie'
    },
    {
        name: 'Profile Card Component',
        image: 'challenges/profile-card-component-main/design/desktop-design.jpg',
        link: 'challenges/profile-card-component-main/index.html',
        section: 'newbie'
    }
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