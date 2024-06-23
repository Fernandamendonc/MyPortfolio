import styled from 'styled-components'

interface CurrentlyActiveProps {
  currentlyActive: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Title = styled.div`
  margin-left: 30px;

  font-size: 24px;

  font-weight: bolder;

  a {
    color: ${(props) => props.color};
    font-weight: bolder;
  }

  a:houver {
    color: p ${(props) => props.color};
  }
`
export const TimeWorked = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const CurrentlyActive = styled.div<CurrentlyActiveProps>`
  background-color: ${(props) => props.currentlyActive};

  border-radius: 10px;

  width: 15px;
  height: 15px;
`
export const Description = styled.div`
  margin-left: 30px;

  margin-bottom: 15px;

  p {
    margin: 0px;

    font-size: 17px;
  }
`
