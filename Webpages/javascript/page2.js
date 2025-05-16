const textSpan = document.getElementById("textSpan");
const messages = ["EHR Systems", "Digital Health", "Patient Records", "Smart Clinics"];
let index = 0;

function changeText() {
  textSpan.classList.remove("show");

  setTimeout(() => {
    index = (index + 1) % messages.length;
    textSpan.textContent = messages[index];
    textSpan.classList.add("show");
  }, 500);
}

textSpan.classList.add("show");
setInterval(changeText, 3000);
