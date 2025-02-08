import search from '../../assets/images/header/search.svg'

import styles from './Search.module.css';

export const Search = () => {
    return (
        <div className={styles.search} >
            <input className={styles.searchInput} type="text" placeholder="Начать поиск" />
            <img className={styles.searchImg} src={search} alt="search" />
        </div>
    )
}