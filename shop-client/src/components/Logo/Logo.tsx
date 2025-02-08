import { Link } from "react-router-dom"

import logo from '../../assets/images/header/logo.svg';
import styles from './Logo.module.css';

export const Logo = () => {
    return (
        <div>
            <Link className={styles.logo} to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div>
    )
}