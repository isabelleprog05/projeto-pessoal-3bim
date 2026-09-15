const { Pizza, PizzaGrande } = require("./Pizza")

class PizzaFactory {

    static criarPizza(opcao) {

        if (opcao === 1) {
            return new Pizza("Calabresa", 30)
        }

        if (opcao === 2) {
            return new Pizza("Frango", 35)
        }

        if (opcao === 3) {
            return new PizzaGrande("Mussarela", 28)
        }

        return null
    }
}

module.exports = PizzaFactory