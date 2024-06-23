import {
  Container,
  TimeWorked,
  CurrentlyActive,
  Title,
  Description,
} from './styles'

export interface Description {
  titleDescription: string
}
export interface ExperienceType {
  id: number
  title: string
  date: string
  description: Description[]
  currentlyActive: string
  color: string
  link: string
  office: string
}

interface ExperienceProps {
  experience: ExperienceType
}

export default function WorkExperienceTimeline({
  experience,
}: ExperienceProps) {
  return (
    <Container>
      <Title color={experience.color}>
        {experience.office}
        <a href={experience.link}> @{experience.title}</a>
      </Title>

      <TimeWorked>
        <CurrentlyActive
          currentlyActive={experience.currentlyActive}
        ></CurrentlyActive>
        {experience.date}
      </TimeWorked>

      <Description>
        {experience.description.map((line) => {
          return <p key={line.titleDescription}> - {line.titleDescription}</p>
        })}
      </Description>
    </Container>
  )
}
