'use client';

import { Input } from '@/shared/ui/input';
import { signIn } from '@/features/auth/api/signIn';
import { useState } from 'react';
import { useAuthStore } from '@/features/auth/model/authStore';
import { useNotification } from '@/providers/NotificationProvider';

export const AuthForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {addNotification} = useNotification();

    const login = useAuthStore((state) => state.login);

    const loginHandler = async () => {

        if (username.length < 3 || password.length < 3) {
            addNotification('Fields are filled in incorrectly')
            return;
        }
        try {
            const user = await signIn(username, password);
            addNotification(`Hello, ${user?.firstName}`)
            login(user)
        } catch (e) {
            addNotification(e.message)
        }
    };

    return (
        <div className="">
            <span>Login</span>
            <div>
                <Input
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={loginHandler}>Login</button>
            </div>
        </div>
    );
};
