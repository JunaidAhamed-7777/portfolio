document.addEventListener('DOMContentLoaded', () => {
    // Home button
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }
});