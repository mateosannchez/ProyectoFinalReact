import Header from "./componentes/Header/Header";
import Section from "./componentes/Section/ItemListContainer"
import Contador from "./componentes/Contador/Contador"
import ItemDetailContainer from "./componentes/ItemDetailCointainer/ItemDetailContainer";

function App() {

  const onAdd = () => {
    console.log("Agregaste al carrito");
  };

  return (
    <div className="App">

      <Header />

      <div className="item__grid">

        <Section/>

      </div>

      <Contador stock={5} initial={1} onAdd={onAdd} />
      <ItemDetailContainer/>


    </div>
  )
}



export default App;







