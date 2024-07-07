import MENU from "../../utils/MENU";
import { Link } from "react-router-dom";
import './Menu.scss';

type MenuProps = {
    isBurgerMenuOpen: boolean;
  };
  
  const Menu = ({ isBurgerMenuOpen }: MenuProps) => {
    return (
 
      <nav className={isBurgerMenuOpen ? "menu show" : "menu"}>
        <ul className="menu__list">
          {MENU.map((el) => (
            <li className="menu__item" key={el.name}>
              <Link className="menu__link" to={el.link}>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    
    );
  };

export default Menu;


