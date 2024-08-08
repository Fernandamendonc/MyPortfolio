import Header from './components/header'
import Introduction from './components/introduction'
import PersonalProjects from './components/personalProjects'
import WorkExperienceTimeline from './components/workExperienceTimeline'
import { Container, Wrapper, ContainerHardSkills } from './styles/global'
import ContactMe from './components/contactMe'
import { technologies } from './db/technologies'
import HardSkills from './components/hardSkills'

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Introduction />
      </Wrapper>

      <PersonalProjects />

      <Wrapper>
        <WorkExperienceTimeline />

        <ContainerHardSkills>
          {technologies.map((technology) => {
            return (
              <HardSkills
                key={technology.id}
                technology={technology}
              ></HardSkills>
            )
          })}
        </ContainerHardSkills>

        <ContactMe />
      </Wrapper>
    </Container>
  )
}

export default App
