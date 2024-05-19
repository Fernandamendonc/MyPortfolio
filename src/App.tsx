import { Container, Wrapper } from './styles/App'
import Header from './components/header'
import Introduction from './components/introduction'
import Projects from './components/projects'

function App() {

  return (
    <Container>
      <Wrapper>
        <Header />
        <Introduction/>
      </Wrapper>
        <Projects/> 
    </Container>
  )
}

export default App
