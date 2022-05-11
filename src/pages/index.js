import * as React from "react"
import { Carousel } from "../components/carousel"
import PersonalPhoto from "../images/personal-photo.png"
import { pink, purple } from "../constants"

import Layout from "../components/layout"
import Seo from "../components/seo"

const bio = (
  <h2
    style={{
      color: purple,
      flexWrap: "wrap",
      textAlign: "center",
      paddingTop: "10%",
      justifyContent: "center",
    }}
  >
    Mid-Level Software Engineer on a learning journey. <br />
    Experience in React (& React Native), Javascript/Typescript, Azure
    Functions, Node.js. <br />
    Mentoring Focused. <br />
    Stem Ambassador. <br />
    Bit of a nerd.
  </h2>
)

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="home">
        <div className="homeContent">
          <img src={PersonalPhoto} width={700} alt="A photo of myself" />
        </div>
        <div className="homeContent">{bio}</div>
      </div>
      <div width={"100%"}>
        <Carousel width />
      </div>
    </Layout>
  )
}

export default IndexPage
