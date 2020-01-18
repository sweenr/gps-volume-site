import React from "react"
import styled from "styled-components"
import ImageGallery from "react-image-gallery"

import { Container, Section, SectionTitle } from "../global"

import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original: "/images/main.png",
    originalAlt: "Main screen of GPS Volume App"
  },
  {
    original: "/images/notification.png",
    originalAlt: "Options menu screen of GPS Volume App"
  },
  {
    original: "/images/settings.png",
    originalAlt: "Options menu screen of GPS Volume App"
  },
  {
    original: "/images/settings2.png",
    originalAlt: "Options menu screen of GPS Volume App"
  },
  {
    original: "/images/speed_caps.png",
    originalAlt: "Options menu screen of GPS Volume App"
  },
  {
    original: "/images/units.png",
    originalAlt: "Options menu screen of GPS Volume App"
  },
  {
    original: "/images/save_dialog.png",
    originalAlt: "Options menu screen of GPS Volume App"
  },
  {
    original: "/images/load_dialog.png",
    originalAlt: "Options menu screen of GPS Volume App"
  },
]

const Gallery = () => (
  <StyledSection id="gallery">
    <GalleryContainer>
      <SectionTitle>Gallery</SectionTitle>
      <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} autoPlay={true} slideInterval={5000} />
    </GalleryContainer>
  </StyledSection>
)

export default Gallery

const StyledSection = styled(Section)`
  background-color: #5c946e;
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GalleryContainer = styled(Container)`
  padding: 80px 0 40px;
  /*display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  */
`