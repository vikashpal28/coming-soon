let countDown = new Date("Feb 26,2025 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDown - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("second").innerHTML = second;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
  }
}, 1000);
