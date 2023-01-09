const img = document.querySelector("#img");
const buttons = document.querySelector("#buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
};

const nextIndex = () => {
  //colorIndex = colorIndex < 2 ? ++colorIndex : 0; igual do if e else, mas
  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopAutomatic = () => {
  clearInterval(intervalId);
};

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () =>
    (intervalId = setInterval(
      changeColor,
      1000
    )) /*o setInterval quer dizer que ele vai ficar executando determinado função até que alguém aperte o pause, a cada seg, mas como o JS lê milisegundo, colocamos 1000 milisegundo que significa 1 seg-- o setTimeout vai trocar aa função uma unica vez*/,
};

buttons.addEventListener("click", trafficLight);
