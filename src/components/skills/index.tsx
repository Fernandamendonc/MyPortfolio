import logoFigma from '../../assets/ic_figma.svg'
import logoNode from '../../assets/ic_nodeJs.svg'
import logoPython from '../../assets/ic_python.svg'
import logoReact from '../../assets/ic_react.svg'
import logoTypescript from '../../assets/ic_typescript.svg'
import { Container, Content } from './styles.ts'

export default function Skills() {
  return (
    <Container>
      <Content>
        <img src={logoFigma} alt="" />
        <img src={logoNode} alt="" />
        <img src={logoPython} alt="" />
        <img src={logoReact} alt="" />
        <img src={logoTypescript} alt="" />
      </Content>
    </Container>
  )
}
