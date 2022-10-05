
function inputFiltragem () {
    const container = document.querySelector(".container_filtro_input")

    let tagDivFiltroValor = document.createElement("div")
    let tagH3TituloPreco  = document.createElement("h3")
    let tagH3Valor        = document.createElement("h3")
    let tagSamll          = document.createElement("small")
    let tagdivInput       = document.createElement("div")
    let tagInput          = document.createElement("input")

    tagDivFiltroValor.classList.add("container_filtro_valor")
    tagH3TituloPreco.classList.add("titulo_filtro_valor","titulo_font2")
    tagH3Valor.classList.add("titulo_filtro_valor", "titulo_font2")  
    tagSamll.classList.add("titulo_filtro_valor", "titulo_font2")  
    tagInput.classList.add("input_range", "margem_bottom")

    tagH3TituloPreco.innerText = "Definir preço"
    tagH3Valor.innerText       = "Até R$  "
    tagSamll.innerText         = "0.00"
    tagInput.type              = "range" 
    tagInput.min               = 0
    tagInput.max               = 240

    tagInput.addEventListener("input", (event)=>{
        event.preventDefault()

        tagSamll.innerHTML = `${tagInput.value}.00`

        let valorInput = tagInput.value

        const valorProduto = products.filter((element) =>{
            let valor = element.price

            if(valorInput == 0){
                adicionarLista (products, listarProdutos)
        
            } 
            else{
                const novoArray = products.filter((element) => element.price <= valorInput)

                adicionarLista (novoArray, listarProdutos)
            }
        })
       
    })

    tagDivFiltroValor.append(tagH3TituloPreco, tagH3Valor)
    tagH3Valor.append(tagSamll)
    tagdivInput.append(tagInput)

    return container.append(tagDivFiltroValor, tagdivInput)
}
inputFiltragem ()


function criarBotoesCategorias(lista){
    const containerBotoesCategorias = document.querySelector(".container_genero_musical ")

    lista.forEach((element, index) =>{

        const botoes = document.createElement("button")
        botoes.classList.add("bt_genero_musical")
        botoes.innerText = element
        botoes.id        = index 
        

        botoes.addEventListener("click", (event) =>{
            event.preventDefault()
            if(botoes.id == 0){
                adicionarLista (products, listarProdutos)
        
            } 
            else{
                const novoArray = products.filter((element) => element.category == botoes.id)
                adicionarLista (novoArray, listarProdutos)
            }
        })

        containerBotoesCategorias.appendChild(botoes)
    })
}
criarBotoesCategorias(categories)


