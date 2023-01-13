import { useState } from 'react';

import styles from './Login.module.css';

import Card from '../UI/Card';

const Login = (props) => {
    const [inputedEmail, setInputedEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [inputedPassword, setInputedPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        const email = event.target.value;
        setInputedEmail(email);

        setFormIsValid(
            email.includes('@') &&
                email.includes('.') &&
                inputedPassword.trim().length > 7
        );
    };

    const emailValidationHandler = () => {
        setEmailIsValid(
            inputedEmail.includes('@') && inputedEmail.includes('.')
        );
    };

    const passwordChangeHandler = (event) => {
        const password = event.target.value;
        setInputedPassword(password);

        setFormIsValid(
            inputedEmail.includes('@') &&
                inputedEmail.includes('.') &&
                password.trim().length > 7
        );
    };

    const passwordValidationHandler = () => {
        setPasswordIsValid(inputedPassword.trim().length > 7);
    };

    const loginHandler = (event) => {
        event.preventDefault();

        if (formIsValid) {
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
                        onChange={emailChangeHandler}
                        onBlur={emailValidationHandler}
                        className={emailIsValid === false ? styles.invalid : ''}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={inputedPassword}
                        onChange={passwordChangeHandler}
                        onBlur={passwordValidationHandler}
                        className={
                            passwordIsValid === false ? styles.invalid : ''
                        }
                    />
                </div>
                <button type="submit" disabled={!formIsValid}>
                    Send
                </button>
            </form>
        </Card>
    );
};

export default Login;
