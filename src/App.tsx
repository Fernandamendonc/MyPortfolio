import { Container, Wrapper } from './styles/App'
import Header from './components/header'
import Introduction from './components/introduction'
import Projects from './components/projects'
import HardSkills from './components/hardskills'

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Introduction />
      </Wrapper>
      <Projects />

      <HardSkills />
    </Container>
  )
}

export default App
