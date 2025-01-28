// Get references to the image and sound
const image = document.getElementById('hover-image');
const sound = document.getElementById('hover-sound');

// Add an event listener for the hover (mouseenter) event
image.addEventListener('mouseenter', () => {
    sound.currentTime = 0; // Reset the sound to the beginning
    sound.play(); // Play the sound
});
