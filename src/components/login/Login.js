import { useState } from 'react';

import styles from './Login.module.css';

import Card from '../UI/Card';

const Login = (props) => {
    const [inputedEmail, setInputedEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [inputedPassword, setInputedPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const emailHandler = (event) => {
        setInputedEmail(event.target.value);

        if (inputedEmail.includes('@') && inputedEmail.includes('.')) {
            setValidEmail(true);
        }
    };

    const passwordHandler = (event) => {
        setInputedPassword(event.target.value);

        if (inputedPassword.trim().length > 7) {
            setValidPassword(true);
        }
    };

    const loginHandler = (event) => {
        event.preventDefault();

        if (validEmail && validPassword) {
            props.onLogin();
        }
    };

    return (
        <Card>
            <form onSubmit={loginHandler} className={styles.form}>
                <div className={styles['form-group']}>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="email"
                        maxLength="80"
                        value={inputedEmail}
                        onChange={emailHandler}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={inputedPassword}
                        onChange={passwordHandler}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </Card>
    );
};

export default Login;
