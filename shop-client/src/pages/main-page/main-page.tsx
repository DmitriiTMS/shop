import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { CardProduct } from '../../components/CardProduct/CardProduct';
import { Search } from '../../components/Search/Search';

import styles from './main-page.module.css'
import { getAllProducts } from '../../store/slices/products/productSlice';

export const MainPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.productsSlice)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <section className={styles.bread}>
            <div className="container">
                <h2 className={styles.breadBlockTitle}>Все продукты</h2>
                <div className={styles.search}>
                    <Search />
                </div>

                <div className={styles.breadBlock}>
                    {loading ? <h1>Loading...</h1> : <>
                        {error && <h1>{error}</h1>}
                        {
                            products.length > 0 ? products.map((prod) => {
                                return (
                                    <CardProduct key={prod.id} {...prod} />
                                )
                            }) : <p>Продукт по названию либо бренду либо категории не найден</p>
                        }
                    </>}


                </div>
            </div>
        </section>
    )
} 