import './App.css'
import Curso from './ej2/curso'
import TotalEjercicios from './ej2/totalEjercicios'
import Unidad from './ej2/unidad'

const App = () => {
  const curso = 'Desarrollo web en entorno cliente. 2ª Evaluación'
  const parte1 = 'Fundamentos de React'
  const ejercicios1 = 10
  const parte2 = 'React avanzado'
  const ejercicios2 = 7
  const parte3 = 'Otros frameworks'
  const ejercicios3 = 14

  return (
    <div>
      <Curso curso={curso}></Curso>
      <Unidad parte={parte1} ejercicios={ejercicios1}></Unidad>
      <Unidad parte={parte2} ejercicios={ejercicios2}></Unidad>
      <Unidad parte={parte3} ejercicios={ejercicios3}></Unidad>
      <TotalEjercicios ejercicios={[ejercicios1, ejercicios2, ejercicios3]}></TotalEjercicios>
    </div>
  )
}

export default App
