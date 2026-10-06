const range = document.getElementById("rng");
const device = document.getElementById("dev");

function updateReveal() {
  device.style.setProperty("--p", range.value + "%");
}

range.addEventListener("input", updateReveal);
updateReveal();
