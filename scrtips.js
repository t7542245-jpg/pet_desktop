const pet = document.getElementById("pet");

// posição inicial
let x = 50;
let y = window.innerHeight - 150;

// faz o pet se mover aleatoriamente
function movePet() {
  x += (Math.random() - 0.5) * 200; // movimento lateral
  y = window.innerHeight - 150; // mantém no "chão"

  // limita o movimento na tela
  if (x < 0) x = 0;
  if (x > window.innerWidth - 100) x = window.innerWidth - 100;

  pet.style.left = x + "px";
  pet.style.bottom = "50px";
}

setInterval(movePet, 2000);

// opcional: o pet segue o mouse
document.addEventListener("mousemove", (e) => {
  if (Math.random() < 0.1) {
    x = e.clientX - 50;
    pet.style.left = x + "px";
  }
});
