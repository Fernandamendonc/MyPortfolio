import logoFigma from '../../assets/figma.svg'
import logoNode from '../../assets/nodeJs.svg'
import logoPython from '../../assets/python.svg'
import logoReact from '../../assets/react.svg'
import logoTypescript from '../../assets/typescript.svg'
import { Container, HardskillsLogos } from './styles.ts'

export default function HardSkills() {
  return (
    <>
      <Container>
        <HardskillsLogos>
          <img src={logoFigma} alt="" />
          <img src={logoNode} alt="" />
          <img src={logoPython} alt="" />
          <img src={logoReact} alt="" />
          <img src={logoTypescript} alt="" />
        </HardskillsLogos>
      </Container>
    </>
  )
}
