
import { Link } from 'react-router-dom';
import ponchik from '../../assets/images/not-found/ponchik.png';

import styles from './not-found.module.css';

export const NotFoundPage = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.notFoundBlock}>
                    <div>
                        <h3 className={styles.notFoundBlockTitle}>Ошибка</h3>
                        <div className={styles.notFoundBlockNumbers}>
                            <p className={styles.notFoundBlockNumber}>4</p>
                            <img src={ponchik} alt="ponchik" />
                            <p className={styles.notFoundBlockNumber}>4</p>
                        </div>
                        <p className={styles.notFoundBlockText}>Ой! Кажется что-то пошло не так. Страница, которую вы запрашиваете, не существует. 
                            Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.</p>
                        <Link className={styles.notFoundBlockLink} to="/">Вернуться на главную</Link>
                    </div>

                </div>

            </div>
        </section>
    )
}