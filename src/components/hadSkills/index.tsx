import logoFigma from '../../assets/ic_figma.svg'
import logoNode from '../../assets/ic_node.svg'
import logoPython from '../../assets/ic_python.svg'
import logoReact from '../../assets/ic_react.svg'
import logoTypeScript from '../../assets/ic_typescript.svg'
import logoJavaScript from '../../assets/ic_javascript.svg'
import { Container, Content } from './styles.ts'

export default function HadSkills() {
  return (
    <Container>
      <Content>
        <img src={logoFigma} alt="" />
        <img src={logoNode} alt="" />
        <img src={logoPython} alt="" />
        <img src={logoReact} alt="" />
        <img src={logoTypeScript} alt="" />
        <img src={logoJavaScript} alt="" />
      </Content>
    </Container>
  )
}
