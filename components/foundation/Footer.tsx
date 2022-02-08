import {FooterContainer, Copyright, FollowMeItem, FollowMeWrapper} from '../styles/FooterStyles'

function Footer() {
  return (
    <FooterContainer>
      <Copyright>Copyright Fionoble.com 2021</Copyright>
      <FollowMeWrapper>
        <FollowMeItem>G</FollowMeItem>
        <FollowMeItem>I</FollowMeItem>
        <FollowMeItem>T</FollowMeItem>
      </FollowMeWrapper>
    </FooterContainer>
  )
}

export default Footer;