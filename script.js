const elements = document.querySelectorAll(
    ".card, .skill, .project-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach((element) => {
    element.classList.add("fade-in");
    observer.observe(element);
});

console.log("Portfolio Loaded Successfully");