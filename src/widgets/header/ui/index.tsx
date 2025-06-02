'use client'
import { useAuthStore } from '@/features/auth/model/authStore'
import styles from './index.module.scss'
import { useShallow } from 'zustand/shallow'

export const Header: React.FC = () => {

    const { isAuthenticated, user, logout } = useAuthStore(useShallow(
        state => ({
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            logout: state.logout
        }))
    );
    return (
        <div className={styles['header']}>
            <div className={styles['header-info_container']}>
                <div className={styles['header-info_content']}>
                    <div className={styles['header-info_content-left']}>
                        <span>+021-95-51-84</span>
                        <span>shop@abelohost.com</span>
                        <span>1734 Stonecoal Road</span>
                    </div>
                    <div className={styles['header-info_content-right']}>
                        {isAuthenticated ?
                            <>
                                <button onClick={logout}>logout</button>
                                <span>{`${user?.firstName} ${user?.lastName}`}</span>
                            </>
                            : <span>login</span>
                        }
                    </div>
                </div>
            </div>
            <div className={styles['header-banner_container']}>
                <div className={styles['header-banner_content']}>
                    <span>Abelohost shop<span style={{ color: 'red' }}>.</span></span>
                    <div style={{ width: '50%', height: '100px', backgroundColor: 'gray' }}>600X70</div>
                </div>
            </div>
        </div>
    )
}