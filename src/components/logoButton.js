import React, { useState } from "react"
import { Link } from "gatsby"
import { green, cream, pink } from "../constants"
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoGameControllerB,
} from "react-icons/io"

export const LogoButton = ({ icon, onClick }) => {
  const [buttonColour, setButtonColour] = useState(cream)

  const determineIcon = icon => {
    switch (icon) {
      case "LinkedIn":
        return <IoLogoLinkedin size={40} color={buttonColour} />
        break
      case "GitHub":
        return <IoLogoGithub size={40} color={buttonColour} />
        break
      case "CV":
        return <IoLogoGameControllerB size={40} color={buttonColour} />
        break
      default:
        break
    }
  }

  const svg = determineIcon(icon)
  return (
    <button
      style={{
        border: "none",
        color: "none",
        padding: 0,
        backgroundColor: green,
      }}
      onMouseEnter={() => setButtonColour(pink)}
      onMouseLeave={() => setButtonColour(cream)}
      onClick={() => onClick}
    >
      <Link to={onClick}>{determineIcon(icon)}</Link>
    </button>
  )
}
