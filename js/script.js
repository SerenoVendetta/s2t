// Exemplo de como adicionar itens ao cardápio dinamicamente
const cardapioContainer = document.querySelector('.cardapio-container');

const pratos = [
    { nome: 'Pizza Margherita', preco: 'R$ 35,00' },
    { nome: 'Espaguete à Bolonhesa', preco: 'R$ 40,00' },
    { nome: 'Salmão Grelhado', preco: 'R$ 55,00' },
    // Adicione mais pratos aqui...
];

pratos.forEach(prato => {
    const cardapioItem = document.createElement('div');
    cardapioItem.classList.add('cardapio-item');
    cardapioItem.innerHTML = `
        <h3>${prato.nome}</h3>
        <p>${prato.preco}</p>
    `;
    cardapioContainer.appendChild(cardapioItem);
});