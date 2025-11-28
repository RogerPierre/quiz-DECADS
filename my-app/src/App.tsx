import { useState } from 'react'
import {  HeaderMOD } from './componentes/Header'
import { ListAlternativas } from './componentes/alternativas'
import { dados } from './dados'
export const App = ()=>{
  const [turn,setTurn]=useState(1)

  return (
    <div>
      
       <HeaderMOD
       labelTitle='DECADS'
       labelSubTitle='Desvendando Coders' />
           <ListAlternativas
           Data={dados}
           turn={turn}
           list={[0,1,2,3]}
           onClick={()=>setTurn(turn+1)}
            />
    </div>
  )
}

