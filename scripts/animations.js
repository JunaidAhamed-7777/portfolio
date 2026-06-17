document.addEventListener('DOMContentLoaded', () => {
    // Select all .char elements inside #default-display
    const chars = document.querySelectorAll('#default-display .char');
    
    // Create style element for baroque-char class
    const style = document.createElement('style');
    style.textContent = `
        .baroque-char {
            background: linear-gradient(45deg, gold, #8b5a2b, #d4af37, #c5a059);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            text-shadow: none;
        }
    `;
    document.head.appendChild(style);
    
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
            setTimeout(() => {
                currentIndex = 0;
                resetAllChars();
                animateLoop();
            }, 1500);
        }
    }
    
    // Start the animation
    animateLoop();
});