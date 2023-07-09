import styles from '../styles/aboutme.module.scss';

function AboutMe() {
    return (
        <section className={styles.section} id='aboutme'>

            <div className={styles['pic-div']} />

            <div className={styles['about-me']}>
                <strong className='strong'>🧐 Sobre mim</strong>
                <h1 className='h1-name'>Eduardo</h1>
                <span>👋 Com habilidades tecnológicas.</span>
                <span>👨‍💻 Desenvolvendo e programando com JavaScript, Typescript, React JS e Node JS.</span>
                <span>🎓 Formado no curso de Desenvolvimento de Softwares FullStack pela Cubos Academy.</span>
                <span>💡 Interesses em desenvolvimento Front-end e/ou Back-end.</span>
                <span>🚀 Tentando ser um pouquinho melhor do que ontem todos dias.</span>
            </div>
        </section>
    )
}

export default AboutMe;