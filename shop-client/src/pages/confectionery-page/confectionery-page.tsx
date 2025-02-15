import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useMemo, useState } from "react";
import { IProduct } from "../../mockData/products";
import { CardProduct } from "../../components/CardProduct/CardProduct";


import { getAllProducts } from '../../store/slices/products/productSlice';
import { LoaderProducts } from '../../components/LoaderProducts/LoaderProducts';
import { addFavoriteProducts, deleteFavoriteProducts, getAllFavoriteProducts } from '../../store/slices/favoriteProducts/favoriteProductsSlice';

import styles from "./confectioneryPage.module.css";

interface ICardProduct {
    id: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    imgUrl: string;
}

export const ConfectioneryPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.productsSlice);
    const { favoriteProducts } = useSelector((state: RootState) => state.favoriteProductsSlice);

    const [localError, setLocalError] = useState<{ [key: number]: string | null }>({});

    const toggleFavorite = async (product: ICardProduct) => {
        const { id, title, category, brand, price, imgUrl } = product;
        const isFavorite = favoriteProducts.some((prod) => prod.id === id)
        setLocalError((prev) => ({ ...prev, [product.id]: null })); // Сбрасываем ошибку перед новым запросом
        try {
            if (isFavorite) {
                await dispatch(deleteFavoriteProducts(id)).unwrap();
            } else {
                await dispatch(addFavoriteProducts({ id, title, category, brand, price, imgUrl })).unwrap();
            }
        } catch (error) {
            setLocalError((prev) => ({ ...prev, [product.id]: error as string })); // Устанавливаем ошибку только для этой карточки
        }
    };

    const confectioneryProducts = useMemo(() =>
        products.filter((prod: IProduct) => prod.category === "пирожное"),
        [products]
    );

    useEffect(() => {
        dispatch(getAllProducts({ searchInput: "" }))
        dispatch(getAllFavoriteProducts())
    }, [dispatch])

    return (
        <section className={styles.confectionerySection}>
            <div className="container">
                {
                    loading ? <LoaderProducts /> :
                        <>
                            {error && <h1>{error}</h1>}
                            <div className={styles.confectioneryBlock}>
                                {
                                    confectioneryProducts.map((prod) => {
                                        return (
                                            <CardProduct
                                                key={prod.id}
                                                {...prod}
                                                localError={localError[prod.id]}
                                                isFavorite={favoriteProducts.some((product) => product.id === prod.id)}
                                                toggleFavorite={() => toggleFavorite(prod)}
                                            />
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