document.getElementById("tip-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const porcentaje = parseFloat(document.getElementById("tip").value);
  
    const propina = subtotal * (porcentaje / 100);
    const totalConPropina = subtotal + propina;
  
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>Propina: $${propina.toFixed(2)}</p>
      <p>Total a pagar: $${totalConPropina.toFixed(2)}</p>
    `;
  });
  