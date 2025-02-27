document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.querySelector('.heart-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart-shape');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
