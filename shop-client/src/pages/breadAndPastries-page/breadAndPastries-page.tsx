import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useMemo } from "react";
import { IProduct } from "../../mockData/products";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { getAllProducts } from '../../store/slices/products/productSlice';


import styles from "./breadAndPastriesPages.module.css";
import { LoaderProducts } from '../../components/LoaderProducts/LoaderProducts';

export const BreadAndPastriesPages = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.productsSlice);

    const breadProducts = useMemo(() =>
        products.filter((prod: IProduct) => prod.category === "хлеб"),
        [products]
    );

    useEffect(() => {
        dispatch(getAllProducts({searchInput: ""}))
    }, [dispatch])

    return (
        <section className={styles.breadSection}>
            <div className="container">
                {
                    loading ? <LoaderProducts/> :
                        <>
                        {error && <h1>{error}</h1>}
                            <div className={styles.breadBlock}>
                                {
                                    breadProducts.map((prod) => {
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