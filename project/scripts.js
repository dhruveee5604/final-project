document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple event listener for a button click
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message!');
        });
    }
});