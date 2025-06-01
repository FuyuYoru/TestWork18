import styles from './index.module.scss'
export const Header: React.FC = () => {
    return (
        <div className={styles['header_container']}>
            <div className={styles['header_content']}></div>
        </div>
    )
}