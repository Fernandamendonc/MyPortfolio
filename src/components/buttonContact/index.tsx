import icArrowContactImg from '../../assets/ic_seta.svg'

import { Container } from './styles.ts'

interface ButtonContactPropos {
  openModal: () => void
}

export default function ButtonContact({ openModal }: ButtonContactPropos) {
  return (
    <Container onClick={openModal}>
      <p> Vamos conversar</p>
      <img src={icArrowContactImg} alt="Seta" width={'16px'} />
    </Container>
  )
}
