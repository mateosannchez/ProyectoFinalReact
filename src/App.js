import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./componentes/nav/navbar"
import Inicio from "./componentes/nav/paginas/inicio"
import Comprar from "./componentes/nav/paginas/ccomprar"
import Contacto from "./componentes/nav/paginas/contac"
import Mayorista from "./componentes/nav/paginas/mayor"
import Preguntas from "./componentes/nav/paginas/pregfrec"
import Talles from "./componentes/nav/paginas/talles"



function App() {
  return (
    <div className="App">

      <Navbar/>
      {/* <Switch>
      <Route path='./componentes/nav/paginas/inicio.js' exact component={Inicio}/>
      <Route path='./componentes/nav/paginas/ccomprar.js' exact component={Comprar}/>
      <Route path='./componentes/nav/paginas/contac.js' exact component={Contacto}/>
      <Route path='./componentes/nav/paginas/mayor.js' exact component={Mayorista}/>
      <Route path='./componentes/nav/paginas/pregfrec.js' exact component={Preguntas}/>
      <Route path='./componentes/nav/paginas/talles.js' exact component={Talles}/>
      </Switch> */}
      

    </div>
  )
}



// const App = () => {
//   return (
//     <>
//       <p>Hola app.js</p>
//     </>
//   )
// };
//export const App =  () => "Hola"

export default App;

