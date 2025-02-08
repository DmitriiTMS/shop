
import { linkPage } from '../../mockData/linkPage'
import { LinkPage } from '../LinkPage/LinkPage'


import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerBlock}>
                    <nav>
                        <ul className={styles.navigation}>
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
                </div>
            </div>
        </footer>
    )
}