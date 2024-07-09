import {
  Container,
  ContentHeader,
  Title,
  Description,
  ContentImg,
} from './styles.ts'

export interface PersonalProjectsType {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly img: string
  readonly colorBorder: string
}

interface PersonalProjectsProps {
  readonly personalProject: PersonalProjectsType
}

export default function ProjectCarousel({
  personalProject,
}: PersonalProjectsProps) {
  return (
    <Container colorBorder={personalProject.colorBorder}>
      <ContentHeader>
        <ContentImg>
          <img src={personalProject.img} alt="" />
        </ContentImg>
        <Title colorBorder={personalProject.colorBorder}>
          {personalProject.title}
        </Title>
        <Description>{personalProject.description}</Description>
      </ContentHeader>
    </Container>
  )
}
