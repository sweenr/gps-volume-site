import React from "react"
import styled from "styled-components"

import { Container, Section, SectionTitle } from "../global"

const Download = () => (
  <StyledSection id="download">
    <DownloadContainer>
      <SectionTitle>Download</SectionTitle>
      <DownloadButtonContainer>
          <DownloadLabel>Free Version:</DownloadLabel>
          <a href='https://play.google.com/store/apps/details?id=com.richardsween.gpsvolumefree&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
          <DownloadLabel>Ad-Free Version:</DownloadLabel>
          <a href='https://play.google.com/store/apps/details?id=com.richardsween.gpsvolume&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
      </DownloadButtonContainer>
    </DownloadContainer>
  </StyledSection>
)

export default Download

const StyledSection = styled(Section)`
  background-color: white;
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const DownloadContainer = styled(Container)`
  /*display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;*/
  padding: 80px 0 40px;
`

const DownloadLabel = styled.h4`
  margin: 0;
`

const DownloadButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-items: center;
  grid-column-gap: 35px;

  > h4 {
    grid-row: 1 /2;
  }

  > a > img {
    width: 25vw;
    @media (max-width: ${props => props.theme.screen.sm}) {
      width: 50vw;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`