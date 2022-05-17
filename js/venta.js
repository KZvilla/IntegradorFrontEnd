const PRECIO = 200;
const DESCUENTOS = [0.8, 0.5, 0.15];
const CATEGORIA = ["estudiante", "trainee", "junior"];
let color = document.getElementById("categoria");
color.addEventListener("change", (e) => {
  let addNormalBorder = (str) => {
    document.getElementById(str).classList.remove("border-warning");
    document.getElementById(str).classList.add("border-primary");
  };
  let value = e.target.value;
  if (value === "1") {
    document.getElementById("estudiante").classList.remove("border-primary");
    document.getElementById("estudiante").classList.add("border-warning");
    addNormalBorder("trainee");
    addNormalBorder("junior");
  } else if (value === "2") {
    document.getElementById("trainee").classList.remove("border-primary");
    document.getElementById("trainee").classList.add("border-warning");
    addNormalBorder("estudiante");
    addNormalBorder("junior");
  } else if (value === "3") {
    document.getElementById("junior").classList.remove("border-primary");
    document.getElementById("junior").classList.add("border-warning");
    addNormalBorder("estudiante");
    addNormalBorder("trainee");
  } else {
    addNormalBorder("estudiante");
    addNormalBorder("trainee");
    addNormalBorder("junior");
  }
});
function resumen() {
  let categoria = document.getElementById("categoria").value;
  let cantidad = document.getElementById("cantidad").value;
  let desc = DESCUENTOS[categoria - 1];
  console.log(desc);
  console.log(cantidad);
  console.log(categoria);
  const totalPagar = document.getElementById("totalPagar");
  if (desc === undefined) {
    totalPagar.textContent = `Debe completar los campos requeridos`;
    document.getElementById("totalPagar").classList.remove("alert-primary");
    document.getElementById("totalPagar").classList.add("alert-danger");
  } else {
    totalPagar.textContent = `Total a Pagar: $${
      (PRECIO - PRECIO * desc) * cantidad
    }`;
    document.getElementById("totalPagar").classList.add("alert-primary");
    document.getElementById("totalPagar").classList.remove("alert-danger");
  }
}
