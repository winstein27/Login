import { useState } from 'react';

import Header from './components/header/Header';
import Login from './components/login/Login';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    const logoutHandler = () => {
        setIsLogged(false);
    };

    const loginHandler = () => {
        setIsLogged(true);
    };

    return (
        <>
            <Header userIsLogged={isLogged} onLogout={logoutHandler} />
            {!isLogged && <Login onLogin={loginHandler} />}
        </>
    );
}

export default App;
