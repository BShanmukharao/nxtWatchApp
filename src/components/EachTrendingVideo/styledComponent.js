import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const EachTrendingLi = styled.li`
  height: 100%;
  margin: 15px;
  display: flex;
`
export const TrendingImageContainer = styled.div`
  width: 40%;
`

export const TrendingImage = styled.img`
  width: 100%;
`

export const TrendingItemDetails = styled.div`
  width: 60%;
  margin-left: 20px;
`
export const TrendingTitle = styled.p`
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const TrendingChannelName = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #94a3b8;
`
