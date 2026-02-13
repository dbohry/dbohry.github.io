const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - 2014;
const experienceElement = document.getElementById('years-experience');

if (experienceElement) {
    experienceElement.textContent = yearsExperience + '+';
}

// Avatar click-and-hold functionality
const avatarContainer = document.querySelector('.avatar-container');

if (avatarContainer) {
    let holdStartTime = null;

    // Mouse events
    avatarContainer.addEventListener('mousedown', () => {
        avatarContainer.classList.add('switched');
        holdStartTime = Date.now();
    });

    avatarContainer.addEventListener('mouseup', () => {
        if (holdStartTime) {
            const holdDuration = Date.now() - holdStartTime;
            if (holdDuration >= 10000) {
                document.body.classList.add('halloween-mode');
                const h1 = document.querySelector('h1');
                if (h1) {
                    h1.textContent = 'Daniel';
                }
                return;
            }
        }
        avatarContainer.classList.remove('switched');
        holdStartTime = null;
    });

    avatarContainer.addEventListener('mouseleave', () => {
        avatarContainer.classList.remove('switched');
        holdStartTime = null;
    });

    // Touch events for mobile
    avatarContainer.addEventListener('touchstart', (event) => {
        event.preventDefault();
        avatarContainer.classList.add('switched');
        holdStartTime = Date.now();
    });

    avatarContainer.addEventListener('touchend', () => {
        if (holdStartTime) {
            const holdDuration = Date.now() - holdStartTime;
            if (holdDuration >= 10000) {
                document.body.classList.add('halloween-mode');
                const h1 = document.querySelector('h1');
                if (h1) {
                    h1.textContent = 'Daniel';
                }
                return;
            }
        }
        avatarContainer.classList.remove('switched');
        holdStartTime = null;
    });

    // Keyboard interaction for accessibility
    avatarContainer.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            avatarContainer.classList.add('switched');
            holdStartTime = Date.now();
        }
    });

    avatarContainer.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            if (holdStartTime) {
                const holdDuration = Date.now() - holdStartTime;
                if (holdDuration >= 10000) {
                    document.body.classList.add('halloween-mode');
                    const h1 = document.querySelector('h1');
                    if (h1) {
                        h1.textContent = 'Daniel';
                    }
                    return;
                }
            }
            avatarContainer.classList.remove('switched');
            holdStartTime = null;
        }
    });
}