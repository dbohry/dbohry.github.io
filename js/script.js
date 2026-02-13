const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - 2014;
const experienceElement = document.getElementById('years-experience');

if (experienceElement) {
    experienceElement.textContent = yearsExperience + '+';
}

const possibleSentences = [
    "I build reliable, boring-in-the-best-way systems.",
    "I craft boring‑in‑the‑best‑way microservices that just work.",
    "I write code that's predictably predictable.",
    "I specialize in systems that don't wake you up at night.",
    "I build systems that are reliable, boring‑in‑the‑best‑way, and actually stay up on weekends.",
    "I specialise in building boring‑in‑the‑best‑way systems that just work, quietly and reliably.",
    "I turn requirements into reliable, boring‑in‑the‑best‑way systems that scale without drama.",
];

const subtleElement = document.querySelector('.subtle');
if (subtleElement) {
    const randomSentence = possibleSentences[Math.floor(Math.random() * possibleSentences.length)];
    subtleElement.textContent = randomSentence;
}

const avatarContainer = document.querySelector('.avatar-container');

if (avatarContainer) {
    let holdStartTime = null;

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