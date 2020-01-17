import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <BrandContainer>
      <Copyright>Copyright © {new Date().getFullYear()} Richard Sween. All rights reserved.</Copyright>
      <Attribution>Google Play and the Google Play logo are trademarks of Google LLC.</Attribution>
      <Attribution>Based off the <a href="https://github.com/keegn/gatsby-starter-saas-marketing">Gatsby starter</a> by keegn.</Attribution>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: #a0dde6;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Copyright = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

const Attribution = styled.small`
  margin-top: 15px;
  font-size: 14px;
`

export default Footer
