import { Link } from "react-router-dom";
import styles from "../assets/css/Header.module.css"

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <h1>Reactive Coffee Co.</h1>
            <nav>
                <Link to="/">Drink Menu</Link>
                <Link to="/create-drink">Create New Drink</Link>
            </nav>
        </header>
    )
}

export default Header;