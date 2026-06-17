// DOMs
const form = document.getElementById("feedback-form");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const message = document.getElementById("message");
const feedbackDisplay = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");

// The Counter
comments.addEventListener("input", () => {
    charCount.textContent = `Characters: ${comments.value.length}`;
});

// Event Inputs
form.addEventListener("mouseover", (event) => {
    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        tooltip.style.display = "block";

        switch (event.target.id) {
            case "name":
                tooltip.textContent = "Enter your full name";
                break;

            case "email":
                tooltip.textContent = "Enter an email address";
                break;

            case "comments":
                tooltip.textContent = "Provide feedback here";
                break;
        }

        tooltip.style.left = event.pageX + 8 + "px";
        tooltip.style.top = event.pageY + 8 + "px";
    }
});
