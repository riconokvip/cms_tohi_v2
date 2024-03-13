import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const guardian= (AuthComponent) => {
    const Component = () => {
        const nav = useNavigate();
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        React.useEffect(() => {
            if (isAuthenticated) {
                // handle auth
            }
            else {
                nav("/login");
            }
        }, []);

        return isAuthenticated ? <AuthComponent /> : null
    }
    return Component;
}

export default guardian;