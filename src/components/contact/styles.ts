import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 130px;
`
export const SummaryInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`
export const SummaryInformationContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const SummaryInformationTitle = styled.p`
  color: gray;
  font-weight: bold;
`
export const SummaryInformationCount = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0px;
  }
  gap: 5px;

  font-size: 48px;
`
export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
export const ContactInformationHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
  margin-bottom: 40px;
`
export const ContactInformationTitle = styled.span`
  font-size: 48px;
  font-weight: bold;
`
export const ContactInformationSubtitle = styled.span``
export const ContactInformationButton = styled.button`
  background-color: white;
  color: black;

  margin-bottom: 100px;

  padding: 10px 15px;

  font-weight: bold;
`
export const ContactInformationImg = styled.img`
  width: 100%;

  position: absolute;
  z-index: -100;
`
