const enhance = (id) => {
    const element = document.getElementById(id);
    const text = element.innerText.split("");
    element.innerText = "";

    text.forEach((letter) => {
        const span = document.createElement("span");

        span.className = "letter";

        span.innerText = letter;

        element.appendChild(span);
    });
};

enhance("github-link");
enhance("linkedin-link");

document.addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener("scroll", (event) => {
        const animatedSections =
            document.getElementsByClassName("animated-section");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedSections, (animatedSection) => {
            const animatedSectionOffsetTop = animatedSection.offsetTop;

            if (windowOffsetTop >= animatedSectionOffsetTop) {
                addClass(animatedSection, "fade-in");
            }
        });
    });
});

const addClass = (element, className) => {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
};
