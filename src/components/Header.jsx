import styles from './Header.module.css'

import IgniteLogo from '../assets/Ignite-logo.svg';

console.log(IgniteLogo);

export function Header(){
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Logotipo do Ignite"/>
        </header>
    );
}