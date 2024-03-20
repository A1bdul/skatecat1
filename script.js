const video = document.querySelector('.bg-video');

video.addEventListener('loadeddata', function() {
    const duration = video.duration;
    const screenHeight = window.innerHeight;

    function loop() {
        if (video.currentTime >= duration - 0.1)
            video.currentTime = 0;
    }

    function floatVideo() {
        const videoPosition = (window.pageYOffset / screenHeight) * duration;
        video.currentTime = videoPosition;
    }

    window.addEventListener('scroll', floatVideo);
    setInterval(loop, 100);
    floatVideo(); // Call floatVideo initially to set the video's position
});
