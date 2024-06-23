import logoFImg from '../../assets/ic_logo.svg'
import icArrowContactImg from '../../assets/ic_seta.svg'
import icLinkedinImg from '../../assets/ic_linkedin.svg'
import icGithubImg from '../../assets/ic_github.svg'
import icCvImg from '../../assets/ic_cv.svg'

import {
  Container,
  CircleLogo,
  Logo,
  ButtonContact,
  Nav,
  ButtonContactPortfolio,
} from './styles.ts'

export default function Header() {
  return (
    <Container>
      <CircleLogo>
        <Logo>
          <img src={logoFImg} alt="Logo" width={'16px'} />
          <strong>fernanda.</strong>
        </Logo>

        <ButtonContact>
          <p> Vamos conversar</p>
          <img src={icArrowContactImg} alt="Seta contato" width={'16px'} />
        </ButtonContact>
      </CircleLogo>

      <Nav>
        <ul>
          <li>
            <ButtonContactPortfolio>
              <img src={icLinkedinImg} alt="Icon LinkedIn" width={'16px'} />
              <a href="">LinkedIn</a>
            </ButtonContactPortfolio>
          </li>
          <li>
            <ButtonContactPortfolio>
              <img src={icGithubImg} alt="Icon GitHub" width={'16px'} />
              <a href="https://github.com/Fernandamendonc">GitHub</a>
            </ButtonContactPortfolio>
          </li>
          <li>
            <ButtonContactPortfolio>
              <img src={icCvImg} alt="Icon CV" width={'16px'} />
              <a href="">CV</a>
            </ButtonContactPortfolio>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}
