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

// No Mouse on Input or Textarea, Go Away
form.addEventListener("mouseout", (event) => {
    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        tooltip.style.display = "none";
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = comments.value.trim();
    
    // Fill the Stuff Out!
    if (!name || !email || !comment) {
        message.textContent = "All fields are required.";
        return;
    }

    message.textContent = "";

    const feedbackEntry = document.createElement("div");
    feedbackEntry.classList.add("feedback-entry");

    feedbackEntry.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p>${comment}</p>
    `;

    feedbackDisplay.appendChild(feedbackEntry);

    form.reset();
    charCount.textContent = "Characters: 0";
});

// Prevent background clicks from triggering form-related events using stopPropagation()
document.body.addEventListener("click", () => {
    console.log("Background clicked");
});

form.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Sample Keyboard Event
document.getElementById("name").addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});
