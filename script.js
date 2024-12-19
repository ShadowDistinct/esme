const starfield = document.querySelector('.starfield');

// Generate Stars
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  if (Math.random() > 0.8) star.classList.add('large'); // Larger stars for variety
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  starfield.appendChild(star);
}

// Generate Shooting Stars
setInterval(() => {
  const shootingStar = document.createElement('div');
  shootingStar.classList.add('shooting-star');
  shootingStar.style.top = `${Math.random() * 50}%`;
  shootingStar.style.left = `${Math.random() * 100}%`;
  starfield.appendChild(shootingStar);
  setTimeout(() => shootingStar.remove(), 2000); // Remove after animation
}, 1000);
