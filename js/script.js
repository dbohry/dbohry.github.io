const currentYear = new Date().getFullYear();
const yearsExperience = currentYear - 2014;

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

const subtitles = [
    `Building reliable, boring-in-the-best-way systems for ${yearsExperience}+ years.`,
    "I build reliable, boring-in-the-best-way systems. You can call me Daniel :)",
    "I craft boring-in-the-best-way microservices that just work.",
    "I write code that's predictably predictable.",
    "I specialize in systems that don't wake you up at night.",
    "I build systems that are reliable, boring-in-the-best-way, and actually stay up on weekends.",
    "I specialise in building boring-in-the-best-way systems that just work, quietly and reliably.",
    "I turn requirements into reliable, boring-in-the-best-way systems that scale without drama.",
];
const subtitleEl = document.getElementById("subtitle");

function pickSubtitle(current) {
    let next = subtitles[Math.floor(Math.random() * subtitles.length)];
    while (next === current && subtitles.length > 1) {
        next = subtitles[Math.floor(Math.random() * subtitles.length)];
    }
    return next;
}

if (subtitleEl) {
    subtitleEl.textContent = pickSubtitle();
    subtitleEl.addEventListener("click", () => {
        subtitleEl.textContent = pickSubtitle(subtitleEl.textContent);
    });
}

const avatarContainer = document.querySelector(".avatar-container");

if (avatarContainer) {
    let holdStartTime = null;

    function startHold() {
        avatarContainer.classList.add("switched");
        holdStartTime = Date.now();
    }

    function endHold() {
        const held = holdStartTime ? Date.now() - holdStartTime : 0;
        if (held >= 10000) {
            document.body.classList.remove("game-mode");
            document.body.classList.add("glitch-mode");
            const h1 = document.querySelector("h1");
            if (h1) h1.textContent = "Daniel";
            return;
        }
        if (held >= 2000) document.body.classList.toggle("game-mode");
        avatarContainer.classList.remove("switched");
        holdStartTime = null;
    }

    avatarContainer.addEventListener("mousedown", startHold);
    avatarContainer.addEventListener("mouseup", endHold);
    avatarContainer.addEventListener("mouseleave", () => {
        avatarContainer.classList.remove("switched");
        holdStartTime = null;
    });
    avatarContainer.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startHold();
    });
    avatarContainer.addEventListener("touchend", endHold);
    avatarContainer.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            startHold();
        }
    });
    avatarContainer.addEventListener("keyup", (e) => {
        if (e.key === "Enter" || e.key === " ") endHold();
    });
}
