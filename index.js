const prompt = require("prompt-sync")()

class Pizza {

    constructor(cliente, sabor, preco) {
        this._cliente = cliente
        this._sabor = sabor
        this._preco = preco
    }

    get cliente() {
        return this._cliente
    }

    set cliente(novoCliente) {
        this._cliente = novoCliente
    }

    get sabor() {
        return this._sabor
    }

    set sabor(novoSabor) {
        this._sabor = novoSabor
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        this._preco = novoPreco
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
    console.log("")
    console.log("Opção inválida!")
}

if (sabor) {

    const pizza = new Pizza(
        cliente,
        sabor,
        preco
    )

    pizza.mostrarPedido()
}
