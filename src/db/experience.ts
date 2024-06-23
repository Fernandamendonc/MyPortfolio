import { ExperienceType } from '../components/experience'

export interface SummaryInformationType {
  id: number
  title: string
  value: number
  plus: string
}

export const experiences: ExperienceType[] = [
  {
    id: 0,
    title: 'Santander',
    office: 'Estágio CX',
    description: [
      {
        titleDescription:
          'Desenvolvimento, refatoração e padronização de projetos web existentes.',
      },
      {
        titleDescription: 'Migração de linguagens em projetos web.',
      },
      {
        titleDescription:
          'Implementação de ferramentas de boas práticas no código (ESlint, Prettier).',
      },
    ],
    date: 'Maio, 2023',
    link: 'https://www.santander.com.br/',
    currentlyActive: '#69CC58',
    color: '#E40000',
  },
  {
    id: 1,
    title: 'Bless Processamento de Dados',
    office: 'Estágio de Desenvolvimento',
    description: [
      {
        titleDescription:
          'Desenvolvimento, refatoração e padronização de projetos web existentes.',
      },
      {
        titleDescription: 'Migração de linguagens em projetos web.',
      },
      {
        titleDescription:
          'Implementação de ferramentas de boas práticas no código (ESlint, Prettier).',
      },
    ],
    date: 'Dezembro, 2022 | Abril 2023',
    link: 'https://www.linkedin.com/company/serget-com-rcio-constru-es-e-servi-os-de-tr-nsito-ltda/?originalSubdomain=br',
    currentlyActive: '#5D5D5D',
    color: '#5D5D5D',
  },
]

export const summaryInformation: SummaryInformationType[] = [
  {
    id: 0,
    title: 'Projetos',
    value: 20,
    plus: '',
  },
  {
    id: 1,
    title: 'Tecnologias',
    value: 5,
    plus: '',
  },
  {
    id: 2,
    title: 'Experiência',
    value: 3,
    plus: '+',
  },
  {
    id: 3,
    title: 'Experiência de trabalho',
    value: 2,
    plus: '+',
  },
]
