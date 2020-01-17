import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const Download = () => (
  <StyledSection id="download">
    <DownloadContainer>
      <DownloadTitle>Download</DownloadTitle>
      <DownloadButtonContainer>
          <DownloadLabel>Free Version:</DownloadLabel>
          <DownloadLabel>Ad-Free Version:</DownloadLabel>
          <a href='https://play.google.com/store/apps/details?id=com.richardsween.gpsvolumefree&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const DownloadTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const DownloadLabel = styled.h4`
  margin: 0;
`

const DownloadButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-items: center;
`