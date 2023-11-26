import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0px;

  background-color: var(--gray-10);

  span {
   text-align: center;
  }
`
export const HardskillsLogos = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 30px;
  max-width: 1000px;

  img {
    width: 150px;
    height: 70px;
  }
`