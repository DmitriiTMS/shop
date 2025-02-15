import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { CardProduct } from '../../components/CardProduct/CardProduct';
import { Search } from '../../components/Search/Search';

import { getAllFavoriteProducts } from '../../store/slices/favoriteProducts/favoriteProductsSlice';
import { SortProducts } from '../../components/SortProducts/SortProducts';
import { getAllProducts } from '../../store/slices/products/productSlice';

import Skeleton from 'react-loading-skeleton'
import styles from './main-page.module.css'

export const MainPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.productsSlice)

    const [searchInput, setSearchInput] = useState<string>("");
    const [sort, setSort] = useState<string>("");


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
                                        <CardProduct key={prod.id} {...prod} />
                                    )
                                }) : <p>Продукт по названию либо бренду либо категории не найден</p>
                            }
                        </>}


                </div>
            </div>
        </section>
    )
} 