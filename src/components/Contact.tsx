import ArrowUpIcon from '../assets/arrow-up.svg';
import CopyIcon from '../assets/copyIcon.svg';
import EmailIcon from '../assets/emailIcon.svg';
import WhatsAppIcon from '../assets/whatsapp.svg';
import styles from '../styles/contact.module.scss';

function Contact() {
    return (
        <section className={styles.section}>
            <h2 className='h2'>📬 Contatos</h2>
            <strong className='strong'>
                Vamos conversar!
            </strong>

            <article className={styles['contact-container']}>
                <div className={styles['whats-container']}>
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
                    <p>eduardojarek66@gmail.com</p>
                    <img
                        src={CopyIcon}
                        alt='Icone para copiar o email'
                    />
                </div>

            </article>
            <div className={styles['back-to-the-top']}>
                <strong>
                    Voltar ao topo
                </strong>
                <img
                    src={ArrowUpIcon}
                    alt='Icone de seta para cima para voltar ao topo do site'
                />
            </div>
        </section >
    )
}

export default Contact;