import { TechnologiesTypes } from '../components/buttonApps'

const date = new Date()
const currentYear = date.getFullYear()

export const technologies: TechnologiesTypes[] = [
  {
    colorBg: '#3B37FF',
    id: '1',
    icon: '/src/assets/ic_typescript.svg',
    title: 'TypeScript',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#FFF848',
    id: '2',
    icon: '/src/assets/ic_javascript.svg',
    title: 'JavaScript',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#48D3FF',
    id: '3',
    icon: '/src/assets/ic_react.svg',
    title: 'React',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#494949',
    id: '4',
    icon: '/src/assets/ic_girhub_escuro.svg',
    title: 'Github',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#EE0000',
    id: '5',
    icon: '/src/assets/ic_figma.svg',
    title: 'Figma',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#FFF848',
    id: '6',
    icon: '/src/assets/ic_python.svg',
    title: 'Python',
    timeExperience: currentYear - 2022 + 1,
  },
  {
    colorBg: '#62FF48',
    id: '7',
    icon: '/src/assets/ic_node.svg',
    title: 'Node',
    timeExperience: currentYear - 2022 + 1,
  },
]
