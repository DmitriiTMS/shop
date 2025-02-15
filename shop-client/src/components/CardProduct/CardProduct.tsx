import React, { useState } from "react";
import styles from "./CardProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addFavoriteProducts, deleteFavoriteProducts } from "../../store/slices/favoriteProducts/favoriteProductsSlice";

interface ICardProduct {
  id: number;
  title: string;
  category: string;
  brand: string;
  price: number;
  imgUrl: string;
}

export const CardProduct: React.FC<ICardProduct> = ({
  id,
  title,
  category,
  brand,
  price,
  imgUrl,
}) => {

  const dispatch = useDispatch<AppDispatch>();
  const { favoriteProducts } = useSelector((state: RootState) => state.favoriteProductsSlice);
  const isFavorite = favoriteProducts.some(product => product.id === id);

  const [localError, setLocalError] = useState<string | null>(null);

  const toggleFavorite = async () => {
    setLocalError(null); // Сбрасываем ошибку перед новым запросом
    try {
      if (isFavorite) {
        await dispatch(deleteFavoriteProducts(id)).unwrap();
      } else {
        await dispatch(addFavoriteProducts({ id, title, category, brand, price, imgUrl })).unwrap();
      }
    } catch (error) {
      setLocalError(error as string); // Устанавливаем ошибку только для этой карточки
    }
  };

  return (
    <div className={styles.cardProduct}>
      {localError && <span>{isFavorite ? 'Не удалён из избранного (ошибка)' :'Не добавлен в избранное (ошибка)'}</span>}
      <img className={styles.prodImg} src={imgUrl} alt={title} />
      <div>
        <svg
          onClick={toggleFavorite}
          fill={isFavorite ? "red" : "#000000"}
          height="38px"
          width="38px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 471.701 471.701"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path>{" "}
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.prodInfo}>
        <h3 className={styles.prodTitle}>Название: {title}</h3>
        <p>Категория: {category}</p>
        <p>Бренд: {brand}</p>
        <p>Цена: {price} бел.руб</p>
      </div>
    </div>
  );
};
