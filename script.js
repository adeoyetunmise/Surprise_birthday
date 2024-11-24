// Function to generate random confetti
const createConfetti = () => {
    const container = document.getElementById('confetti-container');
    const confetti = document.createElement('div');
    confetti.className = 'confetti';

    // Randomize position, size, and color
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 5000);
  };

  // Generate confetti at intervals
  setInterval(createConfetti, 200);