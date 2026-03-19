
import './App.css'
import bgVideo from './assets/video-fundo.mp4'

function App() {
    
  return (
    <>


          <main className="tela-inicial">
            <h1 className="matrix-effect"id="titulo-principal">DECADS</h1>
            <h2 className="matrix-effect"id="sub-titulo">Desvendando os coders</h2>
        <div className="fundo-preto">
        <video autoPlay muted loop playsInline id="bg-video">
          <source src={bgVideo} type="video/mp4"/>
          Seu navegador não suporta vídeo HTML5.
        </video>
        </div>


            <div className="matrix-effect" id="button-container">
              <button id="primeira-opcao">
                Iniciar
              </button>
              <button id="segunda-opcao">
                Instruções
              </button>
              <button  id="terceira-opcao">
                Créditos
              </button>
              <button  id="quarta-opcao">
                  Pesquisar
              </button>
            </div><div >
            <p   id="marcador-de-pontuação"></p>
          </div>
        </main>



          <div><div id="typewriter-container">
            <p className="typewriter-pure" id="texto-Apoio" ></p>
          </div>


        </div>


    </>
  )
}

export default App
