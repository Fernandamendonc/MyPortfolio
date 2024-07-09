import Header from './components/header'
import Introduction from './components/introduction'
import PersonalProjects from './components/personalProjects'
import WorkExperienceTimeline from './components/workExperienceTimeline'
import { Container, Wrapper } from './styles/global'
import ContactMe from './components/contactMe'
import { technologies } from './db/technologies'
import ButtonApps from './components/buttonApps'

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

        <div style={{ display: 'flex' }}>
          {technologies.map((technology) => {
            return (
              <ButtonApps
                key={technology.id}
                technology={technology}
              ></ButtonApps>
            )
          })}
        </div>

        <ContactMe />
      </Wrapper>
    </Container>
  )
}

export default App
