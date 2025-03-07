document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5515991837516'; 

    
    const texto = `Olá, meu nome é ${nome}, e gostaria de entrar em contato com você. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;


    window.open(link, '_blank');
});