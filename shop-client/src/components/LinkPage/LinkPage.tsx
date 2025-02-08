import React from "react"
import { Link } from "react-router-dom"

import styles from './LinkPage.module.css';

interface ILinkPage {
    path: string
    pathTitle: string
}
export const LinkPage: React.FC<ILinkPage> = ({path, pathTitle}) => {
    return (
        <li className={styles.linkPageLi}>
            <Link className={styles.linkPage} to={path}>{pathTitle}</Link>
        </li>
    )
}