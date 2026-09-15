class Pizza {

    static quantidade = 0

    constructor(sabor, preco) {
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

class PizzaGrande extends Pizza {

    constructor(sabor, preco) {
        super(sabor, preco)
    }

    mostrarPizza() {
        return `${this.sabor} Grande - R$ ${this.preco + 10}`
    }
}

module.exports = {
    Pizza,
    PizzaGrande
}