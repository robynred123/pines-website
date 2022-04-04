import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "../components/carousel"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useWindowDimensions } from "../utils/windowDimensions"

const pageStyling = (content, width) => {
  switch (content) {
    case "content":
      if (width <= 800) {
        return {
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 50,
          display: "flex",
        }
      } else
        return {
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 100,
          display: "flex",
          height: "100vh",
        }
      break
    case "div":
      if (width <= 800) {
        return {
          maxWidth: "100%",
          height: "40vh",
          justifyContent: "center",
        }
      } else
        return {
          maxWidth: "50%",
          height: "100vh",
        }
    default:
      break
  }
}

const IndexPage = () => {
  const { width } = useWindowDimensions()

  return (
    <Layout>
      <Seo title="Home" />
      <div style={pageStyling("content", width)}>
        <div style={pageStyling("div", width)}>
          <StaticImage
            src="../images/personal-photo.png"
            width={500}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A photo of myself"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div style={pageStyling("div", width)}>
          <Carousel width />
        </div>
      </div>
      {/* */}
    </Layout>
  )
}

export default IndexPage
