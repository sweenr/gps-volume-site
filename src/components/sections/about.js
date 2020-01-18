import React from "react"
import styled from "styled-components"

import { Section, Container, SectionTitle } from "../global"

const About = () => (
  <Section id="about">
    <StyledContainer>
      <SectionTitle>About</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureText>
          GPS Volume uses your phone's GPS system to change the media volume of your phone based on your current speed.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureText>
          GPS Volume is an Android™ app that mimics the speed-controlled volume found in many high-end cars. This app uses the GPS reported speed of your phone to set the media volume to a customizable level.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default About

const StyledContainer = styled(Container)`
  /* transform: skewY(5deg);
  border-radius: 4px;
  background-image: linear-gradient(to top, #fefefe 0%, #fbfbfb 100%); */
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const FeatureText = styled.p`
  text-align: center;
`
