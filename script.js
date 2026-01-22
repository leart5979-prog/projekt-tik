const cards = document.querySelectorAll('.card');
const darkModeBtn = document.getElementById('darkModeToggle');

// Accordion functionality
cards.forEach(card => {
    const header = card.querySelector('.card-header');
    const body = card.querySelector('.card-body');

    header.addEventListener('click', () => {
        // mbyll të gjitha të tjerat
        cards.forEach(c => {
            if(c !== card) {
                c.querySelector('.card-body').style.display = 'none';
                c.classList.remove('open');
            }
        });

        // toggle këtë card
        if(body.style.display === 'block') {
            body.style.display = 'none';
            card.classList.remove('open');
        } else {
            body.style.display = 'block';
            card.classList.add('open');
        }
    });
});

// Dark mode toggle
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});