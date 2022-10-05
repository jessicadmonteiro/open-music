const listarProdutos = document.querySelector(".listar_produtos")

function criarProduto (produto){
    let titulo    = produto.title
    let categoria = produto.category
    let preco     = produto.price
    let imagem    = produto.img 
    let banda     = produto.band
    let ano       = produto.year
    let id        = produto.id

    let tagLi        = document.createElement("li")
    let tagImg       = document.createElement("img")
    let tagSpan      = document.createElement("span")
    let tagPBanda    = document.createElement("p")
    let tagPAno      = document.createElement("p")
    let tagH3Titulo  = document.createElement("h3")
    let tagDiv       = document.createElement("div")
    let tagH3Preco   = document.createElement("h3")
    let tagBtComprar = document.createElement("button")

    tagLi.classList.add("container_produto")
    tagH3Titulo.classList.add("titulo_color_grey1", "titulo_font2", "margem_left") 
    tagDiv.classList.add("container_valor_btComprar")
    tagH3Preco.classList.add("titulo_color_grey1", "titulo_font2", "margem_left")
    tagBtComprar.classList.add("bt_comprar")

    tagImg.src             = imagem
    tagImg.alt             = titulo
    tagPBanda.innerText    = banda
    tagPAno.innerText      = ano
    tagH3Titulo.innerText  = titulo
    tagH3Preco.innerText   = `R$ ${preco}.00`
    tagBtComprar.innerText = "Comprar"

    tagSpan.append(tagPBanda, tagPAno)
    tagDiv.append(tagH3Preco, tagBtComprar)
    tagLi.append(tagImg, tagSpan, tagH3Titulo, tagDiv)
    
    return tagLi
}

function adicionarLista (lista, referenciaHtml){
    referenciaHtml.innerText = ""

    lista.forEach(element => {
        
        let produtoCriado = criarProduto (element)
        referenciaHtml.appendChild(produtoCriado)
    })

}
adicionarLista (products, listarProdutos)


