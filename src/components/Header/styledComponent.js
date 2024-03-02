import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 35px 0px 35px;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const WebsiteLogo = styled.img`
  width: 130px;
`

export const NavItemsContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  align-items: center;
`

export const EachNavItem = styled.li`
  margin-left: 25px;
`

export const ThemeIcon = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`

export const LogoutButton = styled.button`
  border-style: solid;
  border-width: 1px;
  padding: 5px 18px 5px 18px;
  margin-bottom: 5px;
  border-radius: 3px;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  border-color: ${props => (props.isLightTheme ? '#3b82f6' : '#ffffff')};
  color: ${props => (props.isLightTheme ? '#3b82f6' : '#ffffff')};
`

export const ColseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  outline: none;
  border-width: 0px;
  padding-bottom: 30px;
  padding-top: 5px;
`

export const LogoutDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;
`

export const LogoutButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CancelButton = styled.button`
  padding: 10px 13px 10px 13px;
  color: #64748b;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: #64748b;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
`

export const ConformButton = styled.button`
  padding: 10px 13px 10px 13px;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 16px;
  border-width: 0px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
`
