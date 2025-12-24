function creer_flocon() {
    const flocon = document.createElement('div');
    flocon.classList.add('flocon');
    flocon.style.left = Math.random() * 100 + 'vw';
    flocon.style.animationDuration = (Math.random() * 3 + 2) + 's';
    flocon.textContent = '❄';

    document.body.appendChild(flocon);
    flocon.addEventListener('animationend', function() {
        flocon.remove();
    });
}


setInterval(creer_flocon,100);


