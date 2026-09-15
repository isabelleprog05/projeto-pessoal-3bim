class Pedido {

    constructor(cliente) {
        this.cliente = cliente
        this.pizzas = []
    }

    adicionarPizza(pizza) {
        this.pizzas.push(pizza)
    }

    mostrarPedido() {
        console.log("---PEDIDO---")
        console.log("Cliente:", this.cliente)

        for (let pizza of this.pizzas) {
            console.log(pizza.mostrarPizza())
        }
    }

    calcularTotal() {
        let total = 0

        for (let pizza of this.pizzas) {

            if (pizza instanceof Object) {
                if (pizza instanceof require("./Pizza").PizzaGrande) {
                    total += pizza.preco + 10
                } else {
                    total += pizza.preco
                }
            }
        }

        return total
    }
}

module.exports = Pedido