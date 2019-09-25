const now = new Date();
let releaseDate = new Date("December 11, 2020 00:00:00");
let daysAway = Math.round(Math.abs(releaseDate - now) / 60 / 60 / 24 / 1000);
document.getElementById(
  "countdown"
).innerText = `Only ${daysAway} days until Bobby Shmurda is released`;
