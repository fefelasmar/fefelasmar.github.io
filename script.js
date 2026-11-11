
// Animação de entrada das seções

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll('.section, .quote-section').forEach(section => {

    section.classList.add('reveal');
    observer.observe(section);

});


// Menu: destaca a seção atual

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${current}`
        );

    });

});
