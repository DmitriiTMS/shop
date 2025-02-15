import { useDispatch, useSelector } from 'react-redux';
import styles from './favorite-page.module.css';
import { AppDispatch, RootState } from '../../store/store';
import { CardProduct } from '../../components/CardProduct/CardProduct';
import { useEffect } from 'react';
import { getAllFavoriteProducts } from '../../store/slices/favoriteProducts/favoriteProductsSlice';

export const FavoritePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { favoriteProducts, loading} = useSelector((state: RootState) => state.favoriteProductsSlice)
    
    useEffect(() => {
        dispatch(getAllFavoriteProducts())
    }, [dispatch])

    return (
        <section className={styles.favorite}>
            <div className="container">
                <h2 className={styles.favoriteBlockTitle}>Избранные продукты</h2>
                {
                    loading ? <h1>Loading...</h1> :
                        <>
                            <div className={styles.favoriteBlock}>
                                {
                                    favoriteProducts && favoriteProducts.length > 0 ? favoriteProducts.map((prod) => {
                                        return (
                                            <CardProduct key={prod.id} {...prod} />
                                        )
                                    }) : <p>В избранное пока не добавлено продуктов...</p>
                                }

                            </div>
                        </>
                }

            </div>
        </section>
    )
} 