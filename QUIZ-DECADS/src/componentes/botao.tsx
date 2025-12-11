



interface IInputBotao{
    label:string
    onclick:()=>void
}
export const Botao=({label , onclick}:IInputBotao)=>{
    return(
        <>
            <button
            onClick={onclick}
            >
            {label}
            </button>
        </>
    )
}
//contagem ate 4 no amximo
interface IInputListaDeBotoes{
    Labels:string[]
    events:Array<()=>void>
}
export const ListaDeBotoes = ({Labels, events}:IInputListaDeBotoes)=>{
    function handleRETBotao(label:string,event:()=>void){
        return (
            
                <Botao
                label={label}
                onclick={event}
                />
            
        )
    }
    function handleRETListaDeBotoes(){
        return(
            <>
            {handleRETBotao(Labels[0],events[0])}
            {handleRETBotao(Labels[1],events[1])}
            {handleRETBotao(Labels[2],events[2])}
            {handleRETBotao(Labels[3],events[3])}
            </>
        )
        
    }
    
    return (
        <>
            {handleRETListaDeBotoes()}
        </>
    )
}