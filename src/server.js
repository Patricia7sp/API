const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')  
const BancoDados = require('./BancoDados')

app.use(bodyParser.urlencoded({extended: true})) // enconded e uma funcao - extended:true precisa ser chamada se nao aparecera uma mensagem de advertencia

// bodyParser vai transformar os dados em objetos
// urlencoded e uma funcao para url sem definicao.



app.get('/produtos',(req, res, next) => {
  res.send(BancoDados.getProdutos()) // vai retornar toda a lista de produtos
})

app.get('/produtos/:id', (req, res, next) =>{
   res.send(BancoDados.getProduto(req.params.id)) // vai chamar o id
})  // vai trazer um produto especifico baseado no id

app.post('/produtos', (req, res, next) =>{
  const produto = BancoDados.salvarProduto ({
    nome: req.body.nome, // inserindo dados novos
    preco: req.body.preco,
  })
  res.send(produto) // JSON
})  // para submeter os dados, inserir e salvar um novo produto


app.put('/produtos/:id', (req, res, next) =>{ // para fazer alteracoes nos produtos
  const produto = BancoDados.salvarProduto ({
    id: req.params.id,
    nome: req.body.nome, 
    preco: req.body.preco
  })
  res.send(produto) // JSON
}) 

app.delete('/produtos/:id', (req, res, next) =>{ // para fazer alteracoes nos produtos
  const produto = BancoDados.excluirProduto (req.params.id)
  res.send(produto) // JSON
}) 
app.listen(port, () => {
  console.log(`Servidor  esta sendo executado na porta ${port}.`)
})

