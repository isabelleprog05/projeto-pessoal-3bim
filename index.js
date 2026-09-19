const prompt = require("prompt-sync")()

class Pizza {

    static quantidade = 0

    constructor(sabor, preco) {

        if (this.constructor === Pizza) {
            throw new Error("A classe Pizza é abstrata.")
        }

        this._sabor = sabor
        this._preco = preco

        Pizza.quantidade++
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

    mostrarPizza() {
        return `${this.sabor} - R$ ${this.preco}`
    }

    static mostrarQuantidade() {
        return Pizza.quantidade
    }
}


class PizzaNormal extends Pizza {

    constructor(sabor, preco) {
        super(sabor, preco)
    }

    mostrarPizza() {
        return `${this.sabor} - R$ ${this.preco}`
    }
}


class PizzaGrande extends Pizza {

    constructor(sabor, preco) {
        super(sabor, preco)
    }

    mostrarPizza() {
        return `${this.sabor} Grande - R$ ${this.preco}`
    }
}

class PizzaFactory {

    static criarPizza(opcao) {

        if (opcao === 1) {
            return new PizzaNormal("Calabresa", 30)
        }

        if (opcao === 2) {
            return new PizzaNormal("Frango", 35)
        }

        if (opcao === 3) {
            return new PizzaGrande("Mussarela", 38)
        }

        return null
    }
}

class Pedido {

    constructor(cliente) {
        this._cliente = cliente
        this._pizzas = []
    }

    
    adicionarPizza(pizza) {
        this._pizzas.push(pizza)
    }


    calcularTotal() {

        let total = 0

        for (let pizza of this._pizzas) {
            total += pizza.preco
        }

        return total
    }

    mostrarPedido() {

        console.log("PEDIDO")
        console.log("Cliente:", this._cliente)

        for (let pizza of this._pizzas) {
            console.log(pizza.mostrarPizza())
        }

        console.log("Total: R$ " + this.calcularTotal())
    }
}

console.log("  --PIZZARIA--  ")
console.log("")

let cliente = prompt("Nome do cliente: ")

let pedido = new Pedido(cliente)

console.log("")
console.log("Escolha sua pizza:")
console.log("1 - Calabresa - R$ 30")
console.log("2 - Frango - R$ 35")
console.log("3 - Mussarela Grande - R$ 38")

let opcao = Number(prompt("Escolha: "))

let pizza = PizzaFactory.criarPizza(opcao)

if (pizza !== null) {

    pedido.adicionarPizza(pizza)

    pedido.mostrarPedido()

} else {

    console.log("Opção inválida.")
}

console.log("")
console.log("Pizzas criadas:", Pizza.mostrarQuantidade())