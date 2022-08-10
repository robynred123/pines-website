import React from "react"
import './logoButton.scss'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoGameControllerB,
} from "react-icons/io"

const LogoButton = ({ icon, onClick }) => {
  const determineIcon = icon => {
    switch (icon) {
      case "LinkedIn":
        return <IoLogoLinkedin className='logo-button' size={60} />
        break
      case "GitHub":
        return <IoLogoGithub className='logo-button' size={60}/>
        break
      case "CV":
        return <IoLogoGameControllerB className='logo-button' size={60}/>
        break
      default:
        break
    }
  }

  return (
    <a
      onClick={() => window.open(onClick, '_blank')}
    >
      {determineIcon(icon)}
    </a>
  )
}

export default LogoButton;
