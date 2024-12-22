// import './footer.css';
import style from "./footer.module.css"
const Footer = ()=>{
  return(
    <>
    <div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>servic</li>
        <li>next</li>
      </ul>
    </div>
    <div>
      <p className={style.demo}>copyright 2020</p>
    </div>
    </>
  )
}

export default Footer;