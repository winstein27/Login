import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            {props.userIsLogged && (
                <button type="button" onClick={props.onLogout}>
                    Logout
                </button>
            )}
        </header>
    );
};

export default Header;
