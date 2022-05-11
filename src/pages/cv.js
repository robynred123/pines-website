import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useWindowDimensions } from "../utils/windowDimensions"

const CVPage = () => {
  const [screenWidth, setScreenWidth] = useState("90vw")
  const { width } = useWindowDimensions()

  useEffect(() => {
    setScreenWidth(width)
  })

  return (
    <Layout>
      <Seo title="My CV" />
      <div style={{ justifyContent: "center", margin: 0, width: screenWidth }}>
        <iframe
          title="My CV"
          allowtransparency="true"
          src="https://docs.google.com/document/d/e/2PACX-1vRc3eHcWZQLAUP4y9tJgKrow5M1gLwknTI8A_yIUBbAdvAbmrCrB4ntpsaWbCrRH3YrjXCVEvTPZmPQ/pub?embedded=true"
          seamless="seamless"
          style={{
            border: "none",
            width: screenWidth,
            minHeight: "100vh",
          }}
        />
      </div>
    </Layout>
  )
}
export default CVPage
