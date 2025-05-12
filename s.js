const contenedor = document.getElementById("botones");
const contador = document.getElementById("contador");
let n = 40;
let tachados = JSON.parse(localStorage.getItem("figuritasTachadas")) || [];

n -= tachados.length;
contador.textContent = `Te quedan ${n} figuritas`;

for (let i = 0; i < 40; i++) {
  const boton = document.createElement("button");
  boton.className = "boton";
  boton.textContent = i + 1;

  if (tachados.includes(i)) {
    boton.classList.add("tachado");
  }

  boton.addEventListener("click", () => {
    if (!boton.classList.contains("tachado")) {
      n--;
      boton.classList.add("tachado");
      tachados.push(i);
    } else {
      n++;
      boton.classList.remove("tachado");
      tachados = tachados.filter(num => num !== i); 
    }
    contador.textContent = `Te quedan ${n} figuritas`;
    localStorage.setItem("figuritasTachadas", JSON.stringify(tachados));
  });
  contenedor.appendChild(boton);
}
