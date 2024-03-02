import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Form = styled.form`
  border-radius: 10px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px 50px 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (max-width: 402px) {
    min-width: 100%;
    padding: 40px 30px 40px 30px;
  }
  @media screen and (min-width: 403px) and (max-width: 768px) {
    max-width: 100%;
    min-width: 350px;
    padding: 40px 30px 40px 30px;
  }
`
export const WebsiteLogo = styled.img`
  width: 200px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`
export const EachFieldContainer = styled.div`
  margin-top: 24px;
  width: 100%;
`

export const LabelItem = styled.label`
  font-weight: bold;
  color: #606060;
  font-size: 13px;
`
export const InputItem = styled.input`
  width: 100%;
  margin-top: 5px;
  outline: none;
  padding: 12px 10px 12px 10px;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  border-color: #cccccc;
`

export const ShowPasswordContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    margin-left: 1px;
  }
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
`

export const ShowPasswordLabelItem = styled.label`
  font-weight: 500;
  margin-left: 7px;
  font-size: 15px;
  cursor: pointer;
`

export const LoginButton = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #3b82f6;
  border-width: 0px;
  padding: 12px 0px 12px 0px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 15px;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  align-self: flex-start;
  font-size: 14px;
  font-weight: 400;
`
