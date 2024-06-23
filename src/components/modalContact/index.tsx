import { ButtonContactPortfolio, Nav } from '../header/styles'
import icLinkedinImg from '../../assets/ic_linkedin.svg'
import icGithubImg from '../../assets/ic_github.svg'
import icCvImg from '../../assets/ic_cv.svg'
import { Container } from './styles'

interface ModalContactPropos {
  OpenModalContact: () => void
  isOpenModalContact: boolean
}

export default function ModalContact({
  OpenModalContact,
  isOpenModalContact,
}: ModalContactPropos) {
  return (
    <Container
      isOpen={isOpenModalContact}
      contentLabel="Example Modal"
      className="react-modal-content"
    >
      <div>
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
      </div>
      <form>
        <label>E-mail</label>
        <input />
        <label>Mensagem</label>
        <textarea />
        <div>
          <button onClick={OpenModalContact}>Cancelar</button>
          <button onClick={OpenModalContact}>Enviar</button>
        </div>
      </form>
    </Container>
  )
}
