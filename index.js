const prompt = require("prompt-sync")()

class Pizza {

    constructor(cliente, sabor, preco) {
        this.cliente = cliente
        this.sabor = sabor
        this.preco = preco
    }

    get cliente() {
        return this.cliente
    }

    set cliente(novoCliente) {
        this.cliente = novoCliente
    }

    get sabor() {
        return this.sabor
    }

    set sabor(novoSabor) {
        this.sabor = novoSabor
    }

    get preco() {
        return this.preco
    }

    set preco(novoPreco) {
        this.preco = novoPreco
    }

    mostrarPedido() {
        console.log("")
        console.log("PEDIDO")
        console.log("Cliente:", this.cliente)
        console.log("Pizza:", this.sabor)
        console.log("Preço: R$", this.preco)
    }
}

console.log("PIZZARIA ISABEKA")
console.log("")

let cliente = prompt("Nome do cliente: ")

console.log("")
console.log("Escolha sua pizza:")
console.log("1 - Calabresa - R$ 30")
console.log("2 - Frango com Catupiry - R$ 35")
console.log("3 - Mussarela Grande - R$ 38")

let opcao = Number(prompt("Escolha uma opção: "))

let sabor
let preco

if (opcao === 1) {
    sabor = "Calabresa"
    preco = 30
} else if (opcao === 2) {
    sabor = "Frango com Catupiry"
    preco = 35
} else if (opcao === 3) {
    sabor = "Mussarela Grande"
    preco = 38
} else {
    console.log("Opção inválida!")
}

if (sabor) {
    let pizza = new Pizza(cliente, sabor, preco)
   pizza.mostrarPedido()
}
