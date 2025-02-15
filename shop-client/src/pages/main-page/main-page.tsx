import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { CardProduct } from '../../components/CardProduct/CardProduct';
import { Search } from '../../components/Search/Search';

import { addFavoriteProducts, deleteFavoriteProducts, getAllFavoriteProducts } from '../../store/slices/favoriteProducts/favoriteProductsSlice';
import { SortProducts } from '../../components/SortProducts/SortProducts';
import { getAllProducts } from '../../store/slices/products/productSlice';

import Skeleton from 'react-loading-skeleton'
import styles from './main-page.module.css'

interface ICardProduct {
    id: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    imgUrl: string;
}

export const MainPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.productsSlice)
    const { favoriteProducts } = useSelector((state: RootState) => state.favoriteProductsSlice);

    const [searchInput, setSearchInput] = useState<string>("");
    const [sort, setSort] = useState<string>("");
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

    const togglePrice = (sortPriceValue: string) => {
        if (sortPriceValue === sort) {
            setSort("")
            return
        }
        setSort(sortPriceValue)
    }


    useEffect(() => {
        dispatch(getAllProducts({ searchInput, sort }));
    }, [dispatch, searchInput, sort])

    useEffect(() => {
        dispatch(getAllFavoriteProducts())
    }, [dispatch])


    return (
        <section className={styles.bread}>
            <div className="container">
                <h2 className={styles.breadBlockTitle}>Все продукты</h2>
                <div className={styles.filtersBlock}>
                    <div className={styles.search}>
                        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
                    </div>
                    <div>
                        <SortProducts sort={sort} togglePrice={togglePrice} />
                    </div>
                </div>
                <div className={styles.breadBlock}>
                    {loading ?
                        Array.from({ length: products.length }).map((_, index) => (
                            <Skeleton key={index}
                                borderRadius={10}
                                duration={0.8}
                                height={360}
                                customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)" />
                        ))
                        : <>
                            {error && <h1>{error}</h1>}
                            {
                                products.length > 0 ? products.map((prod) => {
                                    return (
                                        <CardProduct
                                            key={prod.id}
                                            {...prod}
                                            localError={localError[prod.id]}
                                            isFavorite={favoriteProducts.some((product) => product.id === prod.id)}
                                            toggleFavorite={() => toggleFavorite(prod)}
                                        />
                                    )
                                }) : <p>Продукт по названию либо бренду либо категории не найден</p>
                            }
                        </>}


                </div>
            </div>
        </section>
    )
} 