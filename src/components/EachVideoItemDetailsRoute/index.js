import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiListPlus, BiDislike} from 'react-icons/bi'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import ConsumerObject from '../ConsumerObjext'
import Header from '../Header'
import MenuOptionsContainer from '../MenuOptionsContainer'
import './index.css'
import {
  EachVideoContainer,
  MenuOptionAndEachVideoContainer,
  EachVideoDetailsContainer,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  RetryButton,
  YoutubeVideoContainer,
  UniqueVideoDetailsContainer,
  VideoTitle,
  ViewsAndLikeAndDisLikeContainer,
  LikesAndDisLikesAndSavedButtonUlContainer,
  EachCommentsIcon,
  LikeButton,
  DisLikeButton,
  SavedButton,
  ChannelLogoAndSubCountContainer,
  ChannelLogo,
  ViewsPara,
  SubscribersContainer,
} from './styledComponent'

const apiConstraint = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class EachVideoItemDetailsRoute extends Component {
  state = {
    eachVideoDetails: {},
    initialApiStatus: apiConstraint.initial,
    likeButton: false,
    disLikeButton: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getEachItemDetails()
  }

  getEachItemDetails = async () => {
    this.setState({initialApiStatus: apiConstraint.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const URL = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(URL, options)
    const Data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        channelName: Data.video_details.channel.name,
        profileImageUrl: Data.video_details.channel.profile_image_url,
        subscribresCount: Data.video_details.channel.subscriber_count,
        Comments: Data.video_details.description,
        id: Data.video_details.id,
        publishedTime: Data.video_details.published_at,
        thumbnialUrl: Data.video_details.thumbnail_url,
        title: Data.video_details.title,
        videoUrl: Data.video_details.video_url,
        viweres: Data.video_details.view_count,
      }
      this.setState({
        eachVideoDetails: updatedData,
        initialApiStatus: apiConstraint.success,
      })
    } else {
      this.setState({initialApiStatus: apiConstraint.failure})
    }
  }

  renderLoading = isLightTheme => (
    <LoadingContainer data-testid="loader" isLightTheme={isLightTheme}>
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoadingContainer>
  )

  onEachDetailsRetry = () => {
    this.getEachItemDetails()
  }

  toggleSaveButton = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  toggleLikeButton = () => {
    this.setState(prevState => ({
      likeButton: !prevState.likeButton,
      disLikeButton: false,
    }))
  }

  toggleDisLikeButton = () => {
    this.setState(prevState => ({
      disLikeButton: !prevState.disLikeButton,
      likeButton: false,
    }))
  }

  renderSuccessCard = isLightTheme => (
    <ConsumerObject.Consumer>
      {value => {
        const {renderSaveItems} = value
        console.log(renderSaveItems)
        const {
          eachVideoDetails,
          likeButton,
          disLikeButton,
          isSaved,
        } = this.state
        const saveLabelContent = isSaved ? 'Saved' : 'Save'
        return (
          <UniqueVideoDetailsContainer isLightTheme={isLightTheme}>
            <YoutubeVideoContainer>
              <ReactPlayer
                url={eachVideoDetails.videoUrl}
                width="100%"
                height="65vh"
              />
              <VideoTitle isLightTheme={isLightTheme}>
                {eachVideoDetails.title}
              </VideoTitle>
              <ViewsAndLikeAndDisLikeContainer>
                <ViewsPara isLightTheme={isLightTheme}>
                  {eachVideoDetails.viweres} views .{' '}
                  {formatDistanceToNow(
                    new Date(eachVideoDetails.publishedTime),
                  )}
                </ViewsPara>
                <LikesAndDisLikesAndSavedButtonUlContainer>
                  <EachCommentsIcon>
                    <LikeButton
                      type="button"
                      label="like"
                      onClick={this.toggleLikeButton}
                      likeButton={likeButton}
                    >
                      <BiLike className="EachIcon" />
                      Like
                    </LikeButton>
                  </EachCommentsIcon>
                  <EachCommentsIcon>
                    <DisLikeButton
                      type="button"
                      label="dislike"
                      onClick={this.toggleDisLikeButton}
                      disLikeButton={disLikeButton}
                    >
                      <BiDislike className="EachIcon" />
                      Dislike
                    </DisLikeButton>
                  </EachCommentsIcon>
                  <EachCommentsIcon>
                    <SavedButton
                      type="button"
                      label="saved"
                      onClick={this.toggleSaveButton}
                      isSaved={isSaved}
                    >
                      <BiListPlus className="EachIcon" />
                      {saveLabelContent}
                    </SavedButton>
                  </EachCommentsIcon>
                </LikesAndDisLikesAndSavedButtonUlContainer>
              </ViewsAndLikeAndDisLikeContainer>
              <hr />
              <ChannelLogoAndSubCountContainer>
                <ChannelLogo
                  src={eachVideoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <SubscribersContainer isLightTheme={isLightTheme}>
                  <p>{eachVideoDetails.channelName}</p>
                  <p>{eachVideoDetails.subscribresCount} subscribers</p>
                  <p>{eachVideoDetails.Comments}</p>
                </SubscribersContainer>
              </ChannelLogoAndSubCountContainer>
            </YoutubeVideoContainer>
          </UniqueVideoDetailsContainer>
        )
      }}
    </ConsumerObject.Consumer>
  )

  renderFailureCard = isLightTheme => (
    <FailureContainer isLightTheme={isLightTheme}>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading isLightTheme={isLightTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureParagraph isLightTheme={isLightTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailureParagraph>
      <RetryButton type="button" onClick={this.onEachDetailsRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderCards = isLightTheme => {
    const {initialApiStatus} = this.state
    switch (initialApiStatus) {
      case apiConstraint.loading:
        return this.renderLoading(isLightTheme)
      case apiConstraint.success:
        return this.renderSuccessCard(isLightTheme)
      case apiConstraint.failure:
        return this.renderFailureCard(isLightTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ConsumerObject.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <EachVideoContainer
              data-testid="videoItemDetails"
              isLightTheme={isLightTheme}
            >
              <Header />
              <MenuOptionAndEachVideoContainer>
                <MenuOptionsContainer />
                <EachVideoDetailsContainer isLightTheme={isLightTheme}>
                  {this.renderCards(isLightTheme)}
                </EachVideoDetailsContainer>
              </MenuOptionAndEachVideoContainer>
            </EachVideoContainer>
          )
        }}
      </ConsumerObject.Consumer>
    )
  }
}

export default EachVideoItemDetailsRoute
