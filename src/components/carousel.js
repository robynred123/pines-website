import React, { useEffect, useState } from "react"
import { pink } from "../constants"

const texts = [
  "Full-Stack Software Engineer",
  "Experienced In React, React-Native, Javascript, Typescript",
  "Interested In Learning New Skills & Working In New Environments",
  "Experience with Microsoft Azure",
  "Works Well Independently & In A Team",
  "Communicates Well Written & Verbally",
]

export const Carousel = width => {
  const [textToShow, setTextToShow] = useState(texts[0])

  const textStyling = () => {
    if (width <= 800) {
      return {
        color: pink,
        flexWrap: "wrap",
        textAlign: "center",
        padding: 15,
      }
    }
    return {
      color: pink,
      flexWrap: "wrap",
      textAlign: "center",
      paddingTop: "25vh",
      justifyContent: "center",
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      updateTexts()
    }, 5000)

    return () => clearInterval(timer)
  }, [textToShow])

  const updateTexts = () => {
    const index = texts.findIndex(text => text === textToShow)
    if (index === texts.length - 1) {
      setTextToShow(texts[0])
    } else {
      setTextToShow(texts[index + 1])
    }
  }

  return (
    <div>
      <h2 style={textStyling()}>{textToShow}</h2>
    </div>
  )
}
