'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/features/auth/model/authStore';
import styles from './page.module.scss';
import { signIn } from '@/features/auth/api/signIn';
import { useNotification } from '@/providers/NotificationProvider';
import { Input } from '@/shared/ui/input';
import { IconButton } from '@/shared/ui/IconButton';
import { LogIn } from 'lucide-react';

export default function Auth() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { addNotification } = useNotification();
  const login = useAuthStore((state) => state.login);

  const loginHandler = async () => {
    if (username.length < 3 || password.length < 3) {
      addNotification('Fields are filled in incorrectly');
      return;
    }

    setIsSubmitting(true);

    try {
      const user = await signIn(username, password);
      addNotification(`Hello, ${user?.firstName}`);
      login(user);
      router.replace('/');
    } catch (e) {
      addNotification(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles['page']}>
      <h3>Login</h3>
      <div className={styles['page_form']}>
        <Input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isSubmitting}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isSubmitting}
        />
        <IconButton
          icon={LogIn}
          onClick={loginHandler}
          label="Login"
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
}
