import { useEffect, useState } from 'react';
function useTheme() {
    const[theme, setTheme] = useState('light');
    
    const toggleTheme = ()  => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return {
        theme,
        toggleTheme
    };
}
export default useTheme;