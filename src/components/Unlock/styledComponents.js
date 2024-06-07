import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(#161617, #0b0c1e);
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`

export const LockImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 576px) {
    width: 150px;
    height: 150px;
  }
`
export const LockHeading = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
`

export const UnLockButton = styled.button`
  background-color: #06b6d4;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  border: none;
  padding: 8px 24px 8px 24px;
  border-radius: 6px;
  font-size: 16px;
`
