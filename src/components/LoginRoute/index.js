import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  Form,
  WebsiteLogo,
  EachFieldContainer,
  LabelItem,
  InputItem,
  ShowPasswordContainer,
  CheckBox,
  ShowPasswordLabelItem,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    isGetErrorMsg: false,
    isShownPassWord: false,
  }

  onTogglePassword = () => {
    this.setState(prevState => ({
      isShownPassWord: !prevState.isShownPassWord,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMessage: errorMsg, isGetErrorMsg: true})
  }

  readFormData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const loginResponse = await fetch(url, options)
    const jsonData = await loginResponse.json()
    if (loginResponse.ok === true) {
      this.onSubmitSuccess(jsonData.jwt_token)
    } else {
      this.onSubmitFailure(jsonData.error_msg)
    }
  }

  readUsername = event => {
    this.setState({username: event.target.value})
  }

  readPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      username,
      password,
      errorMessage,
      isGetErrorMsg,
      isShownPassWord,
    } = this.state
    const typeOfInput = isShownPassWord ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <Form onSubmit={this.readFormData}>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <EachFieldContainer>
            <LabelItem htmlFor="USERNAME">USERNAME</LabelItem>
            <br />
            <InputItem
              type="text"
              placeholder="Username"
              id="USERNAME"
              onChange={this.readUsername}
              value={username}
            />
          </EachFieldContainer>
          <EachFieldContainer>
            <LabelItem htmlFor="PASSWORD">PASSWORD</LabelItem>
            <br />
            <InputItem
              type={typeOfInput}
              placeholder="Password"
              id="PASSWORD"
              onChange={this.readPassword}
              value={password}
            />
          </EachFieldContainer>
          <ShowPasswordContainer>
            <CheckBox
              type="checkbox"
              id="SHOWPASSWORD"
              onClick={this.onTogglePassword}
            />
            <ShowPasswordLabelItem htmlFor="SHOWPASSWORD">
              Show Password
            </ShowPasswordLabelItem>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {isGetErrorMsg && <ErrorMsg>*{errorMessage}</ErrorMsg>}
        </Form>
      </LoginContainer>
    )
  }
}

export default LoginRoute
