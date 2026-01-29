const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - 2014;
const experienceElement = document.getElementById('years-experience');

if (experienceElement) {
    experienceElement.textContent = yearsExperience + '+';
}

// Avatar click-and-hold functionality
const avatarContainer = document.querySelector('.avatar-container');

if (avatarContainer) {
    // Mouse events
    avatarContainer.addEventListener('mousedown', () => {
        avatarContainer.classList.add('switched');
    });

    avatarContainer.addEventListener('mouseup', () => {
        avatarContainer.classList.remove('switched');
    });

    avatarContainer.addEventListener('mouseleave', () => {
        avatarContainer.classList.remove('switched');
    });

    // Touch events for mobile
    avatarContainer.addEventListener('touchstart', (event) => {
        event.preventDefault();
        avatarContainer.classList.add('switched');
    });

    avatarContainer.addEventListener('touchend', () => {
        avatarContainer.classList.remove('switched');
    });

    // Keyboard interaction for accessibility
    avatarContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            avatarContainer.classList.add('switched');
        }
    });

    avatarContainer.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            avatarContainer.classList.remove('switched');
        }
    });
}