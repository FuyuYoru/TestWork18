'use client'
import { useAuthStore } from '@/features/auth/model/authStore';
import styles from './index.module.scss'
import { useShallow } from 'zustand/shallow';
export const Footer: React.FC = () => {

    const { isAuthenticated, user } = useAuthStore(useShallow(state => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
    })));

    const year = new Date().getFullYear();

    return (
        <div className={styles['footer_container']}>
            <div className={styles['footer_content']}>
                <span>
                    &copy; {year} {isAuthenticated && user?.email ? `— Logged as ${user.email}` : ''}
                </span>
            </div>
        </div>
    )
}