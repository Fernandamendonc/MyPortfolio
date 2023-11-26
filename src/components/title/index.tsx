import {Container} from './styles'

interface TitleProps {
  icon: string
  title: string
}

export default function Title({icon, title}:TitleProps) {

  return (
    <>
      <Container>
        <img src={icon} alt=''/>
        <span>{title}</span>
      </Container>
    </>
  )
}