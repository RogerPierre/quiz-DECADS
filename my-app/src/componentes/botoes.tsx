import { useState } from "react"

interface IInputBotoesDeQuiz{
    label:string
    Correta?:boolean
    onClick:()=>void
}
export const BotoesDeQuiz=({label,Correta,onClick}:IInputBotoesDeQuiz)=>{
    const [count,setCount]=useState(0)
    const Corretastring=(Correta?"SIM":"NAO")
    return(
        <button onChange={()=>setCount(count+1)} onClick={onClick} id={"button-Validade:"+Corretastring} key={count}>{label}</button>
    )
}
