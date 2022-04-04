/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { green, offWhite } from "../constants"

const Layout = ({ children }) => {
  const page = children[0].props.title
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const styling = () => {
    if (page === "My CV") {
      return
    } else
      return {
        backgroundColor: offWhite,
      }
  }

  return (
    <div style={styling()}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            display: "flex",
            bottom: 0,
            justifyContent: "space-between",
            color: green,
          }}
        >
          <h5>{new Date().getFullYear()} @ Robyn Pines</h5>
          <h5>Welcome to the bottom of the page!</h5>
          <div style={{ width: "25vw" }} />
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
