import { Container } from './styles'

export interface TechnologiesTypes {
  readonly id: string
  readonly icon: string
  readonly title: string
  readonly colorBg: string
  readonly timeExperience: number
}
interface TechnologiesPropos {
  readonly technology: TechnologiesTypes
}

export default function ButtonApps({ technology }: TechnologiesPropos) {
  return (
    <Container colorBg={technology.colorBg}>
      <img src={technology.icon} alt="" width={32} height={32} />
    </Container>
  )
}
