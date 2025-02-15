import styles from './loader.module.css';

export const Loader = () => {
    return <div className={styles.loaderBlock}>
        <span className={styles.loader}></span>
    </div> 
}