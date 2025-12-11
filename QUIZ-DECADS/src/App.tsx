import './App.css'
import { Titulo } from './componentes/titulo'
import { ListaDeBotoes } from './componentes/botao'
import { ParagrafroTEXTO } from './componentes/textoApoio'
function App() {

  return (
    <>
      <Titulo
        label='DECADS'
        secondaryLabel='desvendendando coders'
      />
      <ListaDeBotoes
        Labels={["texto",'texto','texto','texto' ]}
        events={[()=>{},()=>{},()=>{},()=>{} ]}
      />
      <ParagrafroTEXTO
        label=""
        className='marcador-de-pontuação'
      />
      <ParagrafroTEXTO
        label=""
        className='typewriter-pure'
      />
    </>
  )
}

export default App
