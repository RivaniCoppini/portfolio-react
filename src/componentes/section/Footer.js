import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/oficialrivanicoppini'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/rivani-coppini-110791132'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/RivaniCoppini'><FaGithub size={30} /></a></li>
            </ul>
            <p>rivanidev@gmail.com</p>
            <p>Rivani Coppini ©️ 2024</p>
        </div>
    )
}
export default Footer