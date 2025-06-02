'use client'
import { useAuthStore } from '@/features/auth/model/authStore'
import styles from './index.module.scss'
import { useShallow } from 'zustand/shallow'
import { IconButton } from '@/shared/ui/IconButton'
import { LogOut, Mail, MapPin, Phone, UserRound } from 'lucide-react'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export const Header: React.FC = () => {
    const router = useRouter();
    const { isAuthenticated, user, logout } = useAuthStore(useShallow(
        state => ({
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            logout: state.logout
        }))
    );

    const handleLogin = useCallback(() => {
        router.replace('/auth')
    },[])

    return (
        <div className={styles['header']}>
            <div className={styles['header-info_container']}>
                <div className={styles['header-info_content']}>
                    <div className={styles['header-info_content-left']}>
                        <IconButton icon={Phone} label='+021-95-51-84' variant='transparent'/>
                        <IconButton icon={Mail} label='shop@abelohost.com' variant='transparent'/>
                        <IconButton icon={MapPin} label='1734 Stonecoal Road' variant='transparent'/>
                    </div>
                    <div className={styles['header-info_content-right']}>
                        {isAuthenticated ?
                            <>
                                <IconButton icon={LogOut} label='Logout' variant='transparent' onClick={logout}/>
                                <span>{`${user?.firstName} ${user?.lastName}`}</span>
                            </>
                            : <IconButton icon={UserRound} label='Login' variant='transparent' onClick={handleLogin} />
                        }
                    </div>
                </div>
            </div>
            <div className={styles['header-banner_container']}>
                <div className={styles['header-banner_content']}>
                    <span>Abelohost shop<span style={{ color: 'red' }}>.</span></span>
                    {/* <div
                        style={{
                            width: '50%',
                            height: '100px',
                            backgroundColor: 'gray',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >600X70 Banner
                    </div> */}
                </div>
            </div>
        </div>
    )
}