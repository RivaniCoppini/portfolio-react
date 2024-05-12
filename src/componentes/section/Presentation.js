import styles from './Presentation.module.css';
import ButtonA from '../elementos/ButtonA';

function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, Eu sou Rivani Coppini!</h1>
            <p>Apaixonado por tecnologia e soluções inovadoras, <br/>quero muito desenvolver projetos que sejam realmente <br/>impactantes e resolver problemas usando a tecnologia.</p>
            <ButtonA link='https://github.com/RivaniCoppini' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation