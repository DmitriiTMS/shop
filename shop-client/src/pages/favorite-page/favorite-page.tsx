import { useSelector } from 'react-redux';
import styles from './favorite-page.module.css';
import { RootState } from '../../store/store';
import { CardProduct } from '../../components/CardProduct/CardProduct';

export const FavoritePage = () => {

    const {favoriteProducts  } = useSelector((state: RootState) => state.productsSlice)

    return (
        <section className={styles.favorite}>
            <div className="container">
                <h2 className={styles.favoriteBlockTitle}>Избранные продукты</h2>
                <div className={styles.favoriteBlock}>

                    {
                        favoriteProducts.length > 0 ? favoriteProducts.map((prod) => {
                            return (
                                <CardProduct key={prod.id} {...prod} />
                            )
                        }) : <p>В избранное пока не добавлено продуктов...</p>
                    }

                </div>
            </div>
        </section>
    )
} 