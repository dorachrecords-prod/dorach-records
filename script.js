const audio = document.getElementById("audio")

const tracks = document.querySelectorAll(".track")

tracks.forEach(track => {

track.querySelector(".play-btn").addEventListener("click", () => {

const src = track.getAttribute("data-src")

audio.src = src

audio.play()

})

})