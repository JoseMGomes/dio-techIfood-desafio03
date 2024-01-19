class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = " "
        if(this.tipo == "Mago"){
            ataque = "magia"
        } else if (this.tipo == "Guerreiro"){
            ataque = "espada"
        } else if (this.tipo == "Monge"){
            ataque = "artes marciais"
        } else if (this.tipo == "Ninja"){
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi1 = new heroi("José", 20 , "Mago")
let heroi2 = new heroi("José", 20 , "Guerreiro")
let heroi3 = new heroi("José", 20 , "Monge")
let heroi4 = new heroi("José", 20 , "Ninja")


heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()

