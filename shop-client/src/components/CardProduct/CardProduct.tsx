import React from 'react';
import styles from './CardProduct.module.css';


interface ICardProduct {
    title: string
    category: string
    brand: string
    price: number
    imgUrl: string
}

export const CardProduct: React.FC<ICardProduct> = ({ title, category, brand, price, imgUrl }) => {
    return (
        <div className={styles.cardProduct}>
            <img className={styles.prodImg} src={imgUrl} alt={title} />
            <div className={styles.prodInfo}>
                <h3 className={styles.prodTitle}>Название: {title}</h3>
                <p>Категория: {category}</p>
                <p>Бренд: {brand}</p>
                <p>Цена: {price} бел.руб</p>
            </div>

        </div>
    )
}