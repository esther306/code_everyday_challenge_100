document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let triggerPoint = window.innerHeight * 0.8;

    function handleScroll() {
        boxes.forEach((box, index) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerPoint) {
                if (index % 2 === 0) {
                    box.classList.add('show-from-left');
                    box.classList.remove('content');
                } else {
                    box.classList.add('show-from-right');
                    box.classList.remove('content');
                }
            } else {
                box.classList.add('content');
                box.classList.remove('show-from-left', 'show-from-right');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
