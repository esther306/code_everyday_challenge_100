const myElement = document.getElementById('myElement');
const percentageText = document.getElementById('percentage');
let startTime = null;

function updatePercentage(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(100, (progress / 10000) * 100);
    percentageText.textContent = `${Math.floor(percentage)}%`;
    myElement.style.opacity = percentage / 100;
    myElement.style.filter = `blur(${10 - (percentage / 10)}px)`;

    if (progress < 10000) {
        requestAnimationFrame(updatePercentage);
    } else{
        percentageText.style.display = 'none';
    }
}
// Start the animation
requestAnimationFrame(updatePercentage);
