const sounds = document.querySelectorAll(".sounds");

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.classList.add("btn");

  btn.innerText = `${sound.id}`;

  btn.addEventListener("click", () => {
      stopSounds();
    sound.play();
  });

  document.getElementById("buttons").append(btn);
});


function stopSounds(){
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    })
}
