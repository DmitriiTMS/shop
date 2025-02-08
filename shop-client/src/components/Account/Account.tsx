import { Link } from "react-router-dom"

import account from "../../assets/images/header/account.svg"

import styles from './Account.module.css';


export const Account = () => {
    return (
        <div>
            <Link className={styles.account} to="/account">
                <img src={account} alt="account" />
            </Link>
        </div>
    )
}