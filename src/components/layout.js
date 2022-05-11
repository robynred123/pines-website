/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { green } from "../constants"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          minWidth: "100vw",
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div>{children}</div>
      </div>
      <div
        style={{
          position: "sticky",
          bottom: 0,
          color: green,
          textAlign: "center",
          width: "80%",
        }}
      >
        <h5>{new Date().getFullYear()} @ Robyn Pines</h5>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
