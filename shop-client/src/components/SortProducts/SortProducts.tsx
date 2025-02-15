import styles from './SortProducts.module.css';


interface ISort {
    sort: string
    togglePrice: (value: string) => void
}

export const SortProducts: React.FC<ISort> = ({sort, togglePrice }) => {

    return (
        <div className={styles.sort}>
            <div className={styles.sortTitle}>
                <span>Сортировка по цене:</span>
            </div>
            <div className={styles.sortButtons}>
                <button
                    onClick={() => togglePrice('asc')}
                    className={sort === "asc" ? styles.active : ""}
                >По возрастанию</button>
                <button
                    onClick={() => togglePrice('desc')}
                    className={sort === "desc" ? styles.active : ""}
                    >
                    По убыванию</button>
            </div>
        </div>
    )
}