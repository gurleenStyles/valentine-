document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const proposal = document.getElementById('proposal');
    const success = document.getElementById('success');

    const moveNoButton = () => {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    };

    const handleYes = () => {
        proposal.classList.add('hidden');
        success.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = 'gallery.html';
        }, 2000);
    };

    noBtn.addEventListener('mouseover', moveNoButton);
    yesBtn.addEventListener('click', handleYes);
});