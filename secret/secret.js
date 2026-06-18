document.addEventListener('DOMContentLoaded', () => {
    // Home button
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    // Secret code submission
    const secretInput = document.getElementById('secret-code-input');
    const submitButton = document.getElementById('submit-secret-code');
    const codeMessage = document.getElementById('code-message');

    if (submitButton && secretInput && codeMessage) {
        submitButton.addEventListener('click', () => {
            const code = secretInput.value.trim();
            // Clear input first
            secretInput.value = '';

            // Reset message classes
            codeMessage.className = '';

            if (code === 'playlist') {
                codeMessage.textContent = 'Secret Activated! Redirecting...';
                codeMessage.classList.add('success');
                // Redirect to Spotify in new tab after a short delay
                setTimeout(() => {
                    window.open('https://open.spotify.com/playlist/2x67eFjtZh3MKbHBo8ZHbw?si=ea2af1800ab14bed', '_blank');
                }, 500);
            } else {
                codeMessage.textContent = 'Invalid Code';
                codeMessage.classList.add('error');
            }
        });
    }
});