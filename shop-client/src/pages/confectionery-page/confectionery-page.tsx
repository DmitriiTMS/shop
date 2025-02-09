import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useMemo } from "react";
import { IProduct } from "../../mockData/products";
import { CardProduct } from "../../components/CardProduct/CardProduct";

import styles from "./confectioneryPage.module.css";

export const ConfectioneryPage = () => {

    const { products } = useSelector((state: RootState) => state.products);

    const confectioneryProducts = useMemo(() => 
        products.filter((prod: IProduct) => prod.category === "пирожное"), 
        [products]
    );

    return (
        <section className={styles.confectionerySection}>
            <div className="container">
                <div className={styles.confectioneryBlock}>
                    {
                        confectioneryProducts.map((prod) => {
                            return (
                                <CardProduct key={prod.id} {...prod} />
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}