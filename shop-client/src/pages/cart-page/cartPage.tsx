import { useGetAllCartProducts } from '../../query/cart/useGetAllCartProducts';
import styles from './cartPage.module.css';

export const CartPage = () => {

    const {allCartProducts} = useGetAllCartProducts();
    console.log(allCartProducts);
    
    return (
        <section className={styles.cart}>
            <div className="container">
                <div>
                    <h1>Корзина</h1>
                </div>
            </div>
        </section>
    )
}