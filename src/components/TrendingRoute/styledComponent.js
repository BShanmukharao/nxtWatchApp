import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const TrendingContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const MenuOptionAndTrendingContainer = styled.div`
  display: flex;
  height: 89vh;
`

export const NavBarAndTrendingVideosContainer = styled.div`
  width: 80%;
  overflow-y: auto;
`

export const FireIconAndTrendingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isLightTheme ? '#f1f5f9' : '#231f20')};
  padding: 20px 40px 20px 40px;
`

export const FireIconContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#ebebeb' : '#181818')};
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-right: 20px;
`

export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`
export const TrendingVideosContianer = styled.div`
  padding: 20px 20px 20px 20px;
  max-height: 100%;
`
export const EachTrendingVideoUlContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const LoadingContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  height: 100%;
  padding: 30px 60px 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isLightTheme ? '#ebebeb' : '#181818')};
`
export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isLightTheme ? '#212121' : '#ffffff')};
  font-family: 'Roboto';
  text-align: center;
  font-size: 28px;
`

export const FailureParagraph = styled.p`
  color: #606060;
  font-family: 'Roboto';
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`
export const RetryButton = styled.button`
  color: white;
  background-color: #4f46e5;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 13px 30px 13px 30px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`
