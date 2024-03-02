import {Link} from 'react-router-dom'
import {
  EachGamingLi,
  GamingImage,
  Gamingtitle,
  GamingViweres,
} from './styledComponent'
import ConsumerObject from '../ConsumerObjext'
import './index.css'

const EachGamingVideo = props => {
  const {eachGamingDetails} = props
  const {id} = eachGamingDetails
  return (
    <ConsumerObject.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <EachGamingLi>
            <Link to={`/videos/${id}`} className="eachGamingLink">
              <GamingImage
                src={eachGamingDetails.thumbnialUrl}
                alt="video thumbnail"
              />
              <Gamingtitle isLightTheme={isLightTheme}>
                {eachGamingDetails.title}
              </Gamingtitle>
              <GamingViweres>
                {eachGamingDetails.viewers} Watching Worldwide
              </GamingViweres>
            </Link>
          </EachGamingLi>
        )
      }}
    </ConsumerObject.Consumer>
  )
}

export default EachGamingVideo
