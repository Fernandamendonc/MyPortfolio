import { experiences } from '../../db/experience'
import Experience from '../experience/index'
import Title from '../title'
import { Container } from './styles'

export default function ExperienceWork() {
  return (
    <Container>
      <Title title="Experiencia" />

      {experiences.map((experience) => {
        return <Experience experience={experience} key={experience.id} />
      })}
    </Container>
  )
}
