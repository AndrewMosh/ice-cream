import Intro from "./Components/Intro/Intro";
import Header from "./Components/Header/Header";
import "./App.scss";
import Advantages from "./Components/Advantages/Advantages";
import Random from "./Components/Random/Random";
import Products from "./Components/Products/Products";
import Slider from "./Components/Slider/Slider";

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Advantages />
            <Random />
            <Products />
            <Slider />
        </div>
    );
}

export default App;
