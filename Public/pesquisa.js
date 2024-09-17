function performSearch() {
    // Obtém o valor do campo de entrada
    const searchQuery = document.getElementById('search-input').value;

    // Exibe o valor em um alerta
    if (searchQuery) {
        alert('Você pesquisou pelo produto: ' + searchQuery);
    } else {
        alert('Por favor, digite algo para pesquisar.');
    }
}
