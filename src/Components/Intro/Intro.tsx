import './Intro.scss'
import Button from "../../Components/Button/Button"
import iceCream  from '../../assets/illustration.png'
const Intro  =()=> {
    return (
 <div className="intro">
    <div className="intro__container container">
      <div className="intro__wrapper">
     <div className="intro__inner">
        <div className="intro__credo">Sweet fun, full of milk.</div>
        <div className="intro__title">Feel inside cold with our delicious <span>ice-cream.</span></div>
        <p className="intro__text">Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>
       <Button label="buy now"/>
     </div>
     <div className="intro__inner">
        <img src={iceCream} alt="ice-cream" />
     </div>

    </div>
    </div>

 </div>       
    )
}

export default Intro