// CLASSE ABSTRATA
class FormaGeometrica {
    constructor() {

class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super(); // Chama o constructor da classe pai
        this.lado = lado;
    }
    
    // OBRIGATÓRIO: temos que implementar calcularArea
    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    
    // OBRIGATÓRIO: temos que implementar calcularArea
    calcularArea() {
        return 3.14 * this.raio * this.raio;
    }
}}}

const meuQuadrado = new Quadrado(5);
console.log(meuQuadrado.calcularArea()); // 25