import Header from './components/header'
import Introduction from './components/introduction'
import PersonalProjects from './components/personalProjects'
import Skills from './components/skills'
import WorkExperienceTimeline from './components/workExperienceTimeline'
import Contact from './components/contact'
import { Container, Wrapper } from './styles/global'

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
        <Skills />
        <Contact />
      </Wrapper>
    </Container>
  )
}

export default App
