import { LinkPage } from "../LinkPage/LinkPage"

import styles from './NavigationPage.module.css';

export const NavigationPage = () => {
    const linkPage = [
        { id: 1, path: "/breadandpastries", pathTitle: "Хлеб и выпечка" },
        { id: 2, path: "/conditer", pathTitle: "Пирожные" },
    ]
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationUl}>
                {
                    linkPage.map((item) => {
                        return (
                            <LinkPage key={item.id} path={item.path} pathTitle={item.pathTitle} />
                        )
                    })
                }
            </ul>
        </nav>
    )
}