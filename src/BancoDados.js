const sequence =  { // criando uma sequencia, mas esse modulo so e visivel dentro d
  // do banco de dados, nao esta visivel externamente
  _id:1,
  get id() {
    return this._id++
  }
}

const produtos = {} // vai ser um objeto com uma colecao de chaves e valores, chave vai ser o id
// e o valor sera o proprio objeto produto com id e preco

function salvarProduto(produto) { // funcao esta recebendo um objeto do tipo produto
  if (!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  return produto
}

function getProduto(id) {// esta recebendo o id como parametro
  return  produtos[id]|| {} // se nao encontrar nada retorne um objeto vazio.
}

function getProdutos(){
  return Object.values(produtos)
}

function excluirProduto(id) {// excluir produtos
  const produto = produtos[id] // objeto produto vai receber o id do produto
  delete produtos[id]
  return  produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}


