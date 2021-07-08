const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressMarkers = document.querySelectorAll(".circle");

let currentActiveMarker = 1;

nextBtn.addEventListener("click", () => {
  currentActiveMarker++;

  if (currentActiveMarker > progressMarkers.length) {
    currentActiveMarker = progressMarkers.length;
  }

  updateProgress();
});

prevBtn.addEventListener("click", () => {
  currentActiveMarker--;

  if (currentActiveMarker < 1) {
    currentActiveMarker = 1;
  }

  updateProgress();
});

function updateProgress() {
  progressMarkers.forEach((marker, index) => {
    if (index < currentActiveMarker) {
      marker.classList.add("active");
    } else {
      marker.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (progressMarkers.length - 1)) * 100 + "%";

  if (currentActiveMarker === 1) {
    prevBtn.disabled = true;
  } else if (currentActiveMarker === progressMarkers.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
