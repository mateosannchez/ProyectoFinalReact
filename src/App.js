import Header from "./componentes/Header/Header";
import Section from "./componentes/Section/Section";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/Footer/Footer";
import CartProvider from "./Context/CartContext";


function App() {

 

  return (
    <div className="App">

     <CartProvider>

        <BrowserRouter>

          <Header />


          <Section />
          

          <Footer />

        
        </BrowserRouter>
     </CartProvider>


      

    </div>
  )
}



export default App;







