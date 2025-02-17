window.onload = function() {
    const output = document.getElementById('output');
    const commandInput = document.getElementById('commandInput');
    const screenElement = document.querySelector('.screen');
    const cursorTrail = document.createElement('div');
    document.body.appendChild(cursorTrail);

    const messages = [
        '',
        'Initializing system...',
        'System ready',
        'Welcome ArtOS! Enter "help" to get list of commands.'
    ];

    let messageIndex = 0;

    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '=')) {
            event.preventDefault();
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            screenElement.classList.add('hide-lines');
        } else {
            screenElement.classList.remove('hide-lines');
        }
    });

    function showNextMessage() {
        if (messageIndex < messages.length) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('loading-message');
            messageDiv.textContent = messages[messageIndex];
            output.appendChild(messageDiv);

            messageDiv.style.display = 'inline-block';
            messageDiv.style.animation = 'messageTyping 3s forwards';
            messageDiv.style.opacity = '1';

            messageIndex++;
            setTimeout(showNextMessage, 3000);
        } else {
            setTimeout(() => {
                const terminal = document.querySelector('.terminal');
                terminal.style.opacity = '1';
                terminal.style.animation = 'none';
            }, 500);
        }
    }

    showNextMessage();

    commandInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const command = commandInput.value.trim();

            if (command) {
                const userCommandDiv = document.createElement('div');
                userCommandDiv.textContent = `> ${command}`;
                output.appendChild(userCommandDiv);

                processCommand(command);

                commandInput.value = '';
            }
        }
    });

    function processCommand(command) {
        let response = '';

        switch (command.toLowerCase()) {
            case 'help':
                response = 'List of available commands:\n- telegram\n- fiverr\n- youtube\n- spigot\n- deviant\n- creator\n- falatia';
                break;
            case 'ls':
                response = './readme.txt';
                break;
            case 'nano readme.txt':
                response = `
                    <pre>
Pulksten is a answer.
                    </pre>
                `;
                break;
            case 'pulksten':
                response = "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' target='_blank'>???</a>";
                break;
            case 'creator':
                response = 'ArtOS version 1.1 created by MrZ3NE owner of this all pages and arts';
                break;
            case 'fiverr':
                response = "Fiverr: <a href='https://www.fiverr.com/s/e6VeGZm' target='_blank'>*Click*</a>";
                break;
            case 'telegram':
                response = "Telegram Store: <a href='https://t.me/kantora_zeina' target='_blank'>*Click*</a>";
                break;
            case 'deviant':
                response = "DeviantArt: <a href='https://www.deviantart.com/happymrz3ne' target='_blank'>*Click*</a>";
                break;
            case 'spigot':
                response = "Spigot.MC: <a href='https://www.spigotmc.org/members/happy_z3ne.1511129/' target='_blank'>*Click*</a>";
                break;
            case 'youtube':
                response = "YouTube Channel: <a href='https://www.youtube.com/channel/UCOavutipDDChf83KDWejEpg' target='_blank'>*Click*</a>";
                break;
           case 'falatia':
                response = "Falatia Project: <a href='https://falatia.fun' target='_blank'>*Click*</a>";
                break;
            case 'eye':
                response = `
                    <pre>
             IT ALWAYS WATCHING YOU
                      ░░░░
                  ░░░░░░░░░░░░
                ░░░░░░    ░░░░░░
              ░░░░            ░░░░
          ░░░░░░      ░░░░      ░░░░░░
        ░░░░░░      ░░░░░░░░      ░░░░░░
        ░░░░░░      ░░░░░░░░      ░░░░░░
          ░░░░░░      ░░░░      ░░░░░░
              ░░░░            ░░░░
                ░░░░░░    ░░░░░░
                  ░░░░░░░░░░░░
                      ░░░░
                    </pre>
                `;
                break;
            default:
                response = `Command not found: ${command}`;
                break;
        }

        const responseDiv = document.createElement('div');
        responseDiv.innerHTML = response;
        output.appendChild(responseDiv);

        output.scrollTop = output.scrollHeight;
    }

    document.addEventListener('mousemove', function(event) {
        createCursorTrail(event.pageX, event.pageY);
    });

    function createCursorTrail(x, y) {
        const trailElement = document.createElement('div');
        trailElement.classList.add('cursor-trail');
        trailElement.textContent = Math.random() > 0.5 ? '0' : '1';
        trailElement.style.left = `${x}px`;
        trailElement.style.top = `${y}px`;
        
        cursorTrail.appendChild(trailElement);

        setTimeout(() => {
            trailElement.remove();
        }, 500);
    }
};
