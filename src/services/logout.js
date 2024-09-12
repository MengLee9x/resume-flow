import Cookies from "js-cookie";

export const logout = async () => {
    try {
        const token = Cookies.get('accessToken');

        const response = await fetch('http://localhost:4000/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Logout failed');
        }
        Cookies.remove('accessToken');
        Cookies.remove('userRole');
        Cookies.remove('userName');

        return { success: true, message: 'Logged out successfully' };
    } catch (error) {
        console.error('Logout failed', error);
        return { success: false, message: 'Logout failed' };
    }
};