import Title from '../title';
import { Container, Card } from './styles';


export default function Projetos() {
  const projetos = [
    {
      id:1,
      title: "DtMoney",
      description: "Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.",
      image: ""
    },
    {
      id:2,
      title: "rick and morty",
      description: "Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.",
      image: ""
    }
  ]
  
  return (
    <Container>
      <Title icon='' title='projetos'/>
      <span>Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.</span>
      {
        projetos.map(projeto => {
          return <Card key={projeto.id}/>
        })
      }
    </Container>
  )
}