
document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    const bars = document.querySelectorAll('.bar');
    const prevButton = document.querySelector('.button:nth-of-type(1)');
    const nextButton = document.querySelector('.button:nth-of-type(2)');
    let currentIndex = 0;

    numbers.forEach((number, index) => {
        number.addEventListener('click', () => {
            clearSelection();
            number.classList.add('selected');
            updateBarColor(index);
            currentIndex = index;
        });
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            clearSelection();
            currentIndex--;
            numbers[currentIndex].classList.add('selected');
            updateBarColor(currentIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < numbers.length - 1) {
            clearSelection();
            currentIndex++;
            numbers[currentIndex].classList.add('selected');
            updateBarColor(currentIndex);
        }
    });

    function clearSelection() {
        numbers.forEach(number => number.classList.remove('selected'));
        bars.forEach(bar => bar.classList.remove('selected'));
    }

    function updateBarColor(index) {
        if(index > 0) {
            bars[index - 1].classList.add('selected');
        }
        for (let i = 0; i < index; i++) {
            numbers[i].classList.add('selected');
            if (i < index) {
                bars[i].classList.add('selected');
            }
        }
    }
});
