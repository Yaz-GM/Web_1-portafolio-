function mostrarValores() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const orientacion = document.getElementById('orientacion').value;
  
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <h3>Datos ingresados:</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Contraseña:</strong> ${contrasena}</p>
      <p><strong>Orientación:</strong> ${orientacion}</p>
    `;
  }
  