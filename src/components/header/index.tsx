import './styles.css'
import circleLogoImg from '../../assets/circleLogo.svg'

export default function Header() {

  return (
    <>
    <div className='container'>
      <div className='circleLogo'>
        <img src={circleLogoImg} alt=''/>
        <span>meu portfolio</span>
      </div>

      <nav>
        <ul><a href=''></a>sobre mim</ul>
        <ul><a href=''></a>hardskills</ul>
        <ul><a href=''></a>projetos</ul>
        <ul><a href=''></a>contato</ul>
        <ul><a href=''></a>resumo</ul>
        <ul><a href=''></a>linha do tempo</ul>
      </nav>
    </div>
    </>
  )
}