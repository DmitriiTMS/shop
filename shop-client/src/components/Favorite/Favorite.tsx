import { Link } from "react-router-dom"

import favorite from "../../assets/images/header/favorite.svg"

import styles from './Favorite.module.css';

export const Favorite = () => {
    return (
        <div>
            <Link className={styles.favorite} to="/favorite">
                <img src={favorite} alt="favorite" />
            </Link>
        </div>
    )
}