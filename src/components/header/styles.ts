import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 44px;
`
export const CircleLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  background-color: #1e1e1e;

  padding: 10px;

  border-radius: 30px;
`

export const Logo = styled.div`
  display: flex;
  gap: 10px;

  padding-left: 10px;
`
export const ButtonContact = styled.button`
  background-color: #3b3b3b;

  border-radius: 30px;
  border: 1px #5f5f5f solid;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  cursor: pointer;

  padding: 8px 15px;

  p {
    font-size: 12px;
    margin: 0px;
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

  a:hover {
    color: white;
  }
`

export const ButtonContactPortfolio = styled.div`
  display: flex;
  gap: 5px;
`
