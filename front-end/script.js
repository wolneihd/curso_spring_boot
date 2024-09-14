document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const username = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        // Log para verificar o corpo da solicitação
        console.log('Enviando dados:', JSON.stringify({ username, password }));

        try {
            const response = await fetch('http://127.0.0.1:8081/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            // Verificar se a resposta foi bem-sucedida
            if (response.ok) {
                const result = await response.json();
                console.log('Sucesso:', result);
                alert('Dados enviados com sucesso!');
            } else {
                console.error('Erro:', response.statusText);
                alert('Ocorreu um erro ao enviar os dados.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro na requisição.');
        }
    });
});
