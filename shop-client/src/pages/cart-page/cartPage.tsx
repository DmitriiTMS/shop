import styles from './cartPage.module.css';

export const CartPage = () => {
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