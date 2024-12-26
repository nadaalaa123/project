document.querySelector('.feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Create a confirmation message
    const confirmation = document.createElement('div');
    confirmation.textContent = 'Thank you for your feedback!';
    confirmation.style.cssText = `
        background: #4CAF50;
        color: white;
        padding: 15px;
        border-radius: 5px;
        margin-top: 20px;
        font-size: 1.2rem;
        text-align: center;
        animation: fadeIn 0.5s ease-in-out;
    `;

    this.after(confirmation);

    // Clear form fields
    this.reset();

    // Remove message after 5 seconds
    setTimeout(() => confirmation.remove(), 5000);
});