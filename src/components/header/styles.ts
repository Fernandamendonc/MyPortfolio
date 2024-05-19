import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const CircleLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  background-color: #1e1e1e;

  padding: 10px;

  border-radius: 20px;

  span {
    font-weight: bolder;
  }
`

export const Logo = styled.div`
  display: flex;
  gap: 10px;
`
export const ButtonContact = styled.div`
  background-color: #3b3b3b;

  border-radius: 20px;
  border: 1px #5f5f5f solid;

  width: 130px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 0px 10px;

  p {
    font-size: 12px;
  }
`

export const Nav = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    color: white;
    font-size: 12px;
  }
`

export const ButtonContactPortfolio = styled.div`
  display: flex;
  gap: 5px;
`
