import {
  Container,
  ContentHeader,
  Title,
  Description,
  ContentImg,
} from './styles.ts'

export interface ProjectType {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly img: string
  readonly colorBorder: string
}

interface ProjectsProps {
  readonly project: ProjectType
}

export default function Carousel({ project }: ProjectsProps) {
  return (
    <Container colorBorder={project.colorBorder}>
      <ContentHeader>
        <Title colorBorder={project.colorBorder}>{project.title}</Title>
        <Description>{project.description}</Description>
      </ContentHeader>

      <ContentImg>
        <img src={project.img} alt="" />
      </ContentImg>
    </Container>
  )
}
