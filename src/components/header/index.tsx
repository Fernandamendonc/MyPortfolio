import logoFImg from '../../assets/logo-f.svg'
import icArrowContactImg from '../../assets/ic_seta_contato.svg'
import icLinkedinImg from '../../assets/ic_linkedin.svg'
import icGithubImg from '../../assets/ic_github.svg'
import icCvImg from '../../assets/ic_cv.svg'

import { Container, CircleLogo, Logo, ButtonContact, Nav, ButtonContactPortfolio } from './styles.ts'

export default function Header() {

  return (

    <Container>
      <CircleLogo>
        <Logo>
          <img src={logoFImg} alt='Logo' width={"16px"}/>
          <span>fernanda.</span>
        </Logo>

        <ButtonContact>
          <p> Vamos conversar</p>
          <img src={icArrowContactImg} alt='Seta contato' width={"16px"}/>
        </ButtonContact>
      </CircleLogo>

      <Nav>
        <ul>
          <li>
            <ButtonContactPortfolio>
              <img src={icLinkedinImg} alt='Seta contato' width={"16px"}/>
              <a href="">LinkedIn</a>
            </ButtonContactPortfolio>
          </li>
          <li>
            <ButtonContactPortfolio>
              <img src={icGithubImg} alt='Seta contato' width={"16px"}/>
              <a href="https://github.com/Fernandamendonc">GitHub</a>
            </ButtonContactPortfolio>
          </li>
          <li>
            <ButtonContactPortfolio>
              <img src={icCvImg} alt='Seta contato' width={"16px"}/>
              <a href="">CV</a>
              </ButtonContactPortfolio>
            </li>
        </ul>
      </Nav>

    </Container>
  )
}