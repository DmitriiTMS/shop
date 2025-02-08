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
            <h3 className={styles.prodTitle}>{title}</h3>
            <p>{category}</p>
            <p>{brand}</p>
            <p>{price} бел.руб</p>
        </div>
    )
}