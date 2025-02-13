import search from '../../assets/images/header/search.svg'
import styles from './Search.module.css';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch} from '../../store/store';
import { useDispatch } from 'react-redux';
import { getAllProducts, searchProducts } from '../../store/slices/products/productSlice';

export const Search = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchInput, setSearchInput] = useState<string>("");
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (searchInput.trim()) {
            dispatch(searchProducts({ q: searchInput }));
        } else {
            dispatch(getAllProducts());
        }
    }, [searchInput, dispatch]);


    return (
        <div className={styles.search} >
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Начать поиск"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} />
            <img
                className={styles.searchImg}
                src={search}
                alt="search" />
        </div>
    )
}