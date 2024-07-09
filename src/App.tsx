import "./App.scss";
import allComponents from "./utils/COMPONENTS";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Footer from "./Components/Footer/Footer";
import { Fragment } from "react/jsx-runtime";
function App() {
    return (
        <div className="app">
            <Header />
            <Intro />
            {allComponents.map((component, index) => (
                <Fragment key={index}>{component}</Fragment>
            ))}
            <Footer />
        </div>
    );
}

export default App;
