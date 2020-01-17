import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import About from "../components/sections/about"
import Footer from "../components/sections/footer"
import Gallery from "../components/sections/gallery"
import Download from "../components/sections/download"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <About />
    <Gallery />
    <Download />
    <Footer />
  </Layout>
)

export default IndexPage
