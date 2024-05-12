import ButtonB from '../elementos/ButtonB'
import styles from './Projects.module.css'
import Card from '../elementos/Card'
import projeto1 from '../../images/projects/projeto1.svg'

function Projects(){
    return(
        <div className={styles.projects} id='projects'>
            <h1>Projetos</h1>
            <Card
            img={projeto1}
            title="Landing page DNC"
            tech=" HTML, CSS, JS"
            description="Desenvolvimento de uma Landing page para lançamento da formação de tecnologiaEste é o projeto de desenvolvimento do modulo base do curso de tecnologia da DNC"
            repo="https://github.com/RivaniCoppini/projeto-landing-page"
            site=""
            />
           
            <ButtonB text='Acesse meu repositório' link='https://github.com/RivaniCoppini?tab=repositories'/>
        </div>
        
    )
}

export default Projects