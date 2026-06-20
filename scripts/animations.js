document.addEventListener('DOMContentLoaded', () => {
    const chars = document.querySelectorAll('#default-display .char');
    const display = document.getElementById('default-display');

    let currentIndex = 0;
    let running = true;
    let loopTimeout = null;
    let pauseTimeout = null;

    function resetAllChars() {
        chars.forEach(char => {
            char.classList.remove('baroque-char');
            char.style.color = '';
        });
    }

    function clearAllTimeouts() {
        if (loopTimeout) {
            clearTimeout(loopTimeout);
            loopTimeout = null;
        }
        if (pauseTimeout) {
            clearTimeout(pauseTimeout);
            pauseTimeout = null;
        }
    }

    function stopLoop() {
        running = false;
        clearAllTimeouts();
    }

    function startLoop() {
        resetAllChars();
        currentIndex = 0;
        running = true;
        animateLoop();
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
            loopTimeout = setTimeout(animateLoop, 500);
        } else {
            loopTimeout = setTimeout(() => {
                resetAllChars();
                pauseTimeout = setTimeout(() => {
                    currentIndex = 0;
                    animateLoop();
                }, 1500);
            }, 500);
        }
    }

    display.addEventListener('mouseenter', () => {
        stopLoop();
    });

    chars.forEach(char => {
        char.addEventListener('mouseover', () => {
            if (!running) {
                resetAllChars();
                if (char.dataset.char !== ' ') {
                    char.classList.add('baroque-char');
                }
            }
        });
    });

    display.addEventListener('mouseleave', () => {
        resetAllChars();
        pauseTimeout = setTimeout(() => {
            startLoop();
        }, 500);
    });

    animateLoop();
});