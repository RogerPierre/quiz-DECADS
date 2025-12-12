import './App.css'
import { Titulo } from './componentes/titulo'
import { ListaDeBotoes } from './componentes/botao'
import { ParagrafroTEXTO } from './componentes/textoApoio'
import { useState } from 'react'
import { digitarTextoComCursor } from './componentes/funcoes' 
function App() {
  const [hide,setHide]= useState(true)
  const handleParag = (texto:string,conteinerId : string) => {
    if(hide){
      digitarTextoComCursor(texto,conteinerId)
      setHide(false)
    }else{
      digitarTextoComCursor("",conteinerId)
      setHide(true)
    }
  }
  return (
    <>
      <Titulo
        label='DECADS'
        secondaryLabel='desvendendando coders'
      />
      <ListaDeBotoes
        Labels={["texto",'lb','texto','texto' ]}
        events={[()=>{},()=>{handleParag("label","marcador-de-pontuação")},()=>{},()=>{} ]}
      />
      
      
      {hide?
      <ParagrafroTEXTO
      className='marcador-de-pontuação'
      />
      :
      <></>
      }
    </>
  )
}

export default App
