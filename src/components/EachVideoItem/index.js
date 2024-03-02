import {Link} from 'react-router-dom'
import {
  EachLiItem,
  EachVideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoTitle,
  YoutubeName,
  YoutubeViweres,
  Dot,
} from './styledComponent'
import ConsumerObject from '../ConsumerObjext'
import './index.css'

const EachVideoItem = props => {
  const {eachVideoDetails} = props
  const {id} = eachVideoDetails
  return (
    <ConsumerObject.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <EachLiItem>
            <Link to={`/videos/${id}`} className="linkItem">
              <EachVideoThumbnail
                src={eachVideoDetails.thumbnialUrl}
                alt="video thumbnail"
              />
              <VideoDetails>
                <ChannelLogo
                  src={eachVideoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <VideoTitle isLightTheme={isLightTheme}>
                    {eachVideoDetails.title}
                  </VideoTitle>
                  <YoutubeName isLightTheme={isLightTheme}>
                    {eachVideoDetails.youTubeChannel}
                  </YoutubeName>
                  <YoutubeViweres isLightTheme={isLightTheme}>
                    {eachVideoDetails.viewers} <Dot>.</Dot>
                    {eachVideoDetails.publishedTime}
                  </YoutubeViweres>
                </div>
              </VideoDetails>
            </Link>
          </EachLiItem>
        )
      }}
    </ConsumerObject.Consumer>
  )
}

export default EachVideoItem
