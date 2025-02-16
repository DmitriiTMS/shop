import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect, useMemo, useState } from "react";
import { IProduct } from "../../mockData/products";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { getAllProducts } from '../../store/slices/products/productSlice';

import { LoaderProducts } from '../../components/LoaderProducts/LoaderProducts';
import { addFavoriteProducts, deleteFavoriteProducts, getAllFavoriteProducts } from '../../store/slices/favoriteProducts/favoriteProductsSlice';

import styles from "./breadAndPastriesPages.module.css";
import { useGetAllCartProducts } from '../../query/cart/useGetAllCartProducts';

interface ICardProduct {
    id: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    imgUrl: string;
}

export const BreadAndPastriesPages = () => {
    const { allCartProducts } = useGetAllCartProducts();

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

    const breadProducts = useMemo(() =>
        products.filter((prod: IProduct) => prod.category === "хлеб"),
        [products]
    );

    useEffect(() => {
        dispatch(getAllProducts({ searchInput: "" }))
        dispatch(getAllFavoriteProducts())
    }, [dispatch])

    return (
        <section className={styles.breadSection}>
            <div className="container">
                {
                    loading ? <LoaderProducts /> :
                        <>
                            {error && <h1>{error}</h1>}
                            <div className={styles.breadBlock}>
                                {
                                    breadProducts.map((prod) => {
                                        return (
                                            <CardProduct
                                                key={prod.id}
                                                {...prod}
                                                localError={localError[prod.id]}
                                                isFavorite={favoriteProducts.some((product) => product.id === prod.id)}
                                                isAddToCart={allCartProducts && allCartProducts.some((product) => product.id === prod.id)}
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