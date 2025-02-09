
import { Account } from "../Account/Account"
import { Basket } from "../Basket/Basket"
import { Favorite } from "../Favorite/Favorite"
import { Logo } from "../Logo/Logo"
import { Navigation } from "../Navigation/Navigation"

import styles from './Header.module.css';

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerBlock}>
                    <Logo />
                    <div className={styles.headerLinkUser}>
                        <Favorite />
                        <Account />
                        <Basket />
                    </div>
                </div>
                <Navigation />
            </div>

        </header>
    )
} 