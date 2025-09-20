window.onload = function() {
    const output = document.getElementById('output');
    const cursorTrail = document.createElement('div');
    document.body.appendChild(cursorTrail);

    const messages = [
        '[BOOT] Initializing system...',
        '[OK] Loading kernel modules...',
        '[OK] Mounting /portfolio...',
        '[OK] Starting UI service...',
        'Welcome ArtOS! Enter "help" to get list of commands.'
    ];

    let messageIndex = 0;

    function showNextMessage() {
        if (messageIndex < messages.length) {
            const messageDiv = document.createElement('div');
            messageDiv.textContent = messages[messageIndex];
            output.appendChild(messageDiv);

            messageIndex++;
            setTimeout(showNextMessage, 1000); // затримка між повідомленнями
        } else {
            // створюємо чорний екран
            const blackScreen = document.createElement('div');
            blackScreen.style.position = 'fixed';
            blackScreen.style.top = '50%';
            blackScreen.style.left = '50%';
            blackScreen.style.width = '0';
            blackScreen.style.height = '0';
            blackScreen.style.background = '#000';
            blackScreen.style.zIndex = '9999';
            blackScreen.style.transform = 'translate(-50%, -50%) scale(0)';
            blackScreen.style.transformOrigin = 'center';
            blackScreen.style.transition = 'transform 0.5s ease-out';
            document.body.appendChild(blackScreen);

            // запуск анімації
            setTimeout(() => {
                blackScreen.style.transform = 'translate(-50%, -50%) scale(1)';
                blackScreen.style.width = '100%';
                blackScreen.style.height = '100%';
            }, 50);

            // редірект після завершення анімації
            setTimeout(() => {
                window.location.href = 'system.html';
            }, 600);
        }
    }

    showNextMessage();

    // Cursor trail
    document.addEventListener('mousemove', function(event) {
        const trailElement = document.createElement('div');
        trailElement.textContent = Math.random() > 0.5 ? '0' : '1';
        trailElement.style.position = 'absolute';
        trailElement.style.left = `${event.pageX}px`;
        trailElement.style.top = `${event.pageY}px`;
        trailElement.style.color = '#00fff7';
        trailElement.style.fontFamily = 'monospace';
        trailElement.style.fontSize = '10px';
        trailElement.style.opacity = '0.5';
        trailElement.style.pointerEvents = 'none';
        trailElement.style.transition = 'all 0.5s linear';

        cursorTrail.appendChild(trailElement);

        setTimeout(() => {
            trailElement.remove();
        }, 500);
    });
};
