import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useMemo } from "react";
import { IProduct } from "../../mockData/products";
import { CardProduct } from "../../components/CardProduct/CardProduct";

import styles from "./breadAndPastriesPages.module.css";

export const BreadAndPastriesPages = () => {

    const { products } = useSelector((state: RootState) => state.productsSlice);

    const breadProducts = useMemo(() => 
        products.filter((prod: IProduct) => prod.category === "хлеб"), 
        [products]
    );

    return (
        <section className={styles.breadSection}>
            <div className="container">
                <div className={styles.breadBlock}>
                    {
                        breadProducts.map((prod) => {
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