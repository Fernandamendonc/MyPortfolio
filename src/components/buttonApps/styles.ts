import styled from 'styled-components'

interface TechnologiesPropos {
  colorBg: string
}

export const Container = styled.div<TechnologiesPropos>`
  background-color: ${(propos) => propos.colorBg};
`
