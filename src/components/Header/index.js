import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {Link, withRouter} from 'react-router-dom'
import ConsumerObjext from '../ConsumerObjext'
import {
  HeaderContainer,
  WebsiteLogo,
  NavItemsContainer,
  EachNavItem,
  ThemeIcon,
  ProfileImage,
  LogoutButton,
  ColseContainer,
  LogoutDescription,
  LogoutButtonsContainer,
  CancelButton,
  ConformButton,
} from './styledComponent'
import './index.css'

const Header = props => {
  const onClickLogoutConform = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ConsumerObjext.Consumer>
      {value => {
        const {onToggleTheme, isLightTheme} = value
        const toggleTheme = () => {
          onToggleTheme()
        }
        return (
          <HeaderContainer isLightTheme={isLightTheme}>
            {isLightTheme ? (
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
            ) : (
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </Link>
            )}
            <NavItemsContainer>
              <EachNavItem>
                {isLightTheme ? (
                  <ThemeIcon
                    data-testid="theme"
                    label="darkIcon"
                    type="button"
                    onClick={toggleTheme}
                    isLightTheme={isLightTheme}
                  >
                    <FaMoon className="darkIcon" />
                  </ThemeIcon>
                ) : (
                  <ThemeIcon
                    data-testid="theme"
                    label="darkIcon"
                    type="button"
                    onClick={toggleTheme}
                    isLightTheme={isLightTheme}
                  >
                    <BsBrightnessHigh className="darkIcon" />
                  </ThemeIcon>
                )}
              </EachNavItem>
              <EachNavItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </EachNavItem>
              <EachNavItem>
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton type="button" isLightTheme={isLightTheme}>
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <ColseContainer>
                        <LogoutDescription>
                          Are you sure, you want to logout
                        </LogoutDescription>
                        <LogoutButtonsContainer>
                          <CancelButton type="button" onClick={() => close()}>
                            Cancel
                          </CancelButton>
                          <ConformButton
                            type="button"
                            onClick={onClickLogoutConform}
                          >
                            Confirm
                          </ConformButton>
                        </LogoutButtonsContainer>
                      </ColseContainer>
                    )}
                  </Popup>
                </div>
              </EachNavItem>
            </NavItemsContainer>
          </HeaderContainer>
        )
      }}
    </ConsumerObjext.Consumer>
  )
}

export default withRouter(Header)
