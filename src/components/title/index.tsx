import { Container, Content } from './styles'

interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
  return (
    <Container>
      <Content>
        <span>{title}</span>
      </Content>
    </Container>
  )
}
