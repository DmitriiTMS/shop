import search from '../../assets/images/header/search.svg'
import styles from './Search.module.css';

interface ISearch {
    searchInput: string,
    setSearchInput: (value: string) => void
}

export const Search: React.FC<ISearch> = ({searchInput, setSearchInput}) => {
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