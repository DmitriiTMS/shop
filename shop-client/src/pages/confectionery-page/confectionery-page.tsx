import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useMemo } from "react";
import { IProduct } from "../../mockData/products";
import { CardProduct } from "../../components/CardProduct/CardProduct";

import styles from "./confectioneryPage.module.css";
import { getAllProducts } from '../../store/slices/products/productSlice';

export const ConfectioneryPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.productsSlice);

    const confectioneryProducts = useMemo(() =>
        products.filter((prod: IProduct) => prod.category === "пирожное"),
        [products]
    );

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <section className={styles.confectionerySection}>
            <div className="container">
                {
                    loading ? <h1>Loading...</h1> :
                        <>
                            {error && <h1>{error}</h1>}
                            <div className={styles.confectioneryBlock}>
                                {
                                    confectioneryProducts.map((prod) => {
                                        return (
                                            <CardProduct key={prod.id} {...prod} />
                                        )
                                    })
                                }
                            </div>
                        </>
                }

            </div>
        </section>

    )
}