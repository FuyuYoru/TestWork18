import { ApiPaths, baseURL } from "@/shared/api/apiPaths";

export const signIn = async (login: string, pass: string) => {
    try {
        const response = await fetch(baseURL + ApiPaths.signIn(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //   credentials: 'include',
            body: JSON.stringify({
                username: login,
                password: pass,
            }),
        });

        if (!response.ok) {
            if (response.status === 401 || response.status === 400) {
                throw new Error('Invalid username or password');
            } else {
                throw new Error('Failed to connect to the server. Please try again later.');
            }
        }

        const data = await response.json();
        const { accessToken, refreshToken, ...user } = data;
        console.log(accessToken)
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        return user;

    } catch (error: any) {
        throw new Error(error.message || 'An unknown error occurred');
    }
};
