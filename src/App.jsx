import './App.css'
import Pizza from "./components/PizzaData";
import Header from './components/Header';
import Footer from './components/Footer';
import "./custom.css"

function App() {

  return (
    <>
      <div className='container'>
        <Header />
        <Pizza />
        <Footer />
      </div>
    </>
  )
}


export default App
