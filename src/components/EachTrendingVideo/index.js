import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  EachTrendingLi,
  TrendingImageContainer,
  TrendingImage,
  TrendingItemDetails,
  TrendingTitle,
  TrendingChannelName,
} from './styledComponent'
import ConsumerObject from '../ConsumerObjext'
import './index.css'

const EachTrendingVideo = props => {
  const {eachItemDetails} = props
  const {id} = eachItemDetails
  return (
    <ConsumerObject.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <EachTrendingLi>
            <Link to={`/videos/${id}`} className="eachTrendingLink">
              <TrendingImageContainer>
                <TrendingImage
                  src={eachItemDetails.thumbnialUrl}
                  alt="video thumbnail"
                />
              </TrendingImageContainer>
              <TrendingItemDetails>
                <TrendingTitle isLightTheme={isLightTheme}>
                  {eachItemDetails.title}
                </TrendingTitle>
                <TrendingChannelName>
                  {eachItemDetails.channelName}
                </TrendingChannelName>
                <TrendingChannelName>
                  {eachItemDetails.viewers} views .
                  {formatDistanceToNow(new Date(eachItemDetails.publishedTime))}
                </TrendingChannelName>
              </TrendingItemDetails>
            </Link>
          </EachTrendingLi>
        )
      }}
    </ConsumerObject.Consumer>
  )
}

export default EachTrendingVideo
