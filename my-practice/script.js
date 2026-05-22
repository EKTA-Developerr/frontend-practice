let music = document.getElementById("bg-music");
let btn = document.getElementById("playBtn");
let volume = document.getElementById("volume");

/* ▶️ Play / Pause */
btn.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        btn.innerText = "Pause ⏸️";
    } else {
        music.pause();
        btn.innerText = "Play 🎵";
    }
});

/* 🔊 Volume Control */
volume.addEventListener("input", function() {
    music.volume = volume.value;
});

/* 👇 Scroll Reveal */
window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});