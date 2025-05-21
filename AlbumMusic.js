 console.log("js loaded");
 const imgarray = [
      "./img/supersonic.jpg",
      "./img/dm.jpg",
      "./img/lovebomb.jpg",
      "./img/staythisway.jpg",
      "./img/wego.jpg"
    ];

    const musicText = [
      "♬ fromis_9 - Supersonic ♬",
      "♬ fromis_9 - DM ♬",
      "♬ fromis_9 - LoveBomb ♬",
      "♬ fromis_9 - Stay This Way ♬",
      "♬ fromis_9 - We Go ♬"
    ];

    const music = [
      "./music/fromis_9_Supersonic.mp3",
      "./music/fromis_9_DM.mp3",
      "./music/fromis_9_LOVE BOMB.mp3",
      "./music/fromis_9_Stay This Way.mp3",
      "./music/fromis_9_WE GO.mp3"
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById("mainImg");
    const muiscTitle = document.getElementById("Text");
    const audioElement = document.getElementById("audio");
    const audioSource = audioElement.querySelector("source");
    const playPauseBtn = document.getElementById("playPause");

    const timeDisplay = document.getElementById("timeDisplay");
    const progressContainer = document.getElementById("progressContainer");
    const progressBar = document.getElementById("progressBar");

    function formatTime(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }

    function updateTime() {
      const current = audioElement.currentTime;
      const duration = audioElement.duration || 0;
      timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
    }

    function updateProgressBar() {
      const percent = (audioElement.currentTime / audioElement.duration) * 100;
      progressBar.style.width = `${percent}%`;
    }

    progressContainer.addEventListener("click", function (e) {
      const rect = progressContainer.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percent = offsetX / rect.width;
      audioElement.currentTime = percent * audioElement.duration;
    });

    audioElement.addEventListener("loadedmetadata", () => {
      updateTime();
      updateProgressBar();
    });

    audioElement.addEventListener("timeupdate", () => {
      updateTime();
      updateProgressBar();
    });

    function updateAll() {
      imgElement.src = imgarray[currentIndex];
      muiscTitle.innerHTML = musicText[currentIndex];
      audioSource.src = music[currentIndex];
      audioElement.load();
      audioElement.play();
      playPauseBtn.setAttribute("src", "./img/pause.png");
    }

    document.getElementById("firstBtn").onclick = function () {
      if (currentIndex === 0) {
        alert("첫 번째 이미지입니다.");
      } else {
        currentIndex = 0;
        updateAll();
      }
    };

    document.getElementById("prevBtn").onclick = function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateAll();
      } else {
        alert("첫 번째 이미지입니다.");
      }
    };

    document.getElementById("nextBtn").onclick = function () {
      if (currentIndex < imgarray.length - 1) {
        currentIndex++;
        updateAll();
      } else {
        alert("마지막 이미지입니다.");
      }
    };

    document.getElementById("lastBtn").onclick = function () {
      if (currentIndex === imgarray.length - 1) {
        alert("마지막 이미지입니다.");
      } else {
        currentIndex = imgarray.length - 1;
        updateAll();
      }
    };

    const tooltipItems = document.querySelectorAll(".tooltiptext p");
    for (let i = 0; i < tooltipItems.length; i++) {
      tooltipItems[i].onclick = function () {
        currentIndex = i;
        updateAll();
      };
    }

    function playPause() {
      if (audioElement.paused) {
        audioElement.play();
        playPauseBtn.setAttribute("src", "./img/pause.png");
      } else {
        audioElement.pause();
        playPauseBtn.setAttribute("src", "./img/play.png");
      }
    }

    function stopMusic() {
      audioElement.pause();
      audioElement.currentTime = 0;
      playPauseBtn.setAttribute("src", "./img/play.png");
    }