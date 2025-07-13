window.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("play");
    const progress = document.querySelector(".progress");
    const current = document.querySelector(".current");
    const total = document.querySelector(".total");
  
    // Toggle Play/Pause
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playBtn.style.opacity = 0.5; // visual cue
      } else {
        audio.pause();
        playBtn.style.opacity = 1;
      }
    });
  
    // Update total duration when metadata is loaded
    audio.addEventListener("loadedmetadata", () => {
      total.textContent = (audio.duration / 60).toFixed(2);
    });
  
    // Update progress bar and current time
    audio.addEventListener("timeupdate", () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.value = percent;
      current.textContent = (audio.currentTime / 60).toFixed(2);
    });
  
    // Allow user to change song position
    progress.addEventListener("input", () => {
      audio.currentTime = (progress.value / 100) * audio.duration;
    });
  });
  