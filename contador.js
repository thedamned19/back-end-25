class Contador {
    // atributos
    // constructor
    // métodos

    static CONTADOR_GLOBAL = 0;

    constructor(nombreResponsable) {
        this.responsable = nombreResponsable;
        this.contadorResponsable = 0;

    }

    getResponsable() {
        return this.responsable;
    }

    contar() {
        this.contadorResponsable ++;
        Contador.CONTADOR_GLOBAL ++;
    }

    getCuentaIndividual() {
        return this.contadorResponsable;
    }

    getCuentaGlobal() {
        return Contador.CONTADOR_GLOBAL;
    }

}

module.exports = Contador;
