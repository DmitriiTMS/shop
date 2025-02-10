import { Link } from "react-router-dom"

import favorite from "../../assets/images/header/favorite.svg"

import styles from './Favorite.module.css';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Favorite = () => {
    const { favoriteProducts } = useSelector((state: RootState) => state.productsSlice);
    return (
        <div>
            <Link className={styles.favorite} to="/favorite">
                <img src={favorite} alt="favorite" />
                {
                    favoriteProducts.length > 0 && <span>{favoriteProducts.length}</span>
                }
            </Link>
        </div>
    )
}