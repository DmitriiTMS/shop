import { CardProduct } from '../../components/CardProduct/CardProduct';
import styles from './main-page.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Search } from '../../components/Search/Search';

export const MainPage = () => {

    const { products } = useSelector((state: RootState) => state.productsSlice)

    return (
        <section className={styles.bread}>
            <div className="container">
                <h2 className={styles.breadBlockTitle}>Все продукты</h2>
                <div className={styles.search}> 
                    <Search />
                </div>

                <div className={styles.breadBlock}>

                    {
                        products.length > 0 ? products.map((prod) => {
                            return (
                                <CardProduct key={prod.id} {...prod} />
                            )
                        }) : <p>Продукт по названию либо бренду либо категории не найден</p>
                    }

                </div>
            </div>
        </section>
    )
} 