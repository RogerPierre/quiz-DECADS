import dadosPerguntas from'./assets/dadosPerguntas.json'
export class DadosService {
    "Nome completo:": string
    "Idade:": number
    "Qual cidade nasceu?": string
    "Meu apelido é:": string
    "Tenho a mania de :": string
    "Cor do seu cabelo:": string
    "Estilo de musica favorita:": string
    "Eu sempre falo isso:": string
    "Um talento oculto:": string
    "Animal favorito:": string
    "Tem irmãos?": string
    constructor(nome: string, idade:number,cidade: string, apelido: string, mania: string, cabelo: string, musica: string, fala: string, talento: string, animal: string, irmaos: boolean) {
        this["Nome completo:"] = nome;
        this["Idade:"] = idade;
        this["Qual cidade nasceu?"] = cidade;
        this["Meu apelido é:"] = apelido;
        this["Tenho a mania de :"] = mania;
        this["Cor do seu cabelo:"] = cabelo;
        this["Estilo de musica favorita:"] = musica;
        this["Eu sempre falo isso:"] = fala;
        this["Um talento oculto:"] = talento;
        this["Animal favorito:"] = animal;
        this["Tem irmãos?"] = irmaos ? "Sim" : "Não";
    }
    /**
     * name
     */
    escolher(turn:number){
        switch(turn){
            case 1:
                return this["Nome completo:"];
                break
            case 2:
                return this["Idade:"];
                break
            case 3:
                return this["Qual cidade nasceu?"];
                break
            case 4:
                return this["Meu apelido é:"];
                break
            case 5:
                return this["Tenho a mania de :"];
                break
            case 6:
                return this["Cor do seu cabelo:"];
                break  
            case 7:
                return this["Estilo de musica favorita:"];
                break
            case 8:
                return this["Eu sempre falo isso:"];
                break
            case 9:
                return this["Um talento oculto:"];
                break
            case 10:
                return this["Animal favorito:"];
                break
            case 11:
                return this["Tem irmãos?"];
                break
            case turn:
                return ;
                break   
    }
    
}
}
function parseNumber(value:number|string):number{
    if(isNaN(Number(value))){
        return 0
    }
    return Number(value)
}
function Getjson():DadosService[] {
        const dadosListados : DadosService[]=[]
        for(let i : number = 0;dadosPerguntas[i];i++){
            const dado: DadosService=new DadosService(dadosPerguntas[i]['Nome completo:'],
                parseNumber(dadosPerguntas[i]['Idade:']),
                dadosPerguntas[i]['Qual cidade nasceu?'],
                dadosPerguntas[i]['Meu apelido é:'],
                dadosPerguntas[i]['Tenho a mania de :'],
                dadosPerguntas[i]['Cor do seu cabelo:'],
                dadosPerguntas[i]['Estilo de musica favorita:'],
                dadosPerguntas[i]['Eu sempre falo isso:'],
                dadosPerguntas[i]['Um talento oculto:'],
                dadosPerguntas[i]['Animal favorito:'],
                (dadosPerguntas[i]['Tem irmãos?']=="SIM")?true:false)
                
                dadosListados.push(dado)

            }
        return dadosListados
}
export const dados : DadosService[] = Getjson()
console.log(dados)