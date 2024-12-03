// Exibir/ocultar informações adicionais
document.querySelectorAll('.toggle-info').forEach(button => {
    button.addEventListener('click', () => {
        const extraInfo = button.nextElementSibling;
        if (extraInfo.style.display === 'block') {
            extraInfo.style.display = 'none';
            button.textContent = 'Ver mais';
        } else {
            extraInfo.style.display = 'block';
            button.textContent = 'Ver menos';
        }
    });
});

// Validação do formulário
document.getElementById('feedback-form').addEventListener('submit', event => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        event.target.reset();
    }
});
