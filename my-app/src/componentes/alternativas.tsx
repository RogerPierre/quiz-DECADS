import { BotoesDeQuiz } from "./botoes"
import {  DadosService } from "../dados"
import { useState } from "react"

interface IInputListAlternativas{
    turn:number
    list:number[]
    Data:DadosService[]
    onClick:()=>void
}
function sortearNumero(max:number):number{
    return Math.floor(Math.random()*max)
}
export const ListAlternativas=({list,Data,turn,onClick}:IInputListAlternativas)=>{
    const [count,setCount]=useState(0)
    function handleADDbutton(perfil:number){
        return(
            <BotoesDeQuiz
            label={String(Data[perfil].escolher(turn))}
            onClick={onClick}
            />
        )
        
    }

    return(
        <ol onChange={()=>setCount(count+1)}key={count}>
            {list.map((perfil)=>{
                return(
                    <li key={perfil}>
                        {handleADDbutton(sortearNumero(Data.length))}
                    </li>
                )
            })}
        </ol>
    )
}