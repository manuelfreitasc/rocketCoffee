import './styles.css'
import coffee from '../../assets/rocket-coffee.png'

interface FullChildren {
    children: string;
}

function Main() {
    return (
        <div className="main-content">
            <nav>
                <img src={coffee} alt="logo" />
            </nav>
        </div>
    )
}
export { Main }