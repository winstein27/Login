import styles from './Login.module.css';

import Card from '../UI/Card';

const Login = () => {
    const loginHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card>
            <form onSubmit={loginHandler} className={styles.form}>
                <div className={styles['form-group']}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" maxLength="80" />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" />
                </div>
                <button type="submit">Send</button>
            </form>
        </Card>
    );
};

export default Login;
