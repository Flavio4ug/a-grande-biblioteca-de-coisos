let biblioteca = [];
function cadastro(nome, autor, ano) {
    var livro = {
        titulo: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro)
}
function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    cadastro(nome, autor, ano);

}
function mostrarLivros() {
    const livrosDiv=document.getElementById('livros')

    }
    console.log('resultado0:${biblioteca[0].ano}')

}
l