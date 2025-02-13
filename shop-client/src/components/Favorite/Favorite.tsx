import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import favorite from "../../assets/images/header/favorite.svg"
import favoriteActive from '../../assets/images/header/heart-active.svg'

import styles from './Favorite.module.css';

export const Favorite = () => {
    const { favoriteProducts } = useSelector((state: RootState) => state.favoriteProductsSlice);
    return (
        <div className={styles.favoriteBlock}>
            <Link className={styles.favorite} to="/favorite">
                <img className={styles.favoriteHeart} src={favoriteProducts && favoriteProducts.length > 0 ? favoriteActive : favorite} alt="favorite" />
            </Link>
            {
                favoriteProducts && favoriteProducts.length > 0 && <div className={styles.favoriteCount}>
                    <span>{favoriteProducts.length}</span>
                </div>
            }
        </div>
    )
}