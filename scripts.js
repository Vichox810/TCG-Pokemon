function buscarCartas() {
  const input = document.getElementById('searchInput').value.toLowerCase();

  // Filtrar cartas normales
  const cartasNormales = document.querySelectorAll('#cartasRecomendadas .card');
  cartasNormales.forEach(carta => {
    const tipo = carta.getAttribute('data-tipo');
    carta.style.display = (tipo.includes(input) || input === '') ? 'block' : 'none';
  });

  // Filtrar ediciones especiales
  const cartasEspeciales = document.querySelectorAll('#edicionEspecial .card');
  cartasEspeciales.forEach(carta => {
    const tipo = carta.getAttribute('data-tipo');
    carta.style.display = (tipo.includes(input) || input === '') ? 'block' : 'none';
  });
}
