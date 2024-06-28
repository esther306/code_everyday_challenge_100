
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const audios = document.querySelectorAll('audio');

    buttons.forEach(button => {
        const audioId = button.getAttribute('data-audio');
        const audioElement = document.getElementById(audioId);

        button.addEventListener('mouseover', function () {
            audios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
            audioElement.play();
        });

        button.addEventListener('mouseleave', function () {
            audioElement.pause();
            audioElement.currentTime = 0;
        });

        button.addEventListener('click', function () {
            if (audioElement.paused) {
                audios.forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });
                audioElement.play();
            } else {
                audioElement.pause();
            }
        });
    });
});
