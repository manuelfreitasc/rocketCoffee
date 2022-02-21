import './styles.css'
import logo from '../../assets/logo-desktop.svg'

interface FullChildren {
    children: string;
}

function Header() {
    return (
        <div className="content">
            <nav>
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">Recompensas</a>
                    </li>
                    <li>
                        <a href="">Gift Cards</a>
                    </li>
                    <li>
                        <a href="">Lojas</a>
                    </li>
                </ul>
                <div className="sideBar">
                    <a href="">
                        PEGAR MEU CAFÉ
                    </a>
                </div>
            </nav>
        </div>
    )
}
export { Header }