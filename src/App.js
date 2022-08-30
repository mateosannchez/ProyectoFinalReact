import Header from "./componentes/Header/Header";
import Section from "./componentes/Section/ItemListContainer"
import Contador from "./componentes/Contador/Contador"

function App() {

  const onAdd = () => {
    console.log("Agregaste al carrito");
  };
  
  return (
    <div className="App">

      <Header />

      <div className="App">



        <Section
          marca="Nike"
          modelo="Air Max"
          precio="7000"
        />


      </div>

      <Contador stock={5} initial={1} onAdd={onAdd} />


    </div>
  )
}






// function Person(props) {
//   

//   return (

{/* <div className="person">

  <h2>Marca: {props.marca}</h2>
  <h3>Modelo: {props.modelo}</h3>
  <h3>Precio: {props.precio}</h3>
</div> */}
//   );
// }


// function App() {

//   return (

//     <div className="App">

//       <h1>Productos</h1>

//       <Person
//         marca="Nike"
//         modelo="Air Max"
//         precio="7000" 
//       />


//     </div>

//   )

// };




export default App;







