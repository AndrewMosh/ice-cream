import Intro from "./Components/Intro/Intro";
import Header from "./Components/Header/Header";
import "./App.scss";
import Advantages from "./Components/Advantages/Advantages";
import Random from "./Components/Random/Random";
import Products from "./Components/Products/Products";

function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            <Advantages />
            <Random />
            <Products />
        </div>
    );
}

export default App;
