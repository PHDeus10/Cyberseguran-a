// Sistema educativo de phishing
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // NÃO coleta as senhas - apenas mostra a tela educativa
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Mostra a tela educativa independente do que for digitado
    showEducationalScreen();
    
    // Limpa os campos (demonstra que não houve coleta)
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});

function showEducationalScreen() {
    document.getElementById('educationalScreen').style.display = 'block';
}

function closeEducationalScreen() {
    document.getElementById('educationalScreen').style.display = 'none';
}

// Adiciona evento de tecla ESC para fechar a tela educativa
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeEducationalScreen();
    }
});