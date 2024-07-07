import logo from '../../assets/svg/logo.svg'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'
import './Header.scss'
import { useState } from 'react'

const Header = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
    return (
      <header className="header">
        <div className='header__container container'>
            <div className='header__wrapper'>
        <img src={logo} alt="logo" />
        <Menu isBurgerMenuOpen={isBurgerMenuOpen} />
        <Button label="buy now" />
        <div
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
          style={{color:isBurgerMenuOpen ? 'white' : 'black'}}
          className="header__burger">x</div>
          
</div>
</div>
      </header>
    );
  };
export default Header
