import Header from "./componentes/Header/Header";
import Section from "./componentes/Section/Section";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./componentes/Footer/Footer";



function App() {


  return (
    <div className="App">

     

        <BrowserRouter>

          <Header />


          <Section />
          

          <Footer />

        
        </BrowserRouter>

      

    </div>
  )
}



export default App;







