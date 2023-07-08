import { Link } from "react-router-dom";
import styles from '../styles/header.module.scss';
import Avatar from '../assets/avatar.svg';
import WhatsAppIcon from '../assets/whatsapp.svg'
import LinkdinIcon from '../assets/linkdin.svg';
import GithubIcon from '../assets/github.svg';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <Link to='#' className={styles.selected}>Home</Link>
                        <Link to='#'>Sobre mim</Link>
                        <Link to='#'>Portfólio</Link>
                        <Link to='#'> Skill</Link>
                        <Link to='#'>Carreira</Link>
                        <Link to='#'>Recomendações</Link>
                        <Link to='#'>Contato</Link>
                    </li>
                </ul>
            </nav>

            <div className={styles['header-content']}>
                <div className={styles['header-user-div']}>
                    <strong className={styles['greetings-div']}>👋 Saudações</strong>
                    <h1>Eduardo</h1>
                    <span>Full-Stack developer</span>
                    <div className={styles['stacks-div']}>
                        <img
                            src={LinkdinIcon}
                            alt="Icone do linkedin"
                        />
                        <img
                            src={GithubIcon}
                            alt="Icone do Github"
                        />
                    </div>
                </div>
                <img
                    src={Avatar}
                    alt="Avatar do Eduardo"
                    className={styles.avatar}
                />
                <div className={styles['contact-div']}>
                    <strong>Baixar CV</strong>
                    <div className={styles['whats-div']}>
                        <img
                            src={WhatsAppIcon}
                            alt="Icone do whatsApp"
                        />
                        <span>Vamos conversar</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;