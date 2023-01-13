import { useState } from 'react';

import Header from './components/header/Header';
import Login from './components/login/Login';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    const logoutHandler = () => {
        setIsLogged(false);
    };

    return (
        <>
            <Header userIsLogged={isLogged} onLogout={logoutHandler} />
            <Login />
        </>
    );
}

export default App;
