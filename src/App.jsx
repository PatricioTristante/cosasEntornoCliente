import './App.css'
import Avatar from './tweet/avatar';
import Autor from './tweet/contenido/autor';
import Botones from './tweet/contenido/botones';
import Tweet from './tweet/contenido/tweet';

const App = () => {
  const tweet = 'Comenzamos con React en el módulo de Desarrollo web en entorno cliente. 2ª Evaluación';
  const nombre = 'Víctor M. Garrido';
  const nick   ='@vgc02g';
  const cuando = '3h ago ';

  return (
    <div className="tweet">
          <Avatar></Avatar>
            <div className="content">
              <Autor nombre={nombre} nick={nick} cuando={cuando}></Autor>
              <Tweet tweet={tweet}></Tweet>    
              <Botones></Botones> 
            </div>                
    </div>
  )
}

export default App
