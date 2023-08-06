import { Link } from 'react-scroll';
import ArrowUpIcon from '../assets/arrow-up.svg';
import CopyIcon from '../assets/copyIcon.svg';
import EmailIcon from '../assets/emailIcon.svg';
import WhatsAppIcon from '../assets/whatsapp.svg';
import styles from '../styles/contact.module.scss';
import whatsAppContact from '../utils/whatsAppContact';

function Contact() {
    const handleCopyEmail = () => {
        const emailContainer = document.querySelector(`.${styles.p}`) as HTMLParagraphElement | null;
        if (emailContainer) {
            const email = emailContainer.innerText;

            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            console.log('a')
        }
        console.log(emailContainer)
    }

    return (
        <section className={styles.section} id='contact'>
            <h2 className='h2'>📬 Contatos</h2>
            <strong className='strong'>
                Vamos conversar!
            </strong>

            <article className={styles['contact-container']}>
                <div
                    className={styles['whats-container']}
                    onClick={() => whatsAppContact()}
                >
                    <img
                        src={WhatsAppIcon}
                        alt="Icone do whatsApp"
                    />
                    <strong>Vamos conversar</strong>
                </div>

                <div className={styles['email-container']}>
                    <img
                        src={EmailIcon}
                        alt='Icone de email'
                    />
                    <strong>E-mail</strong>
                    <p className={styles.p}>eduardojarek66@gmail.com</p>
                    <img
                        className='copy-icon'
                        src={CopyIcon}
                        alt='Icone para copiar o email'
                        onClick={handleCopyEmail}
                    />
                </div>

            </article>
            <Link
                to='home'
                className={styles['back-to-the-top']}
                smooth
            >
                <strong>
                    Voltar ao topo
                </strong>
                <img
                    src={ArrowUpIcon}
                    alt='Icone de seta para cima para voltar ao topo do site'
                />
            </Link>
        </section >
    )
}

export default Contact;