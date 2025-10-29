document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Pegando os valores dos campos de usuário e senha
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dados de exemplo (usuário e senha)
    const validUsername = "usuario";
    const validPassword = "senha123";

    // Validação simples
    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "pagina_inicial.html"; // Redireciona para outra página (exemplo)
    } else {
        document.getElementById("error-message").textContent = "Usuário ou senha inválidos!";
    }
});
    