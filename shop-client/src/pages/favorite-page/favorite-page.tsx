import { useDispatch, useSelector } from 'react-redux';
import styles from './favorite-page.module.css';
import { AppDispatch, RootState } from '../../store/store';
import { CardProduct } from '../../components/CardProduct/CardProduct';
import { useEffect, useState } from 'react';
import { addFavoriteProducts, deleteFavoriteProducts, getAllFavoriteProducts} from '../../store/slices/favoriteProducts/favoriteProductsSlice';
import { LoaderProducts } from '../../components/LoaderProducts/LoaderProducts';
import { useLocation } from 'react-router-dom';

interface ICardProduct {
    id: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    imgUrl: string;
}

export const FavoritePage = () => {
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const { favoriteProducts, loading } = useSelector((state: RootState) => state.favoriteProductsSlice)
    const [localError, setLocalError] = useState<{ [key: number]: string | null }>({});

    const toggleFavorite = async (product: ICardProduct) => {
        const { id, title, category, brand, price, imgUrl } = product;
        const isFavorite = favoriteProducts.some((prod) => prod.id === id)
        setLocalError((prev) => ({ ...prev, [product.id]: null })); // Сбрасываем ошибку перед новым запросом

        try {
            if (isFavorite) {
                await dispatch(deleteFavoriteProducts(id)).unwrap()
            } else {
                await dispatch(addFavoriteProducts({ id, title, category, brand, price, imgUrl })).unwrap()
            }
        } catch (error) {
            setLocalError((prev) => ({ ...prev, [product.id]: error as string })); // Устанавливаем ошибку только для этой карточки
        }
    };

    useEffect(() => {
        dispatch(getAllFavoriteProducts())
    }, [dispatch])

    return (
        <section className={styles.favorite}>
            <div className="container">
                <h2 className={styles.favoriteBlockTitle}>Избранные продукты</h2>
                {
                    loading ? <LoaderProducts /> :
                        <>
                            <div className={styles.favoriteBlock}>
                                {
                                    favoriteProducts && favoriteProducts.length > 0 ? favoriteProducts.map((prod) => {
                                        return (
                                            <CardProduct
                                                key={prod.id}
                                                {...prod}
                                                localError={localError[prod.id]}
                                                isFavorite={favoriteProducts.some((product) => product.id === prod.id)}
                                                toggleFavorite={() => toggleFavorite(prod)}
                                                location={location}
                                            />
                                        )
                                    }) : <p>В избранное пока не добавлено продуктов...</p>
                                }

                            </div>
                        </>
                }

            </div>
        </section>
    )
} 