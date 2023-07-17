
// Objetivo 1: Quanfo passar o mouse em cima do personagem na listagem, devemos selecioná-lo

//Passo 1.1 Pegando os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem') //Buscando todos os elementos de classe personagem e colocando os em uma constante

// Passo 2: adicionando a classe 'SELECIONADO' no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
        personagem.classList.add('selecionado');

        //Passo 3: verificando se já existe um personagem selecionado, e se sim, removendo a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
;
        personagem.classList('selecionado')

        //Objetivo 2: Quando passar o mouse em cima do personagem na listagem, trocar a imagem grande, o nome e a descrição do personagem grande

        //Passo 2.1: pegar o elemento do personagem grande para adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //Passo 2.2: alterar a imagem do personagem grande.
        const idPersonagem = personagem.attributes.id.value;  //Criando uma variável que permite alterar o nome do arquivo de imagem atráves do id
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png` 

        //Passo 2.3: Alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('')

    })

})



