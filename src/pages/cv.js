import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CVPage = () => (
  <Layout>
    <Seo title="My CV" />
    <div>
      <iframe
        title="My CV"
        src="https://docs.google.com/document/d/e/2PACX-1vRc3eHcWZQLAUP4y9tJgKrow5M1gLwknTI8A_yIUBbAdvAbmrCrB4ntpsaWbCrRH3YrjXCVEvTPZmPQ/pub?embedded=true"
        seamless="seamless"
        style={{ border: "none", width: "100vw", minHeight: "100vh" }}
      />
    </div>
  </Layout>
)
export default CVPage
