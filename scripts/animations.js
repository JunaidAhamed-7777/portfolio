document.addEventListener('DOMContentLoaded', () => {
    // Select all .char elements inside #default-display
    const chars = document.querySelectorAll('#default-display .char');
    
    let currentIndex = 0;
    let running = true;
    
    function resetAllChars() {
        chars.forEach(char => {
            char.classList.remove('baroque-char');
            char.style.color = '';
        });
    }
    
    function animateLoop() {
        if (!running) return;
        
        resetAllChars();
        
        const currentChar = chars[currentIndex];
        if (currentChar && currentChar.dataset.char !== ' ') {
            currentChar.classList.add('baroque-char');
        }
        
        if (currentIndex < chars.length - 1) {
            currentIndex++;
            setTimeout(animateLoop, 500);
        } else {
            // At last letter: let it glow for 0.5s, then turn off, wait 1.5s, restart
            setTimeout(() => {
                resetAllChars();  // Turn off the last letter's glow
                setTimeout(() => {
                    currentIndex = 0;
                    animateLoop();  // Restart from the first letter
                }, 1500);
            }, 500);
        }
    }
    
    // Start the animation
    animateLoop();
});