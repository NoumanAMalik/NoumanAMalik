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
enhance("github-link-2");
enhance("linkedin-link");
enhance("linkedin-link-2");
