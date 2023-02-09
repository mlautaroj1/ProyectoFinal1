

// document.getElementById('abrir').addEventListener('click', function() {
//     document.getElementsById('datos').style.display = 'none';    
// })

function mostrar() {
    let x = document.getElementsByClassName('fecha');
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById('cerrar').innerHTML = "Mostrar datos"
    } else {
      x.style.display = "none";
      document.getElementById('cerrar').innerHTML = "Ocultar datos"
    }
  }