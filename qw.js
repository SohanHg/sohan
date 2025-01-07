// Example: Display an alert when clicking on the LinkedIn link
document.querySelector('a[href="#"]').addEventListener('click', function (event) {
    event.preventDefault();
    alert('LinkedIn profile coming soon!');
});
