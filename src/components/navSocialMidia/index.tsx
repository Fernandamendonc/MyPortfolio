import icLinkedinImg from '../../assets/ic_linkedin.svg'
import icGithubImg from '../../assets/ic_github_claro.svg'
import icCvImg from '../../assets/ic_cv.svg'
import { ButtonContactPortfolio, Nav } from './styles'

export default function NavSocialMidia() {
  return (
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
  )
}
