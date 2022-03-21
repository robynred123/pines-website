import React, { useState } from "react"
import { Link } from "gatsby"
import { cream, green, pink } from "../constants"
import { LogoButton } from "./logoButton"

const siteTitle = "<RP />"
const Header = () => {
  return (
    <header
      style={{
        background: green,
        marginBottom: `1.45rem`,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: "10px",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          textAlign: "center",
          paddingTop: "15px",
        }}
      >
        <h1>
          <Link
            to="/"
            style={{
              color: cream,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>

      <div
        style={{
          justifyContent: "flex-end",
          width: "50%",
          display: "flex",
        }}
      >
        <LogoButton
          onClick={"https://linkedin.com/in/robyn-pines-2a813850"}
          icon={"LinkedIn"}
        />
        <LogoButton
          onClick={"https://github.com/robynred123"}
          icon={"GitHub"}
        />
        <LogoButton onClick={() => console.log("clicked!")} icon={"CV"} />
      </div>
    </header>
  )
}

export default Header
