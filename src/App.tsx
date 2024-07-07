import Intro from "./Components/Intro/Intro"
import Header from "./Components/Header/Header"
import './App.scss'
import Advantages from "./Components/Advantages/Advantages"
import Random from "./Components/Random/Random"

function App() {


  return (
    <div className="app">
            <Header/>
            <Intro/>
            <Advantages/>
            <Random/>

</div>
  )
}

export default App
