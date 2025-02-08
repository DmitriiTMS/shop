import { Link } from "react-router-dom";

import basket from "../../assets/images/header/shopping-cart.svg";

import styles from './Basket.module.css';

export const Basket = () => {
  return (
    <div>
      <Link className={styles.basket} to="/cart">
        <img src={basket} alt="basket" />
        <p className={styles.basketText}>Корзина</p>
      </Link>
    </div>
  );
};
