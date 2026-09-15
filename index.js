const prompt = require("prompt-sync")()

const PizzaFactory = require("./PizzaFactory")
const Pedido = require("./Pedido")
const { Pizza } = require("./Pizza")

console.log("--PIZZARIA--");


let cliente = prompt("Nome do cliente: ")

let pedido = new Pedido(cliente)

console.log("Escolha sua pizza:")
console.log("1 - Calabresa - R$ 30")
console.log("2 - Frango - R$ 35")
console.log("3 - Mussarela Grande - R$ 38")

let opcao = Number(prompt("Escolha: "))

let pizza = PizzaFactory.criarPizza(opcao)

if (pizza !== null) {

    pedido.adicionarPizza(pizza)

    pedido.mostrarPedido()

    console.log("------------------------------")
    console.log("Total: R$", pedido.calcularTotal())

} else {

    console.log("Opção inválida.")
}

console.log("Pizzas criadas:", Pizza.mostrarQuantidade())
