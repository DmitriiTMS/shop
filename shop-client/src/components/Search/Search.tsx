import { useDispatch } from 'react-redux';
import search from '../../assets/images/header/search.svg'

import styles from './Search.module.css';
import { filterProducts } from '../../store/slices/productSlice';

export const Search = () => {
    const dispatch = useDispatch();

    const handleFilter = (title: string) => {
        dispatch(filterProducts(title));
    };
    return (
        <div className={styles.search} >
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Начать поиск"
                onChange={(e) => handleFilter(e.target.value)} />
            <img className={styles.searchImg} src={search} alt="search" />
        </div>
    )
}