import { Container, Title, Description } from './styles.ts'

export interface ProjectType {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly img: string
}

interface ProjectsProps {
  readonly project: ProjectType
}

export default function Carousel({ project }: ProjectsProps) {
  return (
    <Container>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <img src={project.img} alt="" />
    </Container>
  )
}
