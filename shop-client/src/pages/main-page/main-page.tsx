import { CardProduct } from '../../components/CardProduct/CardProduct';
import styles from './main-page.module.css'
import {  useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const MainPage = () => {

    const { filteredProducts }= useSelector((state: RootState) => state.products)
    
    return (
        <section className={styles.bread}>
            <div className="container">
                <h2 className={styles.breadBlockTitle}>Все продукты</h2>
                <div className={styles.breadBlock}>

                    {
                        filteredProducts.length > 0 ? filteredProducts.map((prod) => {
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