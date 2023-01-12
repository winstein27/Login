import { useState } from 'react';

import Header from './components/header/Header';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    const logoutHandler = () => {
        setIsLogged(false);
    };

    return <Header userIsLogged={isLogged} onLogout={logoutHandler} />;
}

export default App;
