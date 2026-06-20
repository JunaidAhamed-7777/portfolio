const CORRECT_HASH = '76CD21DB00B2A3EEE39DFF599AD245A3C5088395388942FDE3D2363DA968BC1A';

async function sha256Hex(str) {
    const encoded = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0').toUpperCase()).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home-button');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    const secretInput = document.getElementById('secret-code-input');
    const submitButton = document.getElementById('submit-secret-code');
    const codeMessage = document.getElementById('code-message');

    if (submitButton && secretInput && codeMessage) {
        submitButton.addEventListener('click', async () => {
            const code = secretInput.value.trim();
            secretInput.value = '';

            codeMessage.className = '';

            const inputHash = await sha256Hex(code);

            if (inputHash === CORRECT_HASH) {
                codeMessage.textContent = 'Secret Activated! Redirecting...';
                codeMessage.classList.add('success');
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