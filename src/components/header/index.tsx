import circleLogoImg from '../../assets/circleLogo.svg'
import { Container, CircleLogo } from './styles.ts'

export default function Header() {

  return (
    <>
    <Container>
      <CircleLogo>
        <img src={circleLogoImg} alt=''/>
        <span>meu portfolio</span>
      </CircleLogo>

      <nav>
        <ul><a href=''></a>sobre mim</ul>
        <ul><a href=''></a>hardskills</ul>
        <ul><a href=''></a>projetos</ul>
        <ul><a href=''></a>contato</ul>
        <ul><a href=''></a>resumo</ul>
        <ul><a href=''></a>linha do tempo</ul>
      </nav>
    </Container>
    </>
  )
}