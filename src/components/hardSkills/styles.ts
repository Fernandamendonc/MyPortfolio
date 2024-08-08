import styled from 'styled-components'

interface TechnologiesPropos {
  colorBg: string
}

export const Container = styled.div`
  border: 1px solid #45404a;
  border-radius: 5px;

  background-color: #312d35;

  display: flex;
  justify-content: start;
  gap: 20px;
  padding: 12px;
  min-width: 150px;
`
export const ContainerTechnologies = styled.div<TechnologiesPropos>`
  background-color: ${(propos) => propos.colorBg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 38px;
  height: 38px;
`

export const ContentTecnologies = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 0;
  }

  :nth-child(2n) {
    font-weight: 400;
    color: #6d6d6d;
    font-size: 13px;
  }
`
