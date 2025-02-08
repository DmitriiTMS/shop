import { linkPage } from "../../mockData/linkPage";
import { LinkPage } from "../LinkPage/LinkPage"

import styles from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationUl}>
                {
                    linkPage.map((item) => {
                        return (
                            <LinkPage
                                key={item.id}
                                path={item.path}
                                pathTitle={item.pathTitle} />
                        )
                    })
                }
            </ul>
        </nav>
    )
}