class aventuraHeroica{
    constructor(nome, idade, tipo){
        this.nome  = nome
        this.idade = idade
        this.tipo  = tipo
    }
    saidaHeroi(){
        let ataque;
        if(this.tipo === 'mago'){
            ataque = ' magia'
        } else if(this.tipo === 'guerreira'){
            ataque = ' espada'
        } else if(this.tipo === 'monge'){
            ataque = ' artes marciais'
        } else {
            ataque = 'shuriken'
        }
    
        console.log(`A ${this.tipo, this.nome} de apenas ${this.idade} anos, atacou usando ${ataque}`)
    }
}
let dadosHeroi = new aventuraHeroica('Tainá', 28, 'ninja')
dadosHeroi.saidaHeroi()



